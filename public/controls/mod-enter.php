<?php

$_SESSION['am_logged'] = 'no';

if (empty_param('name') || empty_param('pass')) {
    err_view("You must inform the name and pass.");
}
$sql = 'SELECT id, bus FROM users WHERE name LIKE $1 AND epwd LIKE md5($2)';
$data = lazy_fetch($sql, must_sized_param('name'), must_sized_param('pass'));
if ($data == NULL) {
    err_view("");
}
if (count($data) == 0) {
    err_view('Could not find your user or pass.');
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
