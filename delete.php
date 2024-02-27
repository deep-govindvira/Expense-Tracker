<?php
$id = $_POST['id'];
class MyDB extends SQLite3 {
   function __construct() {
      $this->open('database.sqlite');
   }
}
$db = new MyDB();
$sql =<<<EOF
   DELETE FROM history WHERE id = "$id";
EOF;
$ret = $db->exec($sql);
$db->close();
?>