<?php

require_once "./common.php";
checker('Desk', 'desk');

$sql = 'SELECT name, icon, link FROM menus';
$data = lazy_fetch($sql);
include "./views/com-view.phtml";
