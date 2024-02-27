<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Expense Tracker</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="script.js" defer></script>
</head>
<body style="width: 1519px;margin: auto; padding:300px; padding-top: 20px;">
    <table class="table table-hover" style="text-align:center">
        <tr>
            <td colspan="3" style="font-size:xx-large;">
                Expense 💵 Tracker 🚦
            </td>
        </tr>
        <tbody>
            <?php include 'print_ieb.php'; ?>
        </tbody>
    </table>
    <table class="table table-hover">
        <tbody style="text-align:center;">
            <tr>
                <td>
                    <input type="text" id = "note" class="form-control" placeholder="Enter Note ...">
                </td>
                <td>
                    <input type="number" id = "cost" class="form-control" placeholder="Enter Cost ...">
                </td>
                <td>
                    <button type="submit" onclick="insert_()" class="btn btn-outline-primary">Add Transaction</button>
                </td>
                <td>
                    <button type="submit" onclick="delete_all_()" class="btn btn-outline-danger">Clear All</button>
                </td>
            </tr>
        </tbody>
    </table>
    <table class="table table-hover" style="text-align: center;">
            <!-- <thead> -->
                <tr>
                    <th scope="col">📚 Note 📚</th>
                    <th scope="col">🪙 Amount 🪙</td>
                    <th scope="col" colspan="2">🛠️ Modify 🛠️</th>
                </tr>
            <!-- </thead> -->
            <tbody>
                <tbody><?php include 'print_history.php'; ?></tbody>
            </tbody>
    </table>
</body>
</html>