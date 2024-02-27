<?php
class MyDB extends SQLite3 {
   function __construct() {
      $this->open('database.sqlite');
   }
}
$db = new MyDB();
$sql =<<<EOF
    DELETE FROM history
EOF;
$ret = $db->exec($sql);
$db->close();
?>
