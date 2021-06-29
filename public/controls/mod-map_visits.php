<?php

function am_api_PutMapVisits()
{
    $query = <<<EOQ
INSERT INTO map_visits (bus, usr, code, name, phone, address, contact, notes)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
EOQ;
    $params = array(
        $_SESSION['am_bus'], $_SESSION['am_usr'], param('code'),
        param('name'), param('phone'), param('address'),
        param('contact'), param('notes')
    );
    must_query($query, $params);
    ok_echo("Visit to %s registered.", $_POST['name']);
}
