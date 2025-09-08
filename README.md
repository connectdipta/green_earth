# ES6 JavaScript Basics – Question and Solution
---

## 1️ What is the difference between `var`, `let`, and `const`?

**Answer:**

1. **`var`** – It's an old way to declare variables, can be redeclared and updated. It avoid in modern code because it can cause bugs.

2. **`let`** – It's modern way to declare variables, can change value, cannot redeclare in same block.

3. **`const`** – It's best for declare constant value which we don't want to get modified or delete, we can not redeclare the variable.

---

## 2️ What is the difference between `map()`, `forEach()`, and `filter()`?

**Answer:**

1. **`map()`** – Creates a new array with modified values. Use when we want to change each item in the array.

2. **`forEach()`** – Just loops through an array. Doesn’t return anything and we use for side effects like logging or updating something outside the loop.

3. **`filter()`** – It creates a new array with items that pass a condition and we use it when we want to keep only certain items.

---

## 3️ What are arrow functions in ES6?

**Answer:**

It's a shorter way to write functions using this symbol (=>).

**Example:**
const add = (a, b) => a + b;

---

## 4️ How does destructuring assignment work in ES6?

**Answer:**

 Destructuring is a quick way to unpack values from arrays or objects into variables.

**Example:**
const [a, b] = [10, 20];
console.log(a); // Output will be 10
console.log(b); // Output will be 20

---

## 5️ Explain template literals in ES6. How are they different from string concatenation?

**Answer:**

Template literals are Strings written with backticks (``). It's allow multi-line strings and also allow ${} for variables inside strings. 

**Example:**
`Hello, ${name}!`
