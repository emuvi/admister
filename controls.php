<?php

chdir(__DIR__);
require_once "./common.php";

if (has_param('mod')) {
  require_once './constrols/' . param('mod') . '.php';
}