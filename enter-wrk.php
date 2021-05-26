<?php
require_once "com-start.php";
$_SESSION['am_log'] = 'no';
require_once "com-linker.php";

if (!isset($_POST['name']) || $_POST['name'] == ""
    || !isset($_POST['pass']) || $_POST['pass'] == "") {
    $am_msg_err = trans("You must inform the name and pass.");
    include "enter-vue.php";
    die();
}

$result = @pg_query_params($linker,
    "SELECT id, bus FROM users WHERE name LIKE $1 AND epwd LIKE md5($2)",
    array($_POST['name'], $_POST['pass']));
if (!$result) {
    $am_msg_err = trans(pg_last_error($linker));
    include "enter-vue.php";
    die();
}

$row = @pg_fetch_array($result);
if (!$row) {
    $am_msg_err = trans("Could not find your user.");
    include "enter-vue.php";
    die();
}

$_SESSION['am_log'] = 'yes';
$_SESSION['am_bus'] = $row['bus'];
$_SESSION['am_usr'] = $row['id'];
$_SESSION['am_usr_name'] = $_POST['name'];

if (isset($_SESSION['redirect'])) {
    $to_point = $_SESSION['redirect'];
    unset($_SESSION['redirect']);
    header("Location: " . $to_point);
} else {
    header("Location: desk-vue.php");
}
die();
