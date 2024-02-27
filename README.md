Download PHP from https://windows.php.net/download#php-8.2

Download Sqlite3 from https://www.sqlite.org/download.html

Set global path for all of this.

### Execute following commands in Expense-Tracker folder
```
sqite3 datbase.sqlite
CREATE TABLE history (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL UNIQUE, note TEXT NOT NULL, cost INTEGER NOT NULL)
```
