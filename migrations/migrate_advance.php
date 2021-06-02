<?php

require_once './common.php';

function migrate_advance_batch(): int {
  $result = fetch_once(0, "SELECT MAX(batch) FROM migrations");
  return ++$result;
}

function migrate_advance_undo_done() {
  global $migrate_advance_done;
  print("Undoing all that was done...\n");
  for ($i = count($migrate_advance_done) - 1; $i >= 0; $i--) {
    $name = $migrate_advance_done[$i];
    print("Undoing: $name...\n");
    require_once './step_' . $name . '.php';
    call_user_func('step_' . $name . '_undo');
    query('DELETE FROM migrations WHERE name = $1', $name);
  }
  print("Undoing finished.\n");
}

function migrate_advance_make(string $name, int $batch): bool {
  global $migrate_advance_done;
  require_once './step_' . $name . '.php';
  $result = call_user_func('step_' . $name . '_make');
  if ($result) {
    array_push($migrate_advance_done, $name);
    if (query('INSERT INTO migrations (name, batch) VALUES ($1, $2)', $name, $batch)) {
      return true;
    }
  }
  return false;
}

function migrate_advance_process(string $name, int $batch): bool {
  print("Processing $name: ");
  $done = fetch_once(0, "SELECT COUNT(name) FROM migrations WHERE name LIKE $1", $name);
  if (!$done) {
    print('doing... ');
    $result = migrate_advance_make($name, $batch);
    print($result ? 'maked.' : 'error.');
    print("\n");
    return $result;
  } else {
    print('already done.');
    print("\n");
    return true;
  }
}

function migrate_advance() {
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
