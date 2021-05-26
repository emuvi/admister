<?php
session_start();

if (count($_POST) == 0) {
  $_POST = json_decode(file_get_contents("php://input"), true);
}

function trans($format, ...$params) {
  $translated = $format;
  global $linker;
  require_once "com-linker.php";
  $result = pg_query_params($linker,
    "SELECT done FROM translates WHERE lang LIKE $1 AND seed LIKE $2",
    array("ptbr", $format));
  if ($result) {
    $row = pg_fetch_array($result);
    if ($row) {
      $translated = $row['done'];
      if (empty($translated)) {
        $translated = $format;
      }
    } else {
      pg_query_params($linker, "INSERT INTO translates (lang, seed) VALUES ($1, $2)",
        array('ptbr', $format));
    }
  }
  return sprintf($translated, ...$params);
}

function okData($data) {
  http_response_code(200);
  header('Content-Type: application/json');
  echo json_encode($data);
}

function okEcho($message) {
  http_response_code(200);
  echo (trans($message));
}

function errEcho($message) {
  http_response_code(500);
  echo (trans($message));
}

function okDie($message) {
  http_response_code(200);
  die(trans($message));
}

function errDie($message) {
  http_response_code(500);
  die(trans($message));
}