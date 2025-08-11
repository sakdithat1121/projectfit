// /api/php.js
export default async function handler(req, res) {
  const { path = "", debug = "0" } = req.query;

  const allow = new Set([
    "education",
    "experience",
    "skills",
    "goals",
    "health",
  ]);
  if (!allow.has(path))
    return res.status(400).json({ error: "invalid path", got: path });

  const base = process.env.PHP_API_BASE; // ตั้งค่าใน Vercel
  if (!base) return res.status(500).json({ error: "PHP_API_BASE is not set" });

  const upstream = `${base.replace(/\/+$/, "")}/api/${path}.php`;

  try {
    const r = await fetch(upstream, { method: "GET", cache: "no-store" });
    const text = await r.text();

    if (debug === "1") {
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      return res.status(200).send(
        JSON.stringify(
          {
            upstream,
            status: r.status,
            contentType: r.headers.get("content-type"),
            bodyPreview: text.slice(0, 500),
          },
          null,
          2
        )
      );
    }

    res.setHeader(
      "Content-Type",
      r.headers.get("content-type") || "application/json; charset=utf-8"
    );
    return res.status(r.status).send(text);
  } catch (e) {
    return res
      .status(502)
      .json({ error: "upstream fetch failed", detail: String(e) });
  }
}
