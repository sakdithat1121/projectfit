<?php
require __DIR__ . '/_boot.php';
try {
    $data = [
        "title" => "ประสบการณ์ทำงาน",
        "items" => [
            ["role" => "Full-Stack Developer", "org" => "บริษัท XYZ", "years" => "2023 – ปัจจุบัน", "detail" => "ออกแบบระบบ, API, CI/CD, Frontend React/Next.js"],
            ["role" => "Frontend Developer (Intern)", "org" => "Startup ABC", "years" => "2022 – 2023", "detail" => "พัฒนา UI ด้วย React, Tailwind, Motion"]
        ]
    ];
    json_ok($data);
} catch (Throwable $e) {
    json_err($e);
}
