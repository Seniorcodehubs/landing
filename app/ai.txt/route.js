// Experimental AI crawler policy file
// Referenced by some AI crawlers: https://ai.txt
export async function GET() {
  const body = `
User-Agent: *
Allow: /
Disallow: /api/
`; // Adjust as needed
  return new Response(body, { headers: { "Content-Type": "text/plain" } });
}
