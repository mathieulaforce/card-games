import Ably from "ably/promises";
export async function GET() {
    const client = new Ably.Realtime(process.env.ABLY_API_KEY?? "");
    const tokenRequestData = await client.auth.createTokenRequest({ clientId: process.env.ABLY_CLIENT_ID?? "" });
    return Response.json(tokenRequestData);
};