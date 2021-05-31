<?php

chdir(__DIR__);
require_once "./common.php";

$dblink = pg_connect(filter_input(INPUT_SERVER, 'CONN_ADMISTER'));
if (!$dblink) {
  err_die("Could not connect to the database.");
}

function query($sql, ...$params) {
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
}

function query_lazy($sql, ...$params) {
  global $dblink;
  if (sizeof($params) == 0) {
    pg_query($dblink, $sql);
  } else {
    pg_query_params($dblink, $sql, array(...$params));
  }
}

function query_fetch($sql, ...$params) {
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

function query_fetch_lazy($sql, ...$params) {
  global $dblink;
  $result = NULL;
  if (sizeof($params) == 0) {
    $result = pg_query($dblink, $sql);
  } else {
    $result = pg_query_params($dblink, $sql, array(...$params));
  }
  $data = array();
  if (!$result) {
    return $data;
  }
  while ($row = pg_fetch_array($result)) {
    array_push($data, $row);
  }
  return $data;
}
