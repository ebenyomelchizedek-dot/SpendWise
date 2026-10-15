
console.log("SpendWise JavaScript loaded successfully!");

// Step 1: Store application data
let totalBudget = 50000;
let totalSpent = 32500;
let remainingBalance = totalBudget - totalSpent;

// Step 2: Store spending by category
let foodExpenses = 8000;
let transportExpenses = 4500;
let rentExpenses = 12000;
let entertainmentExpenses = 2500;
let savingsAmount = 3500;
let utilitiesExpenses = 2000;

const categoryTotals = {
  Food: foodExpenses,
  Transport: transportExpenses,
  Rent: rentExpenses,
  Entertainment: entertainmentExpenses,
  Savings: savingsAmount,
  Utilities: utilitiesExpenses,
  Other: 0
};

// Find the amount displayed on each category card
const categoryDisplays = {
  Food: document.getElementById("food-total"),
  Transport: document.getElementById("transport-total"),
  Rent: document.getElementById("rent-total"),
  Entertainment: document.getElementById("entertainment-total"),
  Savings: document.getElementById("savings-total"),
  Utilities: document.getElementById("utilities-total")
};

// Update the category amounts on the webpage
function updateCategoryDisplay() {
  for (const category in categoryDisplays) {
    categoryDisplays[category].textContent =
      formatMoney(categoryTotals[category]);
  }
}


// Step 3: Display the stored data
console.log("Total Budget:", totalBudget);
console.log("Total Spent:", totalSpent);
console.log("Remaining Balance:", remainingBalance);
console.log("Food Expenses:", foodExpenses);
console.log("Transport Expenses:", transportExpenses);
console.log("Rent Expenses:", rentExpenses);
console.log("Entertainment Expenses:", entertainmentExpenses);
console.log("Savings:", savingsAmount);
console.log("Utilities:", utilitiesExpenses);

// Step 4: Collect and process user input
const expenseForm = document.getElementById("expense-form");
const expenseNameInput = document.getElementById("expense-name");
const expenseAmountInput = document.getElementById("expense-amount");
const expenseCategoryInput = document.getElementById("expense-category");
const expenseList = document.getElementById("expense-list");
const formMessage = document.getElementById("form-message");

// Store expenses entered by the user
let expenses = JSON.parse(
  localStorage.getItem("spendWiseExpenses") || "[]"
);

const totalBudgetDisplay = document.getElementById("total-budget");
const totalSpentDisplay = document.getElementById("total-spent");
const remainingBalanceDisplay = document.getElementById("remaining-balance");
const spentPercentageDisplay = document.getElementById("spent-percentage");

// Format money in Kenyan shillings
function formatMoney(amount) {
  return "KSh " + amount.toLocaleString("en-KE", {
    maximumFractionDigits: 2
  });
}

// Update the dashboard summary cards
function updateDashboard() {
  remainingBalance = totalBudget - totalSpent;

  totalBudgetDisplay.textContent = formatMoney(totalBudget);
  totalSpentDisplay.textContent = formatMoney(totalSpent);
  remainingBalanceDisplay.textContent = formatMoney(remainingBalance);

  const percentageSpent = totalBudget > 0
    ? (totalSpent / totalBudget) * 100
    : 0;

  spentPercentageDisplay.textContent =
    percentageSpent.toFixed(1) + "% of your budget";
}

// Display the initial financial figures
updateDashboard();

expenseForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Collect input values
  const expenseName = expenseNameInput.value.trim();
  const expenseAmount = Number(expenseAmountInput.value);
  const expenseCategory = expenseCategoryInput.value;

  // Validate input
  if (
    expenseName === "" ||
    !Number.isFinite(expenseAmount) ||
    expenseAmount <= 0 ||
    expenseCategory === ""
  ) {
    formMessage.textContent = "Please enter valid expense details.";
    return;
  }

  // Check the available budget
  if (expenseAmount > remainingBalance) {
    formMessage.textContent =
      "This expense exceeds your remaining budget.";
    return;
  }

  // Store the new expense
  const newExpense = {
    name: expenseName,
    amount: expenseAmount,
    category: expenseCategory
  };

  expenses.push(newExpense);
  // Add the expense to its category total
categoryTotals[expenseCategory] += expenseAmount;
updateCategoryDisplay();
localStorage.setItem(
  "spendWiseExpenses",
  JSON.stringify(expenses)
);

// Refresh the category cards
updateCategoryDisplay();

  // Update financial calculations
// Update financial calculations
totalSpent += expenseAmount;

// Refresh the dashboard cards
updateDashboard();
updateCategoryDisplay();

  // Display the new expense safely
  const listItem = document.createElement("li");
  listItem.textContent =
    newExpense.name +
    " — KSh " +
    newExpense.amount.toLocaleString("en-KE") +
    " (" +
    newExpense.category +
    ")";

  if (expenses.length === 1) {
    expenseList.innerHTML = "";
  }

  expenseList.appendChild(listItem);

  formMessage.textContent = "Expense added successfully!";

  // Clear the form
  expenseForm.reset();

  // Show updated calculations
  console.log("Total Spent:", totalSpent);
  console.log("Remaining Balance:", remainingBalance);
});
