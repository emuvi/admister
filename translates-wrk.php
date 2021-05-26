<?php
require_once "com-checker.php";
checker('Translate', 'translate-vue.php');
require_once "com-linker.php";

if (!isset($_POST['action'])) {
  errDie("You must inform the action.");
}

switch ($_POST['action']) {
case 'getNeedLangs':getNeedLangs();
  break;
case 'getNeedTrans':getNeedTrans();
  break;
case 'saveTrans':saveTrans();
  break;
case 'removeNeed':removeNeed();
  break;
}

function getNeedLangs() {
  global $linker;
  $data = array();
  $query = "SELECT DISTINCT(lang) FROM translates WHERE done IS NULL";
  $result = @pg_query($linker, $query);
  if ($result) {
    while ($row = pg_fetch_array($result)) {
      array_push($data, $row['lang']);
    }
    okData($data);
  } else {
    errDie(pg_last_error($linker));
  }
}

function getNeedTrans() {
  global $linker;
  $data = array();
  $query = <<<SQL
      SELECT seed FROM translates
      WHERE lang = $1 AND done IS NULL
      ORDER BY random() LIMIT 3
      SQL;
  $params = array($_POST['language']);
  $result = @pg_query_params($linker, $query, $params);
  if ($result) {
    while ($row = pg_fetch_array($result)) {
      array_push($data, $row['seed']);
    }
    okData($data);
  } else {
    errDie(pg_last_error($linker));
  }
}

function saveTrans() {
  global $linker;
  $data = array();
  $query = "UPDATE translates SET done = $3 WHERE lang = $1 AND seed = $2";
  $params = array($_POST['lang'], $_POST['seed'], $_POST['done']);
  $result = @pg_query_params($linker, $query, $params);
  if ($result) {
    okEcho("Translations saved successfully.");
  } else {
    errDie(pg_last_error($linker));
  }
}

function removeNeed() {
  global $linker;
  $data = array();
  $query = "DELETE FROM translates WHERE lang = $1 AND seed = $2";
  $params = array($_POST['lang'], $_POST['seed']);
  $result = @pg_query_params($linker, $query, $params);
  if ($result) {
    okEcho("Translation needed removed successfully.");
  } else {
    errDie(pg_last_error($linker));
  }
}
