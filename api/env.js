// /api/env.js
export default function handler(req, res) {
  res.status(200).json({
    ok: true,
    PHP_API_BASE: process.env.PHP_API_BASE || null,
    time: new Date().toISOString(),
  });
}
