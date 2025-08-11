<?php
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');

define('DEBUG', true); // เสร็จงานจริงค่อยเปลี่ยนเป็น false
error_reporting(E_ALL);
ini_set('display_errors', DEBUG ? '1' : '0');
set_error_handler(function ($severity, $message, $file, $line) {
    throw new ErrorException($message, 0, $severity, $file, $line);
});

// ห้ามมีช่องว่างก่อน <?php (กัน header already sent)
// บังคับคืน JSON พร้อม error ที่อ่านได้
function json_ok($data)
{
    http_response_code(200);
    echo json_encode($data, JSON_UNESCAPED_UNICODE);
    exit;
}
function json_err($ex)
{
    http_response_code(500);
    $out = ['error' => $ex->getMessage()];
    if (DEBUG) {
        $out += ['type' => get_class($ex), 'file' => $ex->getFile(), 'line' => $ex->getLine()];
    }
    echo json_encode($out, JSON_UNESCAPED_UNICODE);
    exit;
}
