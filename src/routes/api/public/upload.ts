import { createFileRoute } from "@tanstack/react-router";
import { put } from "@vercel/blob";

const MAX_FILE_BYTES = 15 * 1024 * 1024; // 15 MB

function jsonError(message: string, status = 400) {
  return new Response(JSON.stringify({ ok: false, error: message }), {
    status,
    headers: { "content-type": "application/json" },
  });
}

export const Route = createFileRoute("/api/public/upload")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let form: FormData;
        try {
          form = await request.formData();
        } catch {
          return jsonError("Invalid form submission");
        }

        const file = form.get("file");
        if (!(file instanceof File) || file.size === 0) {
          return jsonError("No file provided");
        }
        if (file.size > MAX_FILE_BYTES) {
          return jsonError("The attached file is larger than 15 MB.");
        }

        const safeName = file.name.replace(/[^\w.\-]+/g, "_").slice(-120) || "attachment";
        const path = `contact-attachments/${new Date().toISOString().slice(0, 10)}/${crypto.randomUUID()}-${safeName}`;

        try {
          const blob = await put(path, file, {
            access: "public",
            contentType: file.type || "application/octet-stream",
          });
          return new Response(
            JSON.stringify({ ok: true, url: blob.url, name: file.name.slice(0, 200) }),
            { status: 200, headers: { "content-type": "application/json" } },
          );
        } catch (err) {
          console.error("[upload] blob upload failed:", err);
          const debug = err instanceof Error ? err.message : String(err);
          return jsonError(`We couldn't upload your file. Please try again. [DEBUG: ${debug}]`, 500);
        }
      },
    },
  },
});
