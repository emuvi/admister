<?php

function am_api_GetNeedLangs()
{
    global $am_dblink;
    $data = array();
    $query = "SELECT DISTINCT(lang) FROM translates WHERE done IS NULL";
    $result = @pg_query($am_dblink, $query);
    if ($result) {
        while ($row = pg_fetch_array($result)) {
            array_push($data, $row['lang']);
        }
        ok_data_echo($data);
    } else {
        err_die(pg_last_error($am_dblink));
    }
}

function am_api_GetNeedTrans()
{
    global $am_dblink;
    $data = array();
    $query = <<<SQL
      SELECT seed FROM translates
      WHERE lang = $1 AND done IS NULL
      ORDER BY random() LIMIT 3
      SQL;
    $params = array($_POST['language']);
    $result = pg_query_params($am_dblink, $query, $params);
    if ($result) {
        while ($row = pg_fetch_array($result)) {
            array_push($data, $row['seed']);
        }
        ok_data_echo($data);
    } else {
        err_die(pg_last_error($am_dblink));
    }
}

function am_api_SaveTrans()
{
    global $am_dblink;
    $query = "UPDATE translates SET done = $3 WHERE lang = $1 AND seed = $2";
    $params = array($_POST['lang'], $_POST['seed'], $_POST['done']);
    $result = @pg_query_params($am_dblink, $query, $params);
    if ($result) {
        ok_echo("Translations saved successfully.");
    } else {
        err_die(pg_last_error($am_dblink));
    }
}

function am_api_RemoveNeed()
{
    global $am_dblink;
    $query = "DELETE FROM translates WHERE lang = $1 AND seed = $2";
    $params = array($_POST['lang'], $_POST['seed']);
    $result = @pg_query_params($am_dblink, $query, $params);
    if ($result) {
        ok_echo("Translation needed removed successfully.");
    } else {
        err_die(pg_last_error($am_dblink));
    }
}

require_once './controls/run-api.php';
