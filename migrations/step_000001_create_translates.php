<?php

require_once './common.php';

function step_000001_create_translates_make()
{
    return query('main', 'CREATE TABLE translates ( '
        . 'lang VARCHAR(6) NOT NULL, '
        . 'seed VARCHAR NOT NULL, '
        . 'done VARCHAR, '
        . 'PRIMARY KEY (lang, seed))');
}

function step_000001_create_translates_undo()
{
    return query('main', 'DROP TABLE translates');
}
