<?php

require_once './common.php';

// Migrate functions

function migrate_start() {
  if (!query("CREATE TABLE IF NOT EXISTS migrations ( "
                  . "id SERIAL NOT NULL PRIMARY KEY, "
                  . "name VARCHAR(90) NOT NULL, "
                  . "batch INTEGER NOT NULL)")) {
    die("Could not create migrations table.");
  }
}

function migrate_stop() {
  if (!query("DROP TABLE IF EXISTS migrations")) {
    die("Could not create migrations table.");
  }
}

function migrate_normalize(string $name) {
  $pass1 = strtolower(trim($name));
  $pass2 = preg_replace('/[\s\-]+/', '_', $pass1);
  $pass3 = preg_replace('/\_+/', '_', $pass2);
  return preg_replace('/[^a-z0-9_]+/', '', $pass3);
}

function migrate_create_name(int $param_index) {
  global $argc, $argv;
  if ($param_index >= $argc - 1) {
    die("You must pass a name for the migration.");
  }
  $migr_name = migrate_normalize($argv[$param_index + 1]);
  if (empty($migr_name)) {
    die("You must pass a name for the migration.");
  }
  if (strlen($migr_name) > 80) {
    die("The name should not be over 80 characters.");
  }
  return $migr_name;
}

function migrate_create_next() {
  $biggest = 0;
  foreach (scandir('.') as $inside) {
    if ($inside == '.' || $inside == '..') {
      continue;
    }
    if (substr($inside, 0, 5) != 'step_') {
      continue;
    }
    $actual = intval(substr($inside, 5, 6));
    if ($actual > $biggest) {
      $biggest = $actual;
    }
  }
  return sprintf('%06d', ++$biggest);
}

function migrate_create(int $param_index) {
  $migr_name = migrate_create_name($param_index);
  $next_name = migrate_create_next();
  $full_name = $next_name . '_' . $migr_name;
  $file_name = 'step_' . $full_name . '.php';
  $file_hand = fopen($file_name, "w") or die("Unable to create file!");
  $func_make = 'step_' . $full_name . '_make() {';
  $func_drop = 'step_' . $full_name . '_undo() {';
  $file_code = <<<FILE_CODE
<?php

require_once './common.php';

function $func_make
  return true;
}

function $func_drop
  return true;
}
FILE_CODE;
  fwrite($file_hand, $file_code);
  fclose($file_hand);
}

function migrate_advance_batch(): int {
  $result = fetch_once(0, "SELECT MAX(batch) FROM migrations");
  return ++$result;
}

function migrate_advance_process(string $name, int $batch) {
  $done = fetch_once(0, "SELECT COUNT(id) FROM migrations WHERE name LIKE $1", $name);
  if (!$done) {
    print("Should!\n");
  } else {
    print("Should Not!\n");
  }
}

function migrate_advance() {
  $batch = migrate_advance_batch();
  print("Batch: $batch\n");
  foreach (scandir('.') as $inside) {
    if ($inside == '.' || $inside == '..') {
      continue;
    }
    $base = basename($inside, ".php");
    if (substr($base, 0, 5) === 'step_') {
      $name = substr($base, 5);
      print("Name: $name: ");
      migrate_advance_process($name, $batch);
    }
  }
}

function migrate_retreat() {

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
      migrate_create($index);
      $index++;
      break;
    case "advance":
      migrate_advance();
      break;
    case "retreat":
      migrate_retreat();
      break;
  }
}
print("Script finished!\n");
