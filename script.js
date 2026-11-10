
console.log("SpendWise JavaScript loaded successfully!");

// Initial sample financial figures
const totalBudget = 50000;
const initialSpent = 32500;

// Initial category amounts
const initialCategories = {
  Food: 8000,
  Transport: 4500,
  Rent: 12000,
  Entertainment: 2500,
  Savings: 3500,
  Utilities: 2000,
  Other: 0
};

// Load saved expenses safely
let expenses = [];

try {
  expenses = JSON.parse(
    localStorage.getItem("spendWiseExpenses") || "[]"
  );

  if (!Array.isArray(expenses)) expenses = [];
} catch {
  expenses = [];
}

// Restore category totals
const categoryTotals = { ...initialCategories };

expenses.forEach(expense => {
  if (
    expense &&
    categoryTotals[expense.category] !== undefined &&
    Number.isFinite(Number(expense.amount))
  ) {
    categoryTotals[expense.category] += Number(expense.amount);
  }
});

// Calculate total spending
let totalSpent = initialSpent +
  expenses.reduce((sum, expense) => sum + Number(expense.amount || 0), 0);

let remainingBalance = totalBudget - totalSpent;

// Find HTML elements
const expenseForm = document.getElementById("expense-form");
const expenseNameInput = document.getElementById("expense-name");
const expenseAmountInput = document.getElementById("expense-amount");
const expenseCategoryInput = document.getElementById("expense-category");
const expenseList = document.getElementById("expense-list");
const formMessage = document.getElementById("form-message");

const totalBudgetDisplay = document.getElementById("total-budget");
const totalSpentDisplay = document.getElementById("total-spent");
const remainingBalanceDisplay = document.getElementById("remaining-balance");
const spentPercentageDisplay = document.getElementById("spent-percentage");

const categoryDisplays = {
  Food: document.getElementById("food-total"),
  Transport: document.getElementById("transport-total"),
  Rent: document.getElementById("rent-total"),
  Entertainment: document.getElementById("entertainment-total"),
  Savings: document.getElementById("savings-total"),
  Utilities: document.getElementById("utilities-total")
};

// Format Kenyan currency
function formatMoney(amount) {
  return "KSh " + amount.toLocaleString("en-KE", {
    maximumFractionDigits: 2
  });
}

// Update financial summary
function updateDashboard() {
  remainingBalance = totalBudget - totalSpent;

  totalBudgetDisplay.textContent = formatMoney(totalBudget);
  totalSpentDisplay.textContent = formatMoney(totalSpent);
  remainingBalanceDisplay.textContent = formatMoney(remainingBalance);

  const percentage = (totalSpent / totalBudget) * 100;

  spentPercentageDisplay.textContent =
    percentage.toFixed(1) + "% of your budget";
}

// Update category cards
function updateCategoryDisplay() {
  for (const category in categoryDisplays) {
    const display = categoryDisplays[category];

    if (display) {
      display.textContent = formatMoney(categoryTotals[category]);
    }
  }
}

// Display saved expenses
function displayExpenses() {
  expenseList.innerHTML = "";

  if (expenses.length === 0) {
    const item = document.createElement("li");
    item.textContent = "No new expenses added yet.";
    expenseList.appendChild(item);
    return;
  }

  expenses.forEach(expense => {
    const item = document.createElement("li");

    item.textContent =
      `${expense.name} — ${formatMoney(Number(expense.amount))} (${expense.category})`;

    expenseList.appendChild(item);
  });
}

// Save expenses
function saveExpenses() {
  localStorage.setItem(
    "spendWiseExpenses",
    JSON.stringify(expenses)
  );
}

// Display initial information
updateDashboard();
updateCategoryDisplay();
displayExpenses();

// Handle new expenses
expenseForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = expenseNameInput.value.trim();
  const amount = Number(expenseAmountInput.value);
  const category = expenseCategoryInput.value;

  if (
    !name ||
    !Number.isFinite(amount) ||
    amount <= 0 ||
    !Object.hasOwn(categoryTotals, category)
  ) {
    formMessage.textContent = "Please enter valid expense details.";
    return;
  }

  if (amount > remainingBalance) {
    formMessage.textContent =
      "This expense exceeds your remaining budget.";
    return;
  }

  const newExpense = {
    name,
    amount,
    category
  };

  expenses.push(newExpense);
  categoryTotals[category] += amount;
  totalSpent += amount;

  saveExpenses();
  updateDashboard();
  updateCategoryDisplay();
  displayExpenses();

  formMessage.textContent = "Expense added successfully!";

  expenseForm.reset();

  console.log("Total Spent:", totalSpent);
  console.log("Remaining Balance:", remainingBalance);
});
