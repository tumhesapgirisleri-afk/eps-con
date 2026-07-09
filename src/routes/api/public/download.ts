import { createFileRoute } from "@tanstack/react-router";
import { get } from "@vercel/blob";

const ALLOWED_PREFIX = "contact-attachments/";

export const Route = createFileRoute("/api/public/download")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const pathname = new URL(request.url).searchParams.get("pathname");
        if (!pathname || !pathname.startsWith(ALLOWED_PREFIX)) {
          return new Response("Not found", { status: 404 });
        }

        const result = await get(pathname, { access: "private" });
        if (result === null) {
          return new Response("Not found", { status: 404 });
        }

        return new Response(result.stream, {
          headers: {
            "Cache-Control": "private, no-cache",
            "Content-Type": result.blob.contentType,
            "X-Content-Type-Options": "nosniff",
          },
        });
      },
    },
  },
});
