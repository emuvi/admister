<?php

$db_link = pg_connect($_SERVER['CONN_ADMISTER']);
if (!$db_link) {
  die("Could not connect to the database.");
}

function query($sql, ...$params) {
  global $db_link, $msg_err;
  $result = NULL;
  if (sizeof($params) == 0) {
    $result = pg_query($db_link, $sql);
  } else {
    $result = pg_query_params($db_link, $sql, array(...$params));
  }
  if (!$result) {
    $msg_err = pg_last_error($db_link);
  }
  return $result;
}

function fetch($sql, ...$params) {
  global $db_link, $msg_err;
  $result = NULL;
  if (sizeof($params) == 0) {
    $result = pg_query($db_link, $sql);
  } else {
    $result = pg_query_params($db_link, $sql, array(...$params));
  }
  $data = array();
  if (!$result) {
    $msg_err = pg_last_error($db_link);
  } else {
    while ($row = pg_fetch_array($result)) {
      array_push($data, $row);
    }
  }
  return $data;
}

function fetch_once($default, $sql, ...$params) {
  $data = fetch($sql, ...$params);
  if ($data && $data[0] && $data[0][0]) {
    return $data[0][0];
  }
  return $default;
}
