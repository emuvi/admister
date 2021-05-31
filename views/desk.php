<?php
chdir(__DIR__);
require_once "../checker.php";
checker('Desk', 'desk');

require_once "../linker.php";
$result = @pg_query($dblink, "SELECT name, icon, link FROM menus");
if (!$result) {
    $am_msg_err = trans(pg_last_error($dblink));
    include "error.php";
    die();
}

include "com-view.phtml";