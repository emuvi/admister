<?php

require_once './common.php';

function step_000003_create_users_make()
{
    return query('master', 'CREATE TABLE users ( '
                 . 'id SERIAL NOT NULL PRIMARY KEY, '
                 . 'name VARCHAR(40) NOT NULL, '
                 . 'pass VARCHAR(40) NOT NULL, '
                 . 'group_id INTEGER NOT NULL REFERENCES groups (id))');
}

function step_000003_create_users_undo()
{
    return query('master', 'DROP TABLE users');
}
