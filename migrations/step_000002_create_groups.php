<?php

require_once './common.php';

function step_000002_create_groups_make()
{
    return query('CREATE TABLE groups ( '
                 . 'id SERIAL NOT NULL PRIMARY KEY, '
                 . 'name VARCHAR(40) NOT NULL)');
}

function step_000002_create_groups_undo()
{
    return query('DROP TABLE groups');
}
