<?php
require __DIR__ . '/_boot.php';
try {
    json_ok([
        "title" => "การศึกษา",
        "items" => [
            ["program" => "ปริญญาตรี เทคโนโลยีสารสนเทศ", "school" => "มหาวิทยาลัยเทคโนโลยีจินตนาการ", "years" => "2021–ปัจจุบัน", "detail" => "Web Dev, UI/UX, Motion"],
            ["program" => "ประกาศนียบัตร วิทยาการคอมฯ", "school" => "วิทยาลัยเทคนิคบางสิทธิ์", "years" => "2019–2021", "detail" => "OOP, Network, Algorithm"]
        ]
    ]);
} catch (Throwable $e) {
    json_err($e);
}
