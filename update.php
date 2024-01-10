<?php

if (isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest') {
   echo "Access allowed!";
}
else {
   header("HTTP/1.0 403 Forbidden");
   echo "Access Forbidden";
   exit();
}

   $id = $_POST['id'];
   $note = $_POST['note'];
   $cost = $_POST['cost'];


   $sanitizedData_1 = escapeshellarg($id);
   $sanitizedData_2 = escapeshellarg($note);
   $sanitizedData_3 = escapeshellarg($cost);

   $jsonData = array(
      "id" => $sanitizedData_1,
      "note" => $sanitizedData_2,
      "cost" => $sanitizedData_3
   );

   $jsonString = json_encode($jsonData);

   $command = 'javac -cp "sqlite-jdbc-3.34.0.jar;json.jar" Update.java && java -cp ".;sqlite-jdbc-3.34.0.jar;json.jar" Update ' . $jsonString;


   exec($command, $output, $returnCode);

/*

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

*/

?>