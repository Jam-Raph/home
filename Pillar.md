# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development rules
use context7 mcp server to get the latest documentation from Next.js, FastAPI, Supbase, Anthropic

## Project Overview

Pillar is a legal intelligence platform for Singapore law firms built as a monorepo with:
- **apps/api** - FastAPI backend (refactored, production-ready)
- **apps/frontend** - Next.js 15 frontend with App Router
- **apps/broker** - Celery-based background worker for web scraping

**Note:** The legacy `apps/api` has been migrated to the refactored architecture. Legacy code is archived in `apps/api_legacy_backup/` (gitignored).

## Common Development Commands

### Frontend (Next.js)
```bash
cd apps/frontend

# Development
npm run dev              # Start dev server at http://localhost:3000
npm run build            # Production build
npm run start            # Start production server
npm run lint             # Run ESLint

# Testing
npm test                 # Run tests (if configured)
```

### Backend (FastAPI)
```bash
cd apps/api

# Environment setup (first time)
python -m venv .venv
source .venv/bin/activate     # macOS/Linux
.\venv\Scripts\Activate.ps1   # Windows

# Install dependencies
pip install -r requirements.txt

# Development
fastapi dev              # Start dev server at http://localhost:8000

# Testing
pytest                   # Run all tests
pytest tests/            # Run specific directory
pytest -v                # Verbose output
```

### Broker (Celery Worker)
```bash
cd apps/broker

# Environment setup
python -m venv .venv
source .venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run worker (requires RabbitMQ running)
celery -A celery_app worker --loglevel=info
```

### Docker (Full Stack)
```bash
# From project root
docker compose up --build    # Build and start all services
docker compose down          # Stop all services

# Access:
# - API: http://localhost:8000
# - Frontend: http://localhost:3000
```

## Architecture Overview

### Request Flow
```
User → Frontend (Next.js) → Next.js API Routes (auth proxy) → FastAPI Backend → Supabase/Claude API
```

### Frontend Architecture

**Routing Structure:**
- `app/(public)/` - Public routes (health check)
- `app/(protected)/` - Authenticated routes (main chat, library, workflows)
- `app/(protected)/projects/` - Document projects and RAG chat
- `app/login/` and `app/verifyOTP/` - Authentication pages
- `app/api/` - Next.js API routes that proxy to backend with auth injection

**Key Patterns:**
- **Authentication:** Middleware (`middleware.ts`) validates Supabase session on every request, redirects to `/login` if unauthenticated
- **State Management:** Zustand for client state (`lib/chat-draft-store.ts`), server components fetch directly via Supabase
- **API Proxy Pattern:** Next.js API routes validate Supabase session server-side, inject bearer token before calling FastAPI backend (prevents exposing backend URL/credentials to client)
- **Component Organization:**
  - `components/ui/` - Radix UI primitives (button, card, input, etc.)
  - `components/` - Feature components (chat-interface, sidebar, main-app)

**Important Files:**
- `middleware.ts` - Route protection and session validation
- `lib/api-service.ts` - Centralized API client for backend calls
- `lib/auth.ts` - Supabase auth wrapper
- `lib/supabase/` - Server/client/middleware Supabase utilities

### Broker Architecture

**Purpose:** Background worker for web scraping legal judgments from eLitigation.sg

**Key Components:**
- `celery_app.py` - Celery configuration and scheduled tasks
- `scraper.py` - Selenium-based scraper for Singapore legal judgments
- `swiss_bger_crypto_scraper.py` - Swiss court scraper
- Runs daily at 00:53 SGT to check for new judgments
- Stores results in Supabase `crypto_articles` table and storage buckets

**No Direct Communication:** Broker and API are separate processes communicating only through Supabase (broker writes, API reads)

### Authentication Flow

1. User enters email on `/login`
2. Backend validates email against whitelist in Supabase `profiles` table
3. Supabase sends OTP via email
4. User enters OTP on `/verifyOTP`
5. Backend verifies OTP and returns JWT tokens
6. Tokens stored in httpOnly cookies via Supabase SSR
7. Middleware validates session on all protected routes

**Security:**
- Email whitelisting via `profiles` table
- JWT tokens in httpOnly cookies
- Row-Level Security (RLS) on Supabase tables
- CORS limited to localhost:3000 and frontend:3000 (Docker)

## Key Integrations

### Supabase (Backend-as-a-Service)
- **Auth:** Email OTP, JWT tokens, session management
- **Database:** PostgreSQL with Python SDK
- **Storage:** File uploads (affidavits, generated forms, judgments)
- **Tables:**
  - `profiles` - User whitelist
  - `conversations` - Chat metadata (includes `project_id` for project chats)
  - `claude_history` - Chat messages
  - `claude_files` - File attachments metadata
  - `crypto_articles` - Scraped legal judgments
  - `generated_articles` - AI-generated marketing content
  - `b14_forms_generated` - Form B14 generation history
  - `projects` - Document projects for RAG chat
  - `project_documents` - Project document metadata (filename, status, chunk_count)
  - `project_access_control` - Project sharing permissions
  - `extensions.project_document_chunks` - Document chunks with vector embeddings (pgvector)

### Anthropic Claude API
- **Models:**
  - `claude-sonnet-4-5` - Main chat, form extraction with tool calling, RAG responses
  - `claude-haiku-4-5` - Chat title generation, marketing (cost optimization)
- **Features:**
  - Streaming responses (SSE/NDJSON)
  - Tool calling for structured data extraction
  - File upload API for document analysis
  - Citations enabled for marketing articles
  - Prompt caching for document context generation (reduces costs for repeated context)

### Voyage AI (Embeddings)
- **Model:** `voyage-law-2` - Legal domain embeddings (1024 dimensions)
- **Usage:** Document chunk embeddings for RAG vector search
- **Client:** `clients/voyage_client.py` (singleton pattern)

## Important Patterns and Conventions

### Form B14 Generation Workflow
1. User uploads affidavit PDF via drag-drop (`app/(protected)/workflow/B14/`)
2. File uploaded to Supabase storage bucket `legal-forms`
3. Backend calls Claude with tool calling to extract structured data
4. **Data Reconciliation:** LLM extraction verified with regex (`reconcile_b14_fields_from_source()`) for critical fields (case numbers, names)
5. DOCX generated using `python-docx` via `SimpleDocxRenderer`
6. Generated form uploaded to Supabase storage
7. Download URL returned to user

**Pattern:** Ports and Adapters (Hexagonal Architecture)
- `StoragePort` abstract interface for storage
- `DocRendererPort` for DOCX rendering
- Concrete implementations: `SupabaseStorage`, `SimpleDocxRenderer`

### Crypto Marketing Article Generation
1. Broker scrapes judgments daily and stores in Supabase
2. User triggers generation via `/crypto-marketing/start`
3. Backend retrieves judgment from Supabase storage
4. Claude generates marketing content using file upload API + web search tool
5. Streaming response sent to frontend
6. Result stored in `generated_articles` table (upsert for idempotency)

### Chat Interface
- **Optimistic UI:** Messages added to UI immediately, then Claude response streamed incrementally
- **Conversation History:** Full context sent to Claude on each message
- **File Attachments:** Uploaded to Supabase storage, metadata in `claude_files` table
- **Chat Titles:** Auto-generated by Claude Haiku based on user query + assistant response

### Projects RAG Workflow
Document-based chat using Retrieval-Augmented Generation:

1. **Upload:** User uploads PDF/DOCX/TXT via drag-drop (`app/(protected)/projects/[id]/`)
2. **Storage:** Files saved to per-organisation Supabase bucket (`{org_name}-projects`)
3. **Chunking:** Documents split into ~400 token chunks (`services/chunking_service.py`)
4. **Context Generation:** Claude generates context summary for each chunk (with prompt caching)
5. **Embedding:** Voyage AI `voyage-law-2` creates 1024-dim vectors (`services/embedding_service.py`)
6. **Storage:** Chunks + embeddings stored in `extensions.project_document_chunks` via RPC
7. **Chat:** User asks question → vector search retrieves top 5 chunks → injected into system prompt
8. **Response:** Claude Sonnet streams response with document citations

**Key Services:**
- `ProjectDocumentService` - Upload, chunking, embedding orchestration
- `ProjectChatService` - RAG chat with vector search + Claude streaming
- `ChunkingService` - Token-aware text splitting
- `EmbeddingService` - Voyage AI embeddings with context generation

## Backend Architecture (apps/api)

The backend follows a clean, layered architecture with clear separation of concerns.

### Project Structure

```
api/
├── main.py                        # FastAPI app entry point, router registration
├── config/
│   └── config.py                  # Environment variables, settings (Pydantic Settings)
├── routes/                        # HTTP layer - thin, delegates to services
│   ├── assistant.py               # AI assistant chat endpoints
│   ├── crypto_marketing.py        # Marketing article generation endpoints
│   ├── b14.py                     # Form B14 workflow endpoints
│   ├── auth.py                    # Authentication endpoints (OTP)
│   ├── conversations.py           # Conversation CRUD endpoints
│   └── projects.py                # Projects CRUD, document upload, RAG chat
├── models/                        # Pydantic schemas - no business logic
│   ├── assistant_models.py        # AI assistant request/response models
│   ├── claude_models.py           # Claude API models (messages, files)
│   ├── crypto_marketing_models.py # Marketing article models
│   ├── b14_models.py              # Form B14 extraction models
│   ├── auth_models.py             # Auth request/response models
│   ├── conversation_models.py     # Conversation/message models
│   ├── supabase_models.py         # Supabase table models
│   ├── project_models.py          # Projects, documents, chunks models
│   └── common.py                  # Shared DTOs (User, ErrorResponse, etc.)
├── services/                      # Business logic layer
│   ├── assistant_service.py       # AI chat orchestrator (Claude + Conversations)
│   ├── crypto_marketing_service.py # Marketing generation orchestrator
│   ├── b14_service.py             # Form B14 orchestrator (Claude + Supabase + rendering)
│   ├── conversation_service.py    # Conversation CRUD operations
│   ├── organisation_service.py    # Organisation lookup
│   ├── auth_service.py            # Authentication logic
│   ├── project_chat_service.py    # RAG chat orchestrator (vector search + Claude)
│   ├── project_document_service.py # Document upload, chunking, embedding
│   ├── chunking_service.py        # Token-aware text splitting
│   └── embedding_service.py       # Voyage AI embeddings with context
├── clients/                       # External service wrappers (singletons)
│   ├── claude_client.py           # Anthropic/Claude API wrapper
│   ├── supabase_client.py         # Supabase client wrapper
│   └── voyage_client.py           # Voyage AI embeddings wrapper
├── policies/                      # Authorization logic
│   └── user_authorisation.py      # JWT validation, permission checks
├── utils/                         # Pure utility functions
│   └── B14_helper.py              # PDF extraction, text processing
├── prompts/                       # LLM system prompts
│   └── b14_sys_prompt.txt         # B14 extraction prompt
└── tests/                         # Tests mirror the structure
    ├── routes/
    │   ├── unit/
    │   ├── integration/
    │   └── e2e/
    ├── services/
    │   ├── unit/
    │   ├── integration/
    │   └── e2e/
    ├── clients/
    │   └── unit/
    └── policies/
```

### Layer Responsibilities

#### 1. Routes (HTTP Layer)
**Purpose:** Handle HTTP concerns only - request parsing, response formatting, status codes

**Rules:**
- Routes are thin (5-15 lines per endpoint)
- Delegate ALL business logic to services
- Never call clients directly - always go through services
- Never perform database queries

**Example from `routes/assistant.py`:**
```python
@router.post("/send")
async def send_message(
    prompt: str = Form(...),
    conversation_id: Optional[str] = Form(None),
    user_id: str = Depends(verify_authenticated_user),
    assistant: AssistantService = Depends(get_assistant_instance)
):
    """Route only handles HTTP - delegates to service"""
    async_gen = assistant.send_message(user_id=user_id, prompt=prompt, ...)
    return StreamingResponse(async_gen, media_type="application/x-ndjson")
```

#### 2. Services (Business Logic Layer)
**Purpose:** Contain all business logic, orchestrate operations between clients

**Rules:**
- All business logic lives here
- Services can call clients and other services
- Never import from routes (dependency flows: routes → services → clients)
- Should be testable without FastAPI

**Orchestrator Services:**
Some services act as orchestrators that coordinate multiple clients and other services:

| Service | Role | Dependencies |
|---------|------|--------------|
| `AssistantService` | Orchestrates chat: Claude API + conversation persistence | `ClaudeClient`, `ConversationService` |
| `B14Service` | Orchestrates form generation: file download, Claude extraction, DOCX rendering, upload | `ClaudeClient`, `SupabaseClient`, `OrganisationService` |
| `CryptoMarketingService` | Orchestrates article generation: fetch judgment, Claude + web search, save result | `ClaudeClient`, `SupabaseClient` |
| `ProjectChatService` | Orchestrates RAG chat: vector search + Claude streaming + conversation | `ClaudeClient`, `ConversationService`, `ProjectDocumentService` |
| `ProjectDocumentService` | Orchestrates document processing: upload, chunking, embedding, storage | `SupabaseClient`, `VoyageClient`, `ChunkingService`, `EmbeddingService` |

**Example from `services/assistant_service.py`:**
```python
class AssistantService:
    """Orchestrates AI assistant chat logic, streaming, and file processing."""

    def __init__(self, claude_client: ClaudeClient, conversation_service: ConversationService):
        self.claude = claude_client
        self.conversation_service = conversation_service

    async def send_message(self, user_id: str, prompt: str, conversation_id: Optional[str] = None, ...):
        # Orchestrates: conversation history → Claude API → save response
        if conversation_id:
            conversation = await self.conversation_service.get_conversation_detail(...)
            # ... build messages, call Claude, save to DB
```

#### 3. Clients (External Service Wrappers)
**Purpose:** Wrap external APIs with clean interfaces. **SINGLETON PATTERN REQUIRED.**

**Rules:**
- Create singleton instances using `@lru_cache()` decorator
- Clients are stateless wrappers around external SDKs
- No business logic - only technical integration concerns
- Expose `get_client()` for services that need direct SDK access

**Singleton Pattern - CRITICAL:**
```python
# clients/claude_client.py
class ClaudeClient:
    def __init__(self, api_key: Optional[str] = None):
        settings = get_settings()
        self._client = AsyncAnthropic(api_key=api_key or settings.CLAUDE_API_KEY)

    def get_client(self) -> AsyncAnthropic:
        """Services call this to access the SDK directly"""
        return self._client

@lru_cache()
def get_claude_client() -> ClaudeClient:
    """Return singleton instance - avoids recreating SDK clients"""
    return ClaudeClient()
```

```python
# clients/supabase_client.py
class SupabaseClient:
    async def get_client(self) -> AsyncClient:
        """Lazily create and cache AsyncClient"""
        if self._client is None:
            self._client = await acreate_client(self._url, self._key)
        return self._client

@lru_cache()
def get_supabase_client() -> SupabaseClient:
    """Return singleton instance"""
    return SupabaseClient()
```

**Usage in routes (dependency injection):**
```python
@lru_cache()
def get_assistant_instance() -> AssistantService:
    """Return singleton AssistantService with injected clients"""
    return AssistantService(
        claude_client=get_claude_client(),
        conversation_service=get_conversation_service()
    )

@router.post("/send")
async def send_message(
    assistant: AssistantService = Depends(get_assistant_instance)
):
    ...
```

#### 4. Models (Data Transfer Objects)
**Purpose:** Define data shapes using Pydantic - NO business logic

**Rules:**
- Pydantic models for validation/serialization only
- No methods with side effects
- Simple `@property` for computed fields is OK

#### 5. Policies (Authorization Logic)
**Purpose:** Pure authorization decision functions

Located in `policies/user_authorisation.py`:
- `verify_authenticated_user` - FastAPI dependency that validates JWT
- Permission check functions (can user X access resource Y?)

### Design Principles

1. **Single Responsibility Principle**
   - Routes change when HTTP contracts change
   - Services change when business rules change
   - Clients change when external APIs change

2. **Dependency Flow**
   ```
   Routes → Services → Clients
              ↓
           Models (imported anywhere)
   ```
   Never reverse: services MUST NOT import from routes

3. **Singleton Pattern for Clients**
   - All clients use `@lru_cache()` to ensure single instance per process
   - Prevents repeatedly constructing SDK clients
   - Services receive clients via constructor injection

4. **Orchestrator Services**
   - Complex features (B14, Assistant, CryptoMarketing) have orchestrator services
   - These services coordinate multiple clients and other services
   - Expect interweaving of service calls in these orchestrators

## Environment Variables

Required environment variables (see README for setup):

**Backend (apps/api/.env):**
- `SUPABASE_URL` - Supabase project URL
- `SUPABASE_KEY` - Supabase service role key
- `CLAUDE_API_KEY` - Anthropic API key
- `VOYAGE_API_KEY` - Voyage AI API key (for document embeddings)

**Frontend (apps/frontend/.env):**
- `NEXT_PUBLIC_API_URL` - Backend API URL (http://localhost:8000 for dev)
- `NEXT_PUBLIC_SUPABASE_URL` - Supabase project URL
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` - Supabase publishable key

## Testing

### Backend Tests (apps/api)
- Located in `apps/api/tests/`
- Organized by layer: `routes/`, `services/`, `clients/`, `policies/`
- Each layer has subdirs: `unit/`, `integration/`, `e2e/`
- Run with `pytest` from `apps/api/` directory
- Uses `pytest-asyncio` for async test support

### Frontend Tests
- Test configuration to be determined (not visible in current structure)
- Component tests would go in `__tests__/` or `.test.tsx` files

## Code Style and Conventions

### Python (Backend - apps/api)
- FastAPI with async/await throughout
- Pydantic models for request/response validation
- Layered architecture: routes → services → clients
- Type hints required for function signatures
- Business logic MUST be in `services/` folder, NOT in route handlers
- Clients use singleton pattern with `@lru_cache()` decorator
- Services receive clients via constructor injection

### TypeScript (Frontend)
- Strict TypeScript mode enabled
- Server components by default, use `'use client'` directive when needed
- Shadcn/ui component patterns for UI
- Tailwind CSS for styling (utility-first)
- Import aliases: `@/` maps to project root

## Common Development Tasks

### Adding a New API Endpoint

**Backend (apps/api):**
1. Create Pydantic models in `models/<feature>_models.py`
2. Create service class in `services/<feature>_service.py`
   - Inject required clients via constructor
   - Implement business logic here
3. Create route handler in `routes/<feature>.py`
   - Keep thin - delegate to service
   - Use `@lru_cache()` for service singleton
   - Use `Depends(verify_authenticated_user)` for auth
4. Register router in `main.py`

**Example pattern:**
```python
# routes/my_feature.py
from functools import lru_cache
from ..clients.supabase_client import get_supabase_client
from ..services.my_feature_service import MyFeatureService

@lru_cache()
def get_service() -> MyFeatureService:
    return MyFeatureService(supabase_client=get_supabase_client())

@router.post("/my-endpoint")
async def my_endpoint(
    user_id: str = Depends(verify_authenticated_user),
    service: MyFeatureService = Depends(get_service)
):
    return await service.do_something(user_id)
```

**Frontend:**
1. Add method to `apps/frontend/lib/api-service.ts` (if direct backend call)
2. OR create Next.js API route in `apps/frontend/app/api/<route>/route.ts` (if auth proxy needed)
3. Call from component/page

### Adding a New Page

1. Create page file: `apps/frontend/app/(protected)/<route>/page.tsx`
2. Add to navigation in `components/sidebar.tsx` if needed
3. Protected routes automatically require authentication via `(protected)` layout
4. Public routes go in `app/(public)/`

### Working with Supabase

**Backend (apps/api):**
```python
# In a service - inject SupabaseClient via constructor
from ..clients.supabase_client import SupabaseClient

class MyService:
    def __init__(self, supabase_client: SupabaseClient):
        self.supabase = supabase_client

    async def my_method(self):
        # Get the async client
        client = await self.supabase.get_client()
        result = await client.table("table_name").select("*").eq("id", id).execute()
```

**Frontend:**
```typescript
import { createClient } from '@/lib/supabase/server'  // Server components
import { createClient } from '@/lib/supabase/client'  // Client components

const supabase = createClient()
const { data, error } = await supabase.from('table_name').select('*')
```

### Adding Celery Tasks (Broker)

1. Define task in `apps/broker/celery_app.py` with `@app.task` decorator
2. Configure schedule in `app.conf.beat_schedule` if periodic
3. Implement scraping logic in `scraper.py` or create new module
4. Use `CryptoMarketingService` for Supabase interactions

## Deployment

Production deployment uses Docker Compose
- containers can be accessed via frontend:3000 and api:8000
- Auto-deployment script: `./first-setup.sh` (requires chmod +x)

## Git Workflow

- Main branch: `main`
- Recent focus areas (based on commits): login error handling, article generation, housekeeping
- GitHub Projects board available at: https://github.com/orgs/Jam-Raph/projects/1