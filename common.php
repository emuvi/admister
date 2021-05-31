<?php

session_start();
chdir(__DIR__);
require_once "./dblink.php";

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

function trans($format, ...$params) {
  $sql_select = 'SELECT done FROM translates WHERE lang LIKE $1 AND seed LIKE $2';
  $data = query_fetch($sql_select, 'ptbr', $format);
  $translated = NULL;
  if ($data) {
    $translated = $data[0]['done'];
  }
  if (!$translated) {
    $translated = $format;
    $sql_insert = 'INSERT INTO translates (lang, seed) VALUES ($1, $2)';
    query_lazy($sql_insert, 'ptbr', $format);
  }
  return sprintf($translated, ...$params);
}

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
