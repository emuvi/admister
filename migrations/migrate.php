<?php

require_once './common.php';

/** Creates the table to keep track of the migrations already done in the database. */
function migrate_start()
{
    if (!query("CREATE TABLE IF NOT EXISTS migrations ( "
        . "id SERIAL NOT NULL PRIMARY KEY, "
        . "name VARCHAR(90) NOT NULL, "
        . "batch INTEGER NOT NULL, "
        . "UNIQUE (name))")) {
        die("Could not create migrations table.");
    }
}

/** Drops the table that keeps track of the migrations already done in the database. */
function migrate_stop()
{
    if (!query("DROP TABLE IF EXISTS migrations")) {
        die("Could not drop migrations table.");
    }
}

/** Parses the commad line parameters and call the respective functions. */
function migrate_run()
{
    global $argc, $argv;
    for ($index = 0; $index < $argc; $index++) {
        switch ($argv[$index]) {
            case "start":
                migrate_start();
                break;
            case "stop":
                migrate_stop();
                break;
            case "create":
                require_once './migrate_create.php';
                migrate_create($index);
                $index++;
                break;
            case "advance":
                require_once './migrate_advance.php';
                migrate_advance();
                break;
            case "retreat":
                require_once './migrate_retreat.php';
                migrate_retreat();
                break;
        }
    }
    echo "Migrations finished!\n";
}

/** Checks if the execution of this script comes from the command line. */
function is_cli()
{
    if (defined('STDIN')) {
        return true;
    }
    if (
        empty($_SERVER['REMOTE_ADDR']) and !isset($_SERVER['HTTP_USER_AGENT'])
        and count($_SERVER['argv']) > 0
    ) {
        return true;
    }
    return false;
}

if (is_cli()) {
    migrate_run();
}
