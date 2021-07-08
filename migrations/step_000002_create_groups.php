<?php

require_once './common.php';

function step_000002_create_groups_make()
{
    return query('main', 'CREATE TABLE groups ( '
                 . 'id SERIAL NOT NULL PRIMARY KEY, '
                 . 'name VARCHAR(40) NOT NULL, '
                 . 'link VARCHAR(210) NOT NULL)');
}

function step_000002_create_groups_undo()
{
    return query('main', 'DROP TABLE groups');
}
