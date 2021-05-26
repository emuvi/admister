<?php
require_once "com-start.php";
$linker = pg_connect($_SERVER['CONN_ADMISTER']);
if (!$linker) {
    die('Was not possible to open a connection to the database.');
}
