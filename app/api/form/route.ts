'use server'
import 'dotenv/config'

const teleKey = process.env.TELE_KEY
const teleChatID = process.env.TELE_CHAT_ID
export async function POST(request: Request) {
    // Parse the request body
    const body = await request.json();
    const { firstName, lastName, email, organisation, note, phone } = body;

    const message = phone == "" ? 
            `${firstName} ${lastName} from ${organisation} wants to work with you \n\nPlease contact them via: ${email}. \n\nThey also mentioned: ${note}`
            :
            `${firstName} ${lastName} from ${organisation} wants to work with you \n\nPlease contact them via: ${email} or ${phone}. \n\nThey also mentioned: ${note}`

    const res = await fetch(`https://api.telegram.org/bot${teleKey}/sendMessage`, {
        method: "POST",
        body: JSON.stringify({
            chat_id: teleChatID, 
            text: message
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })

    if(!res.ok) {
        return new Response("Could not send message", {
            status: 500,
            statusText: res.statusText
        })
    }
    return new Response("Message recieved", {status: 200, statusText: res.statusText})
}