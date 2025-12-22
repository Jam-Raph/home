'use server'


export async function POST(request: Request) {
    // Parse the request body
    const body = await request.json();
    const { firstName, lastName, email, organisation, note, phone } = body;
    // To be finished
    return new Response("recieved", {
        status: 201,
        headers: { 'Content-Type': 'application/json' }
    });
}