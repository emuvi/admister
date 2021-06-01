<?php

chdir(__DIR__);
require_once "./checker.php";
checker('Desk', 'desk');

require_once "./dblink.php";
$sql = 'SELECT name, icon, link FROM menus';
$data = lazy_fetch($sql);
include "./views/com-view.phtml";
