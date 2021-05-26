<?php
require_once "com-checker.php";
checker('Desk', 'desk-vue.php');
require_once "com-linker.php";

$result = @pg_query($linker, "SELECT name, icon, link FROM menus");
if (!$result) {
    $am_msg_err = trans(pg_last_error($linker));
    include "error-vue.php";
    die();
}
?>
<!DOCTYPE html>
<html>

<head>
  <?php include "com-header.php";?>
</head>

<body>
  <?php include "com-upper.php";?>
  <?php include "desk-vue.phtml";?>
  <?php include "com-under.php";?>
</body>

</html>