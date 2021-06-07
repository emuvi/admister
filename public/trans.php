<?php

require_once "./common.php";

if (!empty_param('seed')) {
  header('Content-Type: application/json');
  if (has_param('params')) {
    echo json_encode(trans(param('seed'), ...param('params')));
  } else {
    echo json_encode(trans(param('seed')));
  }
} else {
  err_die("You must inform the seed for the translation.");
}
