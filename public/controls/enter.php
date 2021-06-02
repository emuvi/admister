<?php

chdir(__DIR__);
require_once "../common.php";
$_SESSION['am_logged'] = 'no';

if (!has_param('name') || !has_param('pass')) {
  err_die("You must inform the name and pass.");
}

$sql = 'SELECT id, bus FROM users WHERE name LIKE $1 AND epwd LIKE md5($2)';
$data = must_fetch($sql, param('name'), param('pass'));
if (count($data) == 0) {
  err_die("Could not find your user or pass.");
}

$_SESSION['am_logged'] = 'yes';
$_SESSION['am_bus'] = $data[0]['bus'];
$_SESSION['am_usr_id'] = $data[0]['id'];
$_SESSION['am_usr_name'] = param('name');

if (isset($_SESSION['redirect'])) {
  $am_to_point = $_SESSION['redirect'];
  unset($_SESSION['redirect']);
} else if (!isset($am_to_point)) {
  $am_to_point = 'desk.php';
}
header("Location: " . $am_to_point);
die();
