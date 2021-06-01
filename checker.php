<?php

chdir(__DIR__);
require_once "./common.php";

function checker($title, $end_point) {
  global $am_title, $am_end_point, $am_redirect;
  if (!$title) {
    err_die("You must pass the title for the checker.");
  }
  if (!$end_point) {
    err_die("You must pass the end point for the checker.");
  }
  $am_title = trans($title);
  $am_end_point = $end_point;
  if (!isset($_SESSION['am_logged']) || $_SESSION['am_logged'] != 'yes') {
    if (isset($am_redirect)) {
      $_SESSION['redirect'] = $am_redirect;
    } else {
      $_SESSION['redirect'] = $am_end_point . ".php";
    }
    include "./enter.php";
    die();
  }
}
