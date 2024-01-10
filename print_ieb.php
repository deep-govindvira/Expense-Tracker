<?php

$command = 'javac -cp "sqlite-jdbc-3.34.0.jar;json.jar" Create.java && java -cp ".;sqlite-jdbc-3.34.0.jar;json.jar" Create';
exec($command, $output, $returnCode);

$db = new SQLite3('database.sqlite');
$query = "SELECT * FROM history";
$result = $db->query($query);
$income = 0;
$expense = 0;
while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
    if($row['cost'] >= 0) {
        $income += $row['cost'];
    }
    else {
        $expense -= $row['cost'];
    }
}
$balance = $income - $expense;
echo "
<tr>
    <td style=\"width:50%;\">🏡 Balance 🏡</td>
    <td>$balance</td>
</tr>
<tr>
    <td>💰 Income 💰</td>
    <td>$income</td>
</tr>
<tr>
    <td>🗑️ Expense 🗑️</td>
    <td>$expense</td>
</tr>";
$db->close();
?>