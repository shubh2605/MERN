# JavaScript Notes (English - Simple Explanation)

## 1. What Is JavaScript?

JavaScript is one of the core technologies of the web, along with HTML and CSS. It's a high-level, interpreted programming language used both on the client side (in browsers) and on the server side (using Node.js).

## 2. What Is JavaScript Used For?

- DOM (Document Object Model) Manipulation
- Event Handling
- Asynchronous Requests
- Animations & Effects
- Data Manipulation (Sorting, filtering, etc)
- Storing Data (Cookies, LocalStorage, etc)
- Single Page Applications (SPA)
- Creating APIs & Web Services (Node.js, Deno)

---

## 3. Web Browser Architecture & Rendering Engine

A web browser (Client) is an application that acts as a gateway between the user and the internet — it fetches resources from servers and displays them as interactive web pages. Modern browsers are built with multiple coordinated components to ensure speed, security, and compatibility.

### Core Components of Browser Architecture

Think of a browser (Chrome, Firefox, Edge, Safari) as a team where each member has a specific job.

| Component | Simple Explanation | Real-Life Example |
|---|---|---|
| **1. User Interface (UI)** | The part users can see and interact with | Address bar, Back button, Forward button, Refresh button, Tabs, Bookmarks |
| **2. Browser Engine** | Acts as the manager. It receives your actions (clicks, typing) and tells other components what to do | You type a website URL → Browser Engine tells the Networking Layer to fetch the webpage |
| **3. Rendering Engine** | Displays the webpage on the screen. It reads HTML and CSS and shows the webpage exactly as designed | Converts HTML code into the webpage you see |
| **4. Networking Layer** | Downloads resources from the internet. Communicates with web servers using HTTP/HTTPS | Fetches HTML, CSS, JavaScript, images, and videos from a website |
| **5. JavaScript Engine** | Executes JavaScript code to make webpages interactive and dynamic | Clicking a button changes text without reloading the page |
| **6. UI Backend** | Draws browser controls using the operating system | Displays buttons, scrollbars, text boxes, and menus |

---

## 4. How to Run JavaScript?

**Browser (Native):**
Console (document/window Environment)
1. Mathematical Operation
2. Logging Text (using Warning, Info, Table, Group Format)
3. Manipulating Content of a webpage

**Local:** Node.js Environment

---

## 5. What Is Hoisting?

Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase. This means you can use functions and variables before they are declared in the code.

---

## 6. Three Ways to Declare Variables

JavaScript provides three ways to declare variables:

### 1. `var`
Variables declared with `var`:
- Are function-scoped (or globally scoped if declared outside a function)
- Can be redeclared and updated

### 2. `let` (Recommended for variables that change)
- Block-scoped (only available inside the `{}` where declared)
- Can be updated but not redeclared in the same scope
- Hoisted but not initialized (accessing before declaration causes an error)

### 3. `const` (Recommended for constants)
- Block-scoped
- Must be initialized at declaration
- Cannot be updated or redeclared
- The value itself can still be mutable if it's an object or array

**Identifier:** All elements in programming like functions, variables, classes, and objects are known as Identifiers.

### Variable Naming Rules
- Can contain letters, digits, and `$`
- Must start with a letter or `_`
- Cannot start with a number
- Cannot be a reserved keyword (let, class, return, etc.)

---

## 7. Data Types

In JavaScript, data types are divided into primitive and non-primitive (reference) types.

### Primitive Data Types
These are immutable and stored directly in memory.

1. **Number** – Represents integers and floating-point numbers
2. **String** – Represents text enclosed in quotes
3. **Boolean** – Represents true or false
4. **Undefined** – A variable declared but not assigned a value
5. **Null** – Represents an intentional empty value. `typeof null` returns "object", which is a historical bug in JavaScript dating back to its first implementation
6. **Symbol** – Represents a unique and immutable value (often used as object keys)
7. **NaN** – NaN is a property in JavaScript that represents a special value indicating that the result of an expression is not a number. It stands for "Not-A-Number" and is a unique data type in JavaScript. This property is used to identify values that don't represent a valid number, which can occur when a mathematical operation fails to produce a numeric result.

### Non-Primitive (Reference) Data Types

1. **Function** – A block of reusable code
2. **Object** – A collection of key-value pairs
3. **Array** – An ordered list of values

### Special → `typeof`
The `typeof` operator is used to determine the data type of a value or variable. It always returns a string representing the type. For example:
- Numbers: `typeof 42 === "number"`
- Strings: `typeof "hello" === "string"`
- Booleans: `typeof true === "boolean"`
- BigInt: `typeof 42n === "bigint"`
- Symbols: `typeof Symbol() === "symbol"`
- Undefined: `typeof undefined === "undefined"`
- Functions: `typeof function(){} === "function"`

---

## 8. JavaScript Execution Context

The Execution Context in JavaScript is a conceptual environment where code is parsed and executed. It contains all the information the JavaScript engine needs to execute the code — variables, functions, and the value of `this`. It's fundamental to understanding how JavaScript operates behind the scenes.

### Three Key Types
- **Global Execution Context (GEC):** Created by default when the script starts. It creates the global object (e.g., `window` in browsers) and the `this` keyword.
- **Function Execution Context (FEC):** Created whenever a function is invoked. Each function call gets its own brand-new context.

### Phases of Execution Context Creation
1. **Creation Phase / Memory Phase:** Memory allocation — variables declared with `var` are initialized to `undefined`, while function declarations are stored in memory. This process is known as Hoisting.
2. **Execution Phase:** The JavaScript engine (v8) executes the code line by line, updating variable values and executing functions.

---

## 9. Special Operators

### Nullish Coalescing Operator (`??`)
The nullish coalescing operator (`??`) is a logical operator in JavaScript that returns its right-hand side operand when the left-hand side operand is `null` or `undefined`.

Example:
```js
let name = null;
let displayName = name ?? "Guest"; // Guest
let anotherName = "Aisha" ?? "Guest"; // Aisha
```

### Optional Chaining (`?.`)
Optional chaining (`?.`) is an ES2020 feature that lets you:
- Safely access nested object properties
- Access array elements
- Call functions without throwing an error if an intermediate value is `null` or `undefined` — instead, it returns `undefined`.

---

## 10. What Is a Function

A function is a reusable block of code designed to perform a specific task.

### Features of a Function
- A function can take parameters (inputs)
- It can return a value (output) or perform actions without returning anything
- In JavaScript, functions are also objects — meaning they can be stored in variables, passed as arguments, and returned from other functions

The term "first-class" (or first-class citizen) refers to the fact that functions are treated like any other value in the language.

### Why Functions Are Called First-Class Citizens in JS
1. Can be assigned to a variable
2. Can be passed as an argument to another function
3. Can be returned from a function

### Function Declarations, Expressions, and Arrow Functions

- **Function Declarations:** The most common way to define functions in JavaScript. They use the `function` keyword and can be hoisted to the top of their scope, allowing them to be called before they are defined.
- **Function Expressions:** Anonymous functions assigned to a variable. They don't have a name and can only be called after being assigned.
- **Arrow Functions:** Introduced in ES6, arrow functions use the `=>` syntax and are always expressions. They can omit the `return` keyword and curly brackets if the function body contains only one statement.

### Default, Rest, and Spread Parameters

- **Rest Operator (`...`):** Collects multiple values into a single array (or object).

---

## 11. Return Value and Early Return in JS

### Return Value
In JavaScript, a function can return a value to the caller. When a function reaches a `return` statement, it stops executing and returns the value specified after the `return` keyword. If a function doesn't return a value, the return value will be `undefined`. The `return` statement is used to send a value out of a function.

### Early Return (returning the base case, like in recursion)
Early return is a technique where a function exits as soon as a certain condition is met — usually to handle an edge case or invalid input.

### Higher Order Function
A function that takes one or more functions as arguments, or returns a function.

### IIFE (Immediately Invoked Function Expressions)
A function that is executed immediately after it is defined. The primary purpose of an IIFE is to create a local scope for variables, preventing them from polluting the global scope.

### Pure Vs Impure Functions

**Pure Function:** Pure functions always return the same output for the same input and have no side effects.

Example:
```js
function add(a, b) {
  return a + b;
}
```

**Impure Function:** Impure functions may produce different outputs for the same input and can modify external state.
