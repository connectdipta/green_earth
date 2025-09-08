# ES6 JavaScript Basics – Question and Solution
---

## 1️ What is the difference between `var`, `let`, and `const`?

**Answer:**

1. **`var`** – Old way to declare variables. Can be redeclared and updated. Avoid in modern code because it can cause bugs.

2. **`let`** – Modern way to declare variables. Can change value, but cannot redeclare in the same block.

3. **`const`** – Best for declaring constant values that shouldn't be changed or deleted. Cannot be redeclared.

---

## 2️ What is the difference between `map()`, `forEach()`, and `filter()`?

**Answer:**

1. **`map()`** – Creates a new array with modified values. Use when you want to change each item in the array.

2. **`forEach()`** – Just loops through the array. Doesn’t return anything. Use for side effects like logging or updating something outside the loop.

3. **`filter()`** – Creates a new array with items that pass a condition. Use when you want to keep only certain items.

---

## 3️ What are arrow functions in ES6?

**Answer:**

Arrow functions are a shorter way to write functions using the `=>` symbol.

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

Template literals are strings written using backticks `` ` `` instead of quotes. They allow: Multi-line strings and also allow variable insertion using `${}`.

**Example:**
`Hello, ${name}!`
