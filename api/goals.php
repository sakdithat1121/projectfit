<?php
require __DIR__ . '/_boot.php';
try {
    $data = [
        "title" => "เป้าหมาย",
        "html" => "<p>สร้างเว็บ/แอปที่ผสานเทคโนโลยีกับความคิดสร้างสรรค์
                ให้ประสบการณ์ผู้ใช้ <strong>เหนือจินตนาการ</strong> ทั้งภาพ เสียง การโต้ตอบ</p>"
    ];
    json_ok($data);
} catch (Throwable $e) {
    json_err($e);
}
