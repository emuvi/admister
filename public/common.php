<?php
session_start();

// Parameters functions

if (!isset($am_params)) {
    $am_params = filter_input_array(INPUT_GET);
    if ($am_params == NULL || count($am_params) == 0) {
        $am_params = filter_input_array(INPUT_POST);
    }
    if ($am_params == NULL || count($am_params) == 0) {
        $am_params = json_decode(file_get_contents("php://input"), true);
    }
}

function param($name)
{
    global $am_params;
    return $am_params[$name];
}

function has_param($name)
{
    global $am_params;
    return isset($am_params[$name]);
}

function empty_param($name)
{
    global $am_params;
    return empty($am_params[$name]);
}

function must_param($name)
{
    if (!has_param($name)) {
        err_die('You must inform parameter: "%s".', $name);
    }
    return param($name);
}

function must_sized_param($name)
{
    if (empty_param($name)) {
        err_die('You must inform a sized value for parameter: "%s".', $name);
    }
    return param($name);
}

// View Response functions

/** Returns the translated success message registered so far.  */
function get_success()
{
    global $am_msg_suc;
    return $am_msg_suc;
}

/** Returns the translated error message registered so far.  */
function get_error()
{
    global $am_msg_err;
    return $am_msg_err;
}

/** Translates and sets the success message. */
function set_success($message, ...$params)
{
    global $am_msg_suc;
    if (empty($am_msg_suc)) {
        $am_msg_suc = trans($message, $params);
    } else {
        $am_msg_suc = trans($message, $params) . ' ' . $am_msg_suc;
    }
}

/** Translates and sets the error message. */
function set_error($message, ...$params)
{
    if (empty($message)) {
        return;
    }
    global $am_msg_err;
    if (empty($am_msg_err)) {
        $am_msg_err = trans($message, $params);
    } else {
        $am_msg_err = trans($message, $params) . ' ' . $am_msg_err;
    }
}

/** Sets the translation of message, includes the error view and dies. */
function err_view($message, ...$params)
{
    set_error($message, $params);
    include './error.php';
    die();
}

// API Response functions

/** Sets response to 500 and prints the json from data. */
function err_data_echo($data)
{
    http_response_code(500);
    header('Content-Type: application/json');
    echo json_encode($data);
}

/** Sets response to 500, prints the json from data and dies. */
function err_data_die($data)
{
    http_response_code(500);
    header('Content-Type: application/json');
    die(json_encode($data));
}

/** Sets response to 500 and prints the translation from the message. */
function err_echo($message, ...$params)
{
    http_response_code(500);
    echo trans($message, $params);
}

/** Sets response to 500 and prints the translated error message. */
function err_echo_get()
{
    http_response_code(500);
    echo get_error();
}

/** Sets response to 500, prints the translation from the message and dies. */
function err_die($message, ...$params)
{
    http_response_code(500);
    die(trans($message, $params));
}

/** Sets response to 500, prints the translated error message and dies. */
function err_die_get()
{
    http_response_code(500);
    die(get_error());
}

/** Sets response to 200 and prints the json from data. */
function ok_data_echo($data)
{
    http_response_code(200);
    header('Content-Type: application/json');
    echo json_encode($data);
}

/** Sets response to 200, prints the json from data and dies. */
function ok_data_die($data)
{
    http_response_code(200);
    header('Content-Type: application/json');
    die(json_encode($data));
}

/** Sets response to 200 and prints the translation from the message. */
function ok_echo($message, ...$params)
{
    http_response_code(200);
    echo trans($message, $params);
}

/** Sets response to 200 and prints the translated success message. */
function ok_echo_get()
{
    http_response_code(200);
    echo get_success();
}

/** Sets response to 200, prints the translation from the message and dies. */
function ok_die($message, ...$params)
{
    http_response_code(200);
    die(trans($message, $params));
}

/** Sets response to 200, prints the translated success message and dies. */
function ok_die_get()
{
    http_response_code(200);
    die(get_success());
}

// Database functions

$am_main_link = NULL;
$am_user_link = NULL;

function get_main_link()
{
    global $am_main_link;
    if (!$am_main_link) {
        $am_main_link = pg_connect(getenv('ADMISTER_MAIN_LINK'));
    }
    if (!$am_main_link) {
        err_die("Could not connect to the main database.");
    }
    return $am_main_link;
}

function get_user_link()
{
    // TODO
}

/** Runs the query, returns the result if ok or dies with the error message if not. */
function must_query($sql, ...$params)
{
    $result = lazy_query($sql, $params);
    if (!$result) {
        err_die_get();
    }
    return $result;
}

/** Runs the query, returns the result if ok or sets the error message if not. */
function lazy_query($sql, ...$params)
{
    global $am_main_link;
    $result = NULL;
    if (sizeof($params) == 0) {
        $result = pg_query($am_main_link, $sql);
    } else {
        $result = pg_query_params($am_main_link, $sql, $params);
    }
    if (!$result) {
        set_error(pg_last_error($am_main_link));
    }
    return $result;
}

/** Fetch the query, returns the array if ok or dies with the error message if not. */
function must_fetch($sql, ...$params)
{
    $result = lazy_fetch($sql, $params);
    if (!$result) {
        err_die_get();
    }
    return $result;
}

/** Fetch the query, returns the array if ok or sets the error message if not. */
function lazy_fetch($sql, ...$params)
{
    global $am_main_link;
    $result = NULL;
    if (sizeof($params) == 0) {
        $result = pg_query($am_main_link, $sql);
    } else {
        $result = pg_query_params($am_main_link, $sql, $params);
    }
    if (!$result) {
        set_error(pg_last_error($am_main_link));
        return NULL;
    }
    $data = array();
    while ($row = pg_fetch_array($result)) {
        array_push($data, $row);
    }
    return $data;
}

// Translate functions

function trans($format, ...$params)
{
    global $am_main_link;
    $translated = $format;
    if ($am_main_link) {
        $translated = NULL;
        $sql_select = 'SELECT done FROM translates WHERE lang LIKE $1 AND seed LIKE $2';
        $result = pg_query_params($am_main_link, $sql_select, array('pt-br', $format));
        if ($result && $row = pg_fetch_array($result)) {
            $translated = $row['done'];
        } else {
            $sql_insert = 'INSERT INTO translates (lang, seed) VALUES ($1, $2)';
            pg_query_params($am_main_link, $sql_insert, array('pt-br', $format));
        }
        if (!$translated) {
            $translated = $format;
        }
    }
    return sprintf($translated, ...$params);
}

// Security functions

/** Checks if user is logged, if not, includes entrance view and dies. */
function must_check($title, $end_point)
{
    if (!lazy_check($title, $end_point)) {
        set_error("You must be logged to see this page.");
        include "./enter.php";
        die();
    }
}

/** Checks whether the user is logged in and returns true if it is or false if not. */
function lazy_check($title, $end_point)
{
    global $am_title, $am_end_point, $am_redirect;
    if (!$title) {
        set_error("You must pass the title for the checker.");
        return false;
    }
    if (!$end_point) {
        set_error("You must pass the end point for the checker.");
        return false;
    }
    $am_title = trans($title);
    $am_end_point = $end_point;
    if (!isset($_SESSION['am_logged']) || $_SESSION['am_logged'] != 'yes') {
        if (isset($am_redirect)) {
            $_SESSION['redirect'] = $am_redirect;
        } else {
            $_SESSION['redirect'] = $am_end_point . ".php";
        }
        return false;
    }
    return true;
}
