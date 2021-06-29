<?php

require_once "./common.php";
must_check('Desk', 'desk');

$sql_desk = 'SELECT name, icon, link FROM menus';
$data = lazy_fetch($sql_desk);
include "./views/com-view.phtml";
