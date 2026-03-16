export async function GET() {
  return new Response("google-site-verification: googlece21b40fad08e89f.html", {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
