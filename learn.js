let totalBudget = 0;
let remainingBudget = 0;
let expenses = [];

const addExpense = () => {
  const expenseName = document.getElementById("expense-name").value;
  const expenseAmount = parseInt(document.getElementById("expense-amount").value);

  if (expenseName && expenseAmount) {
    const expense = {
      name: expenseName,
      amount: expenseAmount
    };

    expenses.push(expense);

    const expenseList = document.getElementById("expense-list");
    const li = document.createElement("li");
    li.innerText = `${expense.name}: $${expense.amount}`;
    expenseList.appendChild(li);

    remainingBudget -= expenseAmount;
    document.getElementById("remaining-budget").innerText = remainingBudget;

    document.getElementById("expense-name").value = "";
    document.getElementById("expense-amount").value = "";
  }
};

const init = () => {
  totalBudget = parseInt(prompt("Enter your total budget:"));

  remainingBudget = totalBudget;
  document.getElementById("total-budget").innerText = totalBudget;
  document.getElementById("remaining-budget").innerText = remainingBudget;

  const addExpenseBtn = document.getElementById("add-expense-btn");
  addExpenseBtn.addEventListener("click", addExpense);
};

init();
