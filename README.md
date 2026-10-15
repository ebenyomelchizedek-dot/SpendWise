# SpendWise – Interactive Budget Dashboard

## 1. Project Description

SpendWise is a personal finance dashboard developed using HTML, CSS, and JavaScript. It helps users monitor their monthly budget, record expenses, calculate spending, and track their remaining balance.

## 2. Improvements Made

The application was improved to support interactive expense management. Users can enter expense descriptions, amounts, and categories. The dashboard updates financial totals and category spending when a new expense is added. Expense records are saved in browser storage.

## 3. JavaScript Concepts Used

### Conditional Statements

Conditional statements validate expense details and check whether an expense exceeds the remaining budget. They provide appropriate feedback to the user.

### Arrays and Objects

An array stores multiple expense records. Each expense is represented by an object containing its description, amount, and category.

### Loops

Loops process saved expense records, calculate total spending, and update the spending categories.

### DOM Manipulation

JavaScript updates the total budget, total spent, remaining balance, spending percentage, category totals, and recent expense list directly on the webpage.

### Event Listeners

An event listener handles the expense form submission. It reads user input, validates the details, saves the record, and updates the dashboard without reloading the page.

### Browser Storage

The localStorage feature saves expense records in the browser so they can be restored after refreshing the page.

## 4. Testing

The application can be tested by:

1. Adding an expense with valid details.
2. Checking that the dashboard totals update correctly.
3. Trying an invalid expense amount.
4. Attempting to enter an expense greater than the remaining budget.
5. Adding expenses in different categories.
6. Refreshing the page to check whether saved expenses remain available.

## 5. Challenges and Solutions

One challenge was ensuring that the category totals and dashboard figures remained consistent. The JavaScript was organized into functions to calculate expenses and update the displayed information.

Another challenge was connecting the HTML elements to the correct JavaScript selectors. Matching element IDs and checking the stylesheet filename helps the files work together correctly.

## 6. Technologies Used

- HTML5
- CSS3
- JavaScript
- Arrays and objects
- Conditional statements
- Loops
- DOM manipulation
- Event listeners
- localStorage

## 7. How to Run the Project

1. Download or clone the project repository.
2. Open the project folder in Visual Studio Code.
3. Open index.html in a web browser.
4. Enter an expense description, amount, and category.
5. Click Add Expense to update the dashboard.

## 8. Author

Melchizedek Ekiru Ebenyo
