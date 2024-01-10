<?php

if (isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest') {
    echo "Access allowed!";
} else {
    header("HTTP/1.0 403 Forbidden");
    echo "Access Forbidden";
    exit();
}

    $note = $_POST['note'];
    $cost = $_POST['cost'];
    $sanitizedData_1 = escapeshellarg($note);
    $sanitizedData_2 = escapeshellarg($cost);

    $jsonData = array(
       "note" => $sanitizedData_1,
       "cost" => $sanitizedData_2
    );

    $jsonString = json_encode($jsonData);

    $command = 'javac -cp "sqlite-jdbc-3.34.0.jar;json.jar" Insert.java && java -cp ".;sqlite-jdbc-3.34.0.jar;json.jar" Insert ' . $jsonString;

    exec($command, $output, $returnCode);

/*
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
*/

?>