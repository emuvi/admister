<?php

require_once './common.php';

/** Returns the batch id for this advance. */
function migrate_advance_batch(): int
{
    $result = fetch_once(0, 'master', 'SELECT MAX(batch) FROM migrations');
    return ++$result;
}

/** Undo all that was done in this batch. */
function migrate_advance_undo_done()
{
    global $migrate_advance_done;
    echo "Undoing all that was done...\n";
    for ($i = count($migrate_advance_done) - 1; $i >= 0; $i--) {
        $name = $migrate_advance_done[$i];
        echo "Undoing: $name...\n";
        require_once './step_' . $name . '.php';
        call_user_func('step_' . $name . '_undo');
        query('master', 'DELETE FROM migrations WHERE name = $1', $name);
    }
    echo "Undoing finished.\n";
}

/** Call the make function for the step with name.  */
function migrate_advance_make(string $name, int $batch): bool
{
    global $migrate_advance_done;
    require_once './step_' . $name . '.php';
    $result = call_user_func('step_' . $name . '_make');
    if ($result) {
        array_push($migrate_advance_done, $name);
        if (query('master', 'INSERT INTO migrations (name, batch) VALUES ($1, $2)',
            $name, $batch)) {
            return true;
        }
    }
    return false;
}

/** Checks if a step needs to be done and executes if necessary. */
function migrate_advance_process(string $name, int $batch): bool
{
    echo 'Making ' . $name . ' ... ';
    $sql = 'SELECT COUNT(name) FROM migrations WHERE name LIKE $1';
    $done = fetch_once(0, 'master', $sql, $name);
    if (!$done) {
        $result = migrate_advance_make($name, $batch);
        echo $result ? 'done.' : 'error.';
        echo "\n";
        return $result;
    } else {
        echo 'already done.';
        echo "\n";
        return true;
    }
}

/** Execute an advance of the steps missing. */
function migrate_advance()
{
    global $migrate_advance_done;
    $migrate_advance_done = array();
    $batch = migrate_advance_batch();
    foreach (scandir('.') as $inside) {
        if ($inside == '.' || $inside == '..') {
            continue;
        }
        $base = basename($inside, ".php");
        if (substr($base, 0, 5) != 'step_') {
            continue;
        }
        $name = substr($base, 5);
        if (!migrate_advance_process($name, $batch)) {
            migrate_advance_undo_done();
            break;
        }
    }
}
