<?php

require_once './common.php';

/** Returns the index of the last batch. */
function migrate_retreat_get_last_batch()
{
    return fetch_once(0, 'master', 'SELECT MAX(batch) FROM migrations');
}

/** Returns an array with the list of names from the last batch. */
function migrate_retreat_get_names($batch)
{
    return fetch('master',
        'SELECT name '
        . 'FROM migrations '
        . 'WHERE batch = $1 '
        . 'ORDER BY id DESC', $batch);
}

/** Executes the undo function from the step with the name. */
function migrate_retreat_undo($name, $batch)
{
    require_once './step_' . $name . '.php';
    $result = call_user_func('step_' . $name . '_undo');
    if ($result) {
        if (query('master', 'DELETE FROM migrations '
            . 'WHERE name = $1 AND batch = $2', $name, $batch)) {
            return true;
        }
    }
    return false;
}

/** Undo all steps performed in the last batch. */
function migrate_retreat()
{
    echo "Retreating from last batch...\n";
    $batch = migrate_retreat_get_last_batch();
    if (!$batch) {
        echo "There is nothing to undo.\n";
    }
    $names = migrate_retreat_get_names($batch);
    foreach ($names as $name) {
        echo 'Undoing ' . $name[0] . ' ... ';
        if (migrate_retreat_undo($name[0], $batch)) {
            echo "done.\n";
        } else {
            echo "error.\n";
            break;
        }
    }
}
