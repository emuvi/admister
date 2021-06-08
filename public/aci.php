<?php

// ACI - Application Controls Interface

require_once "./common.php";

if (empty_param('mod')) {
  if (param('api')) {
    err_die('You must pass the module name.');
  } else {
    inc_err_die('You must pass the module name.');
  }
}

if (!file_exists('./controls/mod-' . param('mod') . '.php')) {
  if (param('api')) {
    err_die('The module ' . param('mod') . ' does not exists.');
  } else {
    inc_err_die('The module ' . param('mod') . ' does not exists.');
  }
}

require_once './controls/mod-' . param('mod') . '.php';

