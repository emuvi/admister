<?php
  chdir(__DIR__);
require_once "./common.php";

if (isset($am_params['seed'])) {
    header('Content-Type: application/json');
    if (isset($am_params['params'])) {
        echo json_encode(trans($am_params['seed'], ...$am_params['params']));
    } else {
        echo json_encode(trans($am_params['seed']));
    }
} else {
    err_die("You must inform the seed for the translation.");
}
