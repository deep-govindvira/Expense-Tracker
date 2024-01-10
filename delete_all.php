<?php

if (isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest') {
   echo "Access allowed!";
}
else {
   header("HTTP/1.0 403 Forbidden");
   echo "Access Forbidden";
   exit();
}
    $command = 'javac -cp "sqlite-jdbc-3.34.0.jar;json.jar" Delete_all.java && java -cp ".;sqlite-jdbc-3.34.0.jar;json.jar" Delete_all';

    exec($command, $output, $returnCode);

/*
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
*/

?>
