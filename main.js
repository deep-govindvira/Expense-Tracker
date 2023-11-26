const noteEle = document.getElementById("Note");
const amountEle = document.getElementById("Amount");
const submitEle = document.getElementById("Submit");
const clearEle = document.getElementById("Clear");
const balanceEle = document.getElementById("Balance");
const incomeEle = document.getElementById("Income");
const expenseEle = document.getElementById("Expense");
const historyEle = document.getElementById("History");
const PorLEle = document.getElementById("PorL");
const UsernameEle = document.getElementById("Username");
const LogoutEle = document.getElementById("Logout");

/*
    (obj)database = {
        (key, obj)"deep@gmail.com" : {
            (key) email : "deep@gmail.com"
            (key, array) history : 
                (index, obj) 0 : {
                    (key) note: 'Scholorship', 
                    (key) amount: 55000, 
                    (key) id: 1679491737968
                }
                (index, obj) 1 : {
                    note: 'Sem 1 Fees', 
                    amount: -78500, 
                    id: 1679590481025
                }
                (index, obj) 2 : {
                    note: 'Sem 2 Fees', 
                    amount: -78500, 
                    id: 1679590493426}
                }
            (key) password : "1"
            (key) username : "Deep Govindvira"
        }
        (key, obj)"dhiraj@gmail.com" : {
            (key) email : "dhiraj@gmail.com"
            (key, array) history : 
                (index, obj) 0 : {
                    (key) note: 'Scholorship', 
                    (key) amount: 55000, 
                    (key) id: 1679491737968
                }
                (index, obj) 1 : {
                    note: 'Sem 1 Fees', 
                    amount: -78500, 
                    id: 1679590481025
                }
                (index, obj) 2 : {
                    note: 'Sem 2 Fees', 
                    amount: -78500, 
                    id: 1679590493426}
                }
            (key) password : "1"
            (key) username : "Dhiraj Govindvira"
        }
    }
*/

let email = JSON.parse(localStorage.getItem("currentuseremail"));
if(!email) {
    window.location.href = "signin.html";
}
LogoutEle.onclick = function logfun() {
    localStorage.removeItem("currentuseremail");
    window.location.href = "signin.html";
}
UsernameEle.innerHTML = "👨🏻‍💻 " + getDatabase()[email]["username"] + " 👨🏻‍💻";

function validate() {
    if(noteEle.value == "" || amountEle.value == "" || amountEle.value == 0) {
        return false;
    }
    return true;
}

submitEle.onclick = () => {
    if(!validate()) {
        return;
    }
    let currentTransaction = {
        note: noteEle.value,
        amount: Number(amountEle.value),
        id: Date.now()
    };
    addNewTransaction(email, currentTransaction);
    showHistory(getHistory(email));
    noteEle.value = "";
    amountEle.value = "";
    console.log("main.html : \n\n");
    console.log("Database : \n", getDatabase());
    console.log("Current Database : \n", getDatabase()[email]);
}

clearEle.onclick = () => {
    let y = (prompt("Enter password to clear all transactions."));
    if(y == getDatabase()[email]["password"]) {
        setHistory(email, null);
        showHistory(getHistory(email));
        console.log("main.html : \n\n");
        console.log("Database : \n", getDatabase());
        console.log("Current Database : \n", getDatabase()[email]);
    }
}

function showHistory(history) {
    let res = "";
    history.sort((a, b) => {
        return b.id - a.id;
    });
    history.forEach(h => {
        let btnclass = "";
        if(h.amount < 0) {
            btnclass = "btn btn-danger";
        }
        else {
            btnclass = "btn btn-success";
        }
        let am = h.amount;
        if(am < 0) {
            am = -am;
        }
        let cur =`
            <tr>
                <td>${h.note}</td>
                <td>${am}</td>
                <td>${getFormattedDate(h.id)}</td>
                <td><button class="${btnclass}" onclick="deleteTransaction('${email}', ${h.id})">Delete</button></td>
            </tr>
        `;
        res += cur;
    });
    historyEle.innerHTML = res;

    let income = 0;
    let expense = 0;
    history.forEach(h => {
        h.amount > 0 ? income += h.amount : expense -= h.amount;
    });
    let bal = income - expense;
    bal = bal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    income = income.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    expense = expense.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    balanceEle.innerHTML =  bal;
    incomeEle.innerHTML =  income;
    expenseEle.innerHTML = expense;
}

showHistory(getHistory(email));
console.log("main.html : \n\n");
console.log("Database : \n", getDatabase());
console.log("Current Database : \n", getDatabase()[email]);