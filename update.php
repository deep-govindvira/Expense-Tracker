<?php
   $id = $_POST['id'];
   $note = $_POST['note'];
   $cost = $_POST['cost'];
   class MyDB extends SQLite3 {
      function __construct() {
         $this->open('database.sqlite');
      }
   }
   $db = new MyDB();
   $sql =<<<EOF
      UPDATE history SET note = '$note' where id = $id;
EOF;
   $ret = $db->exec($sql);
   $sql =<<<EOF
   UPDATE history SET cost = '$cost' where id = $id;
EOF;
$ret = $db->exec($sql);
   $db->close();
?>