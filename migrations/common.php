<?php

class Base  {
    private $connection;
    private $resource;

    public function __construct($connection) {
        $this->connection = $connection;
        $this->resource = null;
    }

    public function link() {
        if ($this->resource == null) {
            $this->resource = pg_connect($this->connection);
            if (!$this->resource) {
                die('Could not connect to the database: ' . $this->name);
            }
        }
        return $this->resource;
    }
}

$bases = [
    'master' => new Base(getenv('CONN_ADMISTER'))
];


/** Executes a SQL query on the AdMister database. */
function query($base, $sql, ...$params)
{
    global $bases, $msg_err;
    $db_link = $bases[$base]->link();
    $result = NULL;
    if (sizeof($params) == 0) {
        $result = pg_query($db_link, $sql);
    } else {
        $result = pg_query_params($db_link, $sql, $params);
    }
    if (!$result) {
        $msg_err = pg_last_error($db_link);
    }
    return $result;
}

/** Returns an array with all the results from the sql query. */
function fetch($base, $sql, ...$params)
{
    global $bases, $msg_err;
    $db_link = $bases[$base]->link();
    $result = NULL;
    if (sizeof($params) == 0) {
        $result = pg_query($db_link, $sql);
    } else {
        $result = pg_query_params($db_link, $sql, $params);
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

/** Returns the value of the first row and column ou the default. */
function fetch_once($default, $base, $sql, ...$params)
{
    $data = fetch($base, $sql, ...$params);
    if ($data && $data[0] && $data[0][0]) {
        return $data[0][0];
    }
    return $default;
}
