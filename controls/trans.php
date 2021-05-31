<?php
chdir(__DIR__);
require_once "com-start.php";

if (isset($_POST['seed'])) {
    header('Content-Type: application/json');
    if (isset($_POST['params'])) {
        echo json_encode(trans($_POST['seed'], ...$_POST['params']));
    } else {
        echo json_encode(trans($_POST['seed']));
    }
} else {
    die(trans("You must inform the seed for the translation."));
}
