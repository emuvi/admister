<?php

chdir(__DIR__);
require_once "./common.php";

$dblink = pg_connect(filter_input(INPUT_SERVER, 'CONN_ADMISTER'));
if (!$dblink) {
  err_die("Could not connect to the database.");
}

function must_query($sql, ...$params) {
  global $dblink;
  $result = NULL;
  if (sizeof($params) == 0) {
    $result = pg_query($dblink, $sql);
  } else {
    $result = pg_query_params($dblink, $sql, array(...$params));
  }
  if (!$result) {
    err_die(pg_last_error($dblink));
  }
  return $result;
}

function lazy_query($sql, ...$params) {
  global $dblink, $am_msg_err;
  $result = NULL;
  if (sizeof($params) == 0) {
    $result = pg_query($dblink, $sql);
  } else {
    $result = pg_query_params($dblink, $sql, array(...$params));
  }
  if (!$result) {
    $am_msg_err = pg_last_error($dblink);
  }
  return $result;
}

function must_fetch($sql, ...$params) {
  global $dblink;
  $result = NULL;
  if (sizeof($params) == 0) {
    $result = pg_query($dblink, $sql);
  } else {
    $result = pg_query_params($dblink, $sql, array(...$params));
  }
  if (!$result) {
    err_die(pg_last_error($dblink));
  }
  $data = array();
  while ($row = pg_fetch_array($result)) {
    array_push($data, $row);
  }
  return $data;
}

function lazy_fetch($sql, ...$params) {
  global $dblink, $am_msg_err;
  $result = NULL;
  if (sizeof($params) == 0) {
    $result = pg_query($dblink, $sql);
  } else {
    $result = pg_query_params($dblink, $sql, array(...$params));
  }
  $data = array();
  if (!$result) {
    $am_msg_err = pg_last_error($dblink);
  } else {
    while ($row = pg_fetch_array($result)) {
      array_push($data, $row);
    }
  }
  return $data;
}
