<?php

require_once './common.php';

// Migrate functions

function migrate_start() {
  if (!query("CREATE TABLE IF NOT EXISTS migrations ( "
                  . "id SERIAL NOT NULL PRIMARY KEY, "
                  . "name VARCHAR(90) NOT NULL, "
                  . "batch INTEGER NOT NULL, "
                  . "UNIQUE (name))")) {
    die("Could not create migrations table.");
  }
}

function migrate_stop() {
  if (!query("DROP TABLE IF EXISTS migrations")) {
    die("Could not drop migrations table.");
  }
}

// Migrate execution

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

print("Migrate finished!\n");
