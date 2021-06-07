<?php

session_start();

// Parameters functions

$am_params = filter_input_array(INPUT_GET);
if ($am_params == NULL || count($am_params) == 0) {
  $am_params = filter_input_array(INPUT_POST);
}
if ($am_params == NULL || count($am_params) == 0) {
  $am_params = json_decode(file_get_contents("php://input"), true);
}

function param($name) {
  global $am_params;
  return $am_params[$name];
}

function has_param($name) {
  global $am_params;
  return isset($am_params[$name]);
}

function empty_param($name) {
  global $am_params;
  return empty($am_params[$name]);
}

// Response functions

function ok_data($data) {
  http_response_code(200);
  header('Content-Type: application/json');
  echo json_encode($data);
}

function ok_data_die($data) {
  http_response_code(200);
  header('Content-Type: application/json');
  die(json_encode($data));
}

function err_data($data) {
  http_response_code(500);
  header('Content-Type: application/json');
  echo json_encode($data);
}

function err_data_die($data) {
  http_response_code(500);
  header('Content-Type: application/json');
  die(json_encode($data));
}

function ok_echo($message) {
  http_response_code(200);
  echo trans($message);
}

function ok_die($message) {
  http_response_code(200);
  die(trans($message));
}

function err_echo($message) {
  http_response_code(500);
  echo trans($message);
}

function err_die($message) {
  http_response_code(500);
  die(trans($message));
}

// Database functions

$am_dblink = pg_connect(getenv('CONN_ADMISTER'));
if (!$am_dblink) {
  err_die("Could not connect to the database.");
}

function must_query($sql, ...$params) {
  global $am_dblink;
  $result = NULL;
  if (sizeof($params) == 0) {
    $result = pg_query($am_dblink, $sql);
  } else {
    $result = pg_query_params($am_dblink, $sql, $params);
  }
  if (!$result) {
    err_die(pg_last_error($am_dblink));
  }
  return $result;
}

function lazy_query($sql, ...$params) {
  global $am_dblink, $am_msg_err;
  $result = NULL;
  if (sizeof($params) == 0) {
    $result = pg_query($am_dblink, $sql);
  } else {
    $result = pg_query_params($am_dblink, $sql, $params);
  }
  if (!$result) {
    $am_msg_err = pg_last_error($am_dblink);
  }
  return $result;
}

function must_fetch($sql, ...$params) {
  global $am_dblink;
  $result = NULL;
  if (sizeof($params) == 0) {
    $result = pg_query($am_dblink, $sql);
  } else {
    $result = pg_query_params($am_dblink, $sql, $params);
  }
  if (!$result) {
    err_die(pg_last_error($am_dblink));
  }
  $data = array();
  while ($row = pg_fetch_array($result)) {
    array_push($data, $row);
  }
  return $data;
}

function lazy_fetch($sql, ...$params) {
  global $am_dblink, $am_msg_err;
  $result = NULL;
  if (sizeof($params) == 0) {
    $result = pg_query($am_dblink, $sql);
  } else {
    $result = pg_query_params($am_dblink, $sql, $params);
  }
  if (!$result) {
    $am_msg_err = pg_last_error($am_dblink);
    return NULL;
  }
  $data = array();
  while ($row = pg_fetch_array($result)) {
    array_push($data, $row);
  }
  return $data;
}

// Translate functions

function trans($format, ...$params) {
  global $am_dblink;
  $translated = $format;
  if ($am_dblink) {
    $translated = NULL;
    $sql_select = 'SELECT done FROM translates WHERE lang LIKE $1 AND seed LIKE $2';
    $result = pg_query_params($am_dblink, $sql_select, array('ptbr', $format));
    if ($result && $row = pg_fetch_array($result)) {
      $translated = $row['done'];
    } else {
      $sql_insert = 'INSERT INTO translates (lang, seed) VALUES ($1, $2)';
      pg_query_params($am_dblink, $sql_insert, array('ptbr', $format));
    }
    if (!$translated) {
      $translated = $format;
    }
  }
  return sprintf($translated, ...$params);
}

// Security functions

function checker($title, $end_point) {
  global $am_title, $am_end_point, $am_redirect;
  if (!$title) {
    err_die("You must pass the title for the checker.");
  }
  if (!$end_point) {
    err_die("You must pass the end point for the checker.");
  }
  $am_title = trans($title);
  $am_end_point = $end_point;
  if (!isset($_SESSION['am_logged']) || $_SESSION['am_logged'] != 'yes') {
    if (isset($am_redirect)) {
      $_SESSION['redirect'] = $am_redirect;
    } else {
      $_SESSION['redirect'] = $am_end_point . ".php";
    }
    include "./enter.php";
    die();
  }
}
