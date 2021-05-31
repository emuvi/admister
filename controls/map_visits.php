<?php
chdir(__DIR__);
require_once "com-checker.php";
checker('Map of Visits', 'map_visits-vue.php');
require_once "com-linker.php";

if (!isset($_POST['name']) || ($_POST['name'] == "")) {
    $am_msg_err = trans("You must inform the name.");
    include "map_visits-vue.php";
    die();
}
if (!isset($_POST['code'])) {
    $_POST['code'] = "";
}
if (!isset($_POST['phone'])) {
    $_POST['phone'] = "";
}
if (!isset($_POST['address'])) {
    $_POST['address'] = "";
}
if (!isset($_POST['contact'])) {
    $_POST['contact'] = "";
}
if (!isset($_POST['notes'])) {
    $_POST['notes'] = "";
}

$query = <<<EOQ
INSERT INTO map_visits
(bus, usr, code, name, phone, address, contact, notes)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
EOQ;
$params = array($_SESSION['am_bus'], $_SESSION['am_usr'], $_POST['code'],
    $_POST['name'], $_POST['phone'], $_POST['address'],
    $_POST['contact'], $_POST['notes']);
$result = @pg_query_params($dblink, $query, $params);
if (!$result) {
    $am_msg_err = trans(pg_last_error($dblink));
} else {
    $am_msg_suc = trans("Visit to %s registered.", $_POST['name']);
}

$_POST['code'] = "";
$_POST['name'] = "";
$_POST['phone'] = "";
$_POST['address'] = "";
$_POST['contact'] = "";
$_POST['notes'] = "";

include "map_visits-vue.php";
