# SpendWise – Personal Finance Dashboard

## Project Description

SpendWise is a personal finance dashboard built using HTML, CSS, and JavaScript. It helps users track their monthly budget, record expenses, monitor spending categories, and calculate their remaining balance.

## Features

- Responsive dashboard layout.
- Financial summary cards showing total budget, total spending, and remaining balance.
- Expense form for entering descriptions, amounts, and categories.
- Expense input validation.
- Automatic calculation of total spending and remaining balance.
- Automatic calculation of the percentage of the budget spent.
- Spending categories: Food, Transport, Rent, Entertainment, Savings, Utilities, and Other.
- Recent expenses list.
- Browser storage using localStorage to retain expenses after refreshing the page.
- Responsive layout using CSS Grid, Flexbox, and media queries.
- CSS custom properties for consistent styling.
- Hover and keyboard-focus effects.
- Dark theme based on the user's system preference.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- DOM manipulation
- JavaScript variables and data types
- Objects and arrays
- Functions
- Event listeners
- Conditional statements
- Arithmetic operations
- Input validation
- localStorage
- CSS Grid and Flexbox

## Project Files

- `index.html` – Contains the dashboard structure and expense form.
- `style.css` – Contains the dashboard styling, responsive layout, and visual effects.
- `script.js` – Handles expense input, validation, calculations, category totals, dashboard updates, and browser storage.
- `README.md` – Documents the project, features, technologies, and instructions.

## How to Run

1. Download or clone the project repository.
2. Open the project folder.
3. Open `index.html` in a web browser.
4. Enter an expense description, amount, and category.
5. Click the Add Expense button.
6. Check the updated summary cards and recent expenses list.
7. Refresh the page to test whether saved expenses remain available.

## JavaScript Concepts Demonstrated

### Variables and Data Types

Variables store the budget, total spending, remaining balance, category amounts, and expense information.

### User Input

The expense form collects the expense description, amount, and category from the user.

### Calculations

JavaScript calculates total spending, remaining balance, category totals, and the percentage of the budget spent.

### Functions

Functions organize reusable operations, including formatting currency, updating the dashboard, updating category totals, and restoring saved expenses.

### DOM Manipulation

JavaScript updates dashboard figures and adds expense entries to the webpage without requiring a full page reload.

### Arrays and Objects

Objects represent individual expenses, while an array stores the expenses entered by the user.

### Browser Storage

The localStorage API saves expense records in the browser so they can be restored after a page refresh.

## Testing

The application can be tested by entering valid expenses, checking that invalid amounts are rejected, verifying that financial totals update, and refreshing the page to confirm that saved expenses are restored.

## Sample Data

The initial financial figures are fictional examples used for demonstration. The sample monthly budget is KSh 50,000.

## Author

Melchizedek Ekiru Ebenyo