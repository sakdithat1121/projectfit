<?php
require __DIR__ . '/_boot.php';
try {
    json_ok([
        "ok" => true,
        "php_version" => PHP_VERSION,
        "time" => date('c')
    ]);
} catch (Throwable $e) {
    json_err($e);
}
