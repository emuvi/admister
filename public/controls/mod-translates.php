<?php

function am_api_GetLanguagesNeed()
{
    $query = "SELECT DISTINCT(lang) FROM translates WHERE done IS NULL";
    $data = must_fetch($query);
    ok_data_echo($data);
}

function am_api_GetTranslatesNeed()
{
    $query = <<<SQL
      SELECT seed FROM translates
      WHERE lang = $1 AND done IS NULL
      ORDER BY random() LIMIT 3
      SQL;
    $params = array(must_param('language'));
    $data = must_fetch($query, $params);
    ok_data_echo($data);
}

function am_api_PutTranslate()
{
    $query = "UPDATE translates SET done = $3 WHERE lang = $1 AND seed = $2";
    $params = array(must_param('lang'), must_param('seed'), must_param('done'));
    must_query($query, $params);
    ok_echo("Translation saved successfully.");
}

function am_api_DelTranslate()
{
    $query = "DELETE FROM translates WHERE lang = $1 AND seed = $2";
    $params = array(must_param('lang'), must_param('seed'));
    must_query($query, $params);
    ok_echo("Translation needed removed successfully.");
}

require_once './controls/run-api.php';
