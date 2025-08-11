<?php
// CORS สำหรับกรณีที่ "ไม่" ใช้ proxy (เรียกตรงจาก Vercel)
// ตอนทดสอบจะตั้ง * ได้ แต่โปรดล็อกโดเมนจริงตอนโปรดักชัน
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Vary: Origin');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}
