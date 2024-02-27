<?php
    $note = $_POST['note'];
    $cost = $_POST['cost'];
   class MyDB extends SQLite3 {
      function __construct() {
         $this->open('database.sqlite');
      }
   }
   $db = new MyDB();
   $sql =<<<EOF
      INSERT INTO history (note, cost)
      VALUES ('$note', '$cost');
EOF;
   $ret = $db->exec($sql);
   $db->close();
?>