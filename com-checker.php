<?php
require_once "com-start.php";

function checker($title, $end_point) {
    global $am_title, $am_end_point;
    if (empty($title)) {
        errDie("You must pass the title for the checker.");
    }
    if (empty($end_point)) {
        errDie("You must pass the end point for the checker.");
    }
    $am_title = trans($title);
    $am_end_point = $end_point;
    if (!isset($_SESSION['am_log']) || $_SESSION['am_log'] != 'yes') {
        if (isset($am_end_point)) {
            $_SESSION['redirect'] = $am_end_point;
        }
        header('Location: enter-vue.php');
        die();
    }
}