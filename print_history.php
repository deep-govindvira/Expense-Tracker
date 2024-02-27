<?php
$db = new SQLite3('database.sqlite');
$query = "SELECT * FROM history";
$result = $db->query($query);
while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
    echo "<tr>";
    echo "
    <td><input class=\"form-control\" type=\"text\" id=\"".$row['id']."note\" value = \"".$row['note']."\"></td>
    <td><input class=\"form-control\" type=\"number\" id=\"".$row['id']."cost\" value = \"".$row['cost']."\"></td>
    <td><button class=\"btn btn-outline-success\" onclick = \"update_(".$row['id'].")\">Update</button></td>
    <td><button class=\"btn btn-outline-warning\" onclick = \"delete_(".$row['id'].")\">Delete</button></td>
    </tr>";
}
$db->close();
?>