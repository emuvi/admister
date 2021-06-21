<?php

require_once './common.php';

function step_000003_create_users_make()
{
    return query('CREATE TABLE users ( '
                 . 'id SERIAL NOT NULL PRIMARY KEY, '
                 . 'name VARCHAR(40) NOT NULL, '
                 . 'epwd VARCHAR(40) NOT NULL, '
                 . 'grp INTEGER NOT NULL REFERENCES groups (id))');
}

function step_000003_create_users_undo()
{
    return query('DROP TABLE users');
}
