# JavaScript Notes

## 1. JavaScript Kya Hai?

JavaScript web ki core technologies mein se ek hai, HTML aur CSS ke saath. Ye ek high-level, interpreted programming language hai jo client-side pe bhi use hoti hai aur server-side pe bhi (Node.js ke through).

## 2. JavaScript Kis Liye Use Hota Hai?

- DOM (Document Object Model) Manipulation
- Event Handling
- Asynchronous Requests
- Animations & Effects
- Data Manipulation (Sorting, filtering, etc)
- Storing Data (Cookies, LocalStorage, etc)
- Single Page Applications (SPA)
- APIs & Web Services banana (Node.js, Deno)

---

## 3. Web Browser Architecture & Rendering Engine

Web browser (Client) ek application hai jo user aur internet ke beech gateway ka kaam karta hai — servers se resources fetch karke unhe interactive web pages ki tarah dikhata hai. Modern browsers multiple coordinated components ke saath bane hote hain taaki speed, security, aur compatibility mile.

### Browser Architecture Ke Core Components

Browser (Chrome, Firefox, Edge, Safari) ko ek team samjho jisme har member ka apna specific kaam hota hai.

| Component | Simple Explanation | Real-Life Example |
|---|---|---|
| **1. User Interface (UI)** | Wo part jo user dekh aur interact kar sakta hai | Address bar, Back button, Forward button, Refresh button, Tabs, Bookmarks |
| **2. Browser Engine** | Manager jaisa kaam karta hai. Ye aapke actions (clicks, typing) ko receive karta hai aur baaki components ko batata hai kya karna hai | Aap ek website URL type karte ho → Browser Engine, Networking Layer ko webpage fetch karne ke liye bolta hai |
| **3. Rendering Engine** | Webpage ko screen pe display karta hai. HTML aur CSS ko read karke webpage ko exactly wahi dikhata hai jaisa design kiya gaya hai | HTML code ko webpage mein convert karta hai jo aap dekhte ho |
| **4. Networking Layer** | Internet se resources download karta hai. HTTP/HTTPS ke through web servers se communicate karta hai | Website se HTML, CSS, JavaScript, images, aur videos fetch karta hai |
| **5. JavaScript Engine** | JavaScript code execute karta hai taaki webpages interactive aur dynamic bane | Button click karne pe text change hota hai bina page reload kiye |
| **6. UI Backend** | Operating system ka use karke browser controls draw karta hai | Buttons, scrollbars, text boxes, aur menus display karta hai |

---

## 4. JavaScript Kaise Run Karein?

**Browser (Native):**
Console (document/window Environment)
1. Mathematical Operation
2. Text Logging (using Warning, Info, Table, Group Format)
3. Webpage ka content manipulate karna

**Local:** Node.js Environment

---

## 5. Hoisting Kya Hai?

Hoisting ek JavaScript mechanism hai jisme variables aur function declarations compilation phase ke dauraan unke containing scope ke top pe move ho jaate hain. Iska matlab ye hai ki aap functions aur variables ko code mein declare hone se pehle bhi use kar sakte ho.

---

## 6. Variables Declare Karne Ke Teen Tarike

JavaScript variables declare karne ke teen tarike deta hai:

### 1. `var`
`var` keyword se declare kiye gaye variables:
- Function-scoped hote hain (ya globally scoped agar function ke bahar declare kiye gaye ho)
- Redeclare aur update dono ho sakte hain

### 2. `let` (Recommended un variables ke liye jo change hote hain)
- Block-Scoped (sirf usi `{}` ke andar available hote hain jaha declare kiya gaya ho)
- Update ho sakta hai, lekin same scope mein redeclare nahi ho sakta
- Hoisted hota hai lekin initialized nahi (declaration se pehle access karne pe error aata hai)

### 3. `const` (Recommended constants ke liye)
- Block-scoped
- Declaration ke time hi initialize hona zaroori hai
- Update ya redeclare nahi ho sakta
- Agar value object ya array hai, to value khud mutable ho sakti hai

**Identifier:** Programming ke sabhi elements jaise function, variables, classes, object — ye sab Identifiers kehlate hain.

### Variable Naming Rules
- Letters, digits, aur `$` contain kar sakta hai
- Letter ya `_` se start hona chahiye
- Number se start nahi ho sakta
- Reserved keyword nahi ho sakta (let, class, return, etc.)

---

## 7. Data Types

JavaScript mein data types do parts mein divide hote hain: primitive aur non-primitive (reference) types.

### Primitive Data Types
Ye immutable hote hain aur directly memory mein store hote hain.

1. **Number** – Integers aur floating-point numbers represent karta hai
2. **String** – Quotes mein enclosed text represent karta hai
3. **Boolean** – true ya false represent karta hai
4. **Undefined** – Ek variable jo declare toh kiya gaya hai lekin assign nahi kiya gaya
5. **Null** – Ek intentional empty value represent karta hai. `typeof null` "object" return karta hai, jo ek historical bug hai JavaScript mein — iske first implementation se chala aa raha hai
6. **Symbol** – Ek unique aur immutable value represent karta hai (often object keys ke liye use hota hai)
7. **NaN** – NaN ek property hai JavaScript mein jo ek special value indicate karti hai — matlab expression ki value number nahi hai. Iska matlab hai "Not-A-Number" aur ye JavaScript ka ek unique data type hai. Ye property un values ko identify karne ke liye use hoti hai jo valid number represent nahi karti, jo ki tab hoti hai jab koi mathematical operation numeric result produce karne mein fail ho jaaye.

### Non-Primitive (Reference) Data Types

1. **Function** – Reusable code ka ek block
2. **Object** – Key-value pairs ka collection
3. **Array** – Values ki ordered list

### Special → `typeof`
`typeof` operator ek value ya variable ka data type determine karne ke liye use hota hai. Ye hamesha ek string return karta hai jo type represent karti hai. For example:
- Numbers: `typeof 42 === "number"`
- Strings: `typeof "hello" === "string"`
- Booleans: `typeof true === "boolean"`
- BigInt: `typeof 42n === "bigint"`
- Symbols: `typeof Symbol() === "symbol"`
- Undefined: `typeof undefined === "undefined"`
- Functions: `typeof function(){} === "function"`

---

## 8. JavaScript Execution Context

Execution Context JavaScript mein ek conceptual environment hai jaha code parse aur execute hota hai. Isme wo saari information hoti hai jo JavaScript engine ko code execute karne ke liye chahiye hoti hai — variables, functions, aur `this` ki value. Ye samajhna fundamental hai ki JavaScript peeche se kaise operate karta hai.

### Teen Key Types
- **Global Execution Context (GEC):** Script start hote hi by default create hoti hai. Ye global object create karti hai (e.g., browsers mein `window`) aur `this` keyword.
- **Function Execution Context (FEC):** Jab bhi koi function invoke hota hai, tab create hoti hai. Har function call ko apna brand-new context milta hai.

### Execution Context Creation Ke Phases
1. **Creation Phase / Memory Phase:** Memory Allocation — `var` se declare kiye gaye variables `undefined` se initialize hote hain, jabki function declarations memory mein store ho jaate hain. Ye process Hoisting kehlata hai.
2. **Execution Phase:** JavaScript engine (v8) code ko line by line execute karta hai, variable values update karta hai aur functions execute karta hai.

---

## 9. Special Operators

### Nullish Coalescing Operator (`??`)
Nullish coalescing operator (`??`) ek logical operator hai JavaScript mein jo apna right-hand side operand return karta hai jab left-hand side operand `null` ya `undefined` ho.

Example:
```js
let name = null;
let displayName = name ?? "Guest"; // Guest
let anotherName = "Aisha" ?? "Guest"; // Aisha
```

### Optional Chaining (`?.`)
Optional chaining (`?.`) JavaScript mein ek ES2020 feature hai jo aapko:
- Nested object properties ko safely access karne deta hai
- Array elements access karne deta hai
- Functions call karne deta hai — bina error throw kiye agar koi intermediate value `null` ya `undefined` ho — iske bajaay ye `undefined` return karta hai.

---

## 10. Function Kya Hai

Function ek reusable block of code hai jo ek specific task perform karne ke liye design kiya gaya hai.

### Function Ke Features
- Function parameters (inputs) le sakta hai
- Ye ek value (output) return kar sakta hai, ya kuch actions perform kar sakta hai bina kuch return kiye
- JavaScript mein, functions bhi objects hote hain — matlab unhe variables mein store kiya ja sakta hai, arguments ki tarah pass kiya ja sakta hai, aur doosre functions se return kiya ja sakta hai

JavaScript mein term "first-class" (ya first-class citizen) iska matlab hai ki functions ko language mein kisi bhi doosri value ki tarah treat kiya jaata hai.

### Function Ko First-Class Citizen Kyu Kaha Jaata Hai
1. Variable mein assign ho sakta hai
2. Doosre function ko argument ki tarah pass ho sakta hai
3. Ek function se return ho sakta hai

### Function Declarations, Expressions, Aur Arrow Functions

- **Function Declarations:** Ye functions define karne ka sabse common tarika hai JavaScript mein. Ye `function` keyword use karte hain aur inke scope ke top pe hoist ho sakte hain, jisse inhe define hone se pehle bhi call kiya ja sakta hai.
- **Function Expressions:** Ye anonymous functions hote hain jo ek variable mein assign kiye jaate hain. Inka koi naam nahi hota aur ye sirf assign hone ke baad hi call ho sakte hain.
- **Arrow Functions:** Agar function body sirf ek statement contain karti hai, to ye `return` keyword aur curly brackets skip kar sakte hain.

### Default, Rest, Aur Spread Parameter

- **Rest Operator (`...`):** Multiple values ko ek single array (ya object) mein collect karta hai.

---

## 11. Return Value Aur Early Return

### Return Value
JavaScript mein, ek function caller ko ek value return kar sakta hai, aur jab function `return` statement pe pahunchta hai, to wo execute hona band kar deta hai aur `return` keyword ke baad specify ki gayi value return kar deta hai. Agar function koi value return nahi karta, to return value `undefined` hogi. `return` statement ka use function ke bahar value bhejne ke liye kiya jaata hai.

### Early Return (recursion ke base case jaisa return)
Early return JavaScript mein ek technique hai jisme function kisi certain condition meet hote hi turant exit ho jaata hai — usually edge case ya invalid input handle karne ke liye.

### Higher Order Function
Wo function jisme ek ya zyada functions argument ki tarah pass kiye jaate hain, ya wo function return karta hai.

### IIFE (Immediately Invoked Function Expressions)
Ye function define hote hi immediately execute ho jaata hai. IIFE ka primary purpose hai variables ke liye ek local scope create karna, taaki wo global scope ko pollute na karein.

### Pure Vs Impure Functions

**Pure Function:** Pure functions hamesha same input ke liye same output return karte hain aur inke koi side effects nahi hote.

Example:
```js
function add(a, b) {
  return a + b;
}
```

**Impure Function:** Impure functions same input ke liye different outputs produce kar sakte hain aur external state ko modify kar sakte hain.

Example:
```js
let total = 0;
function addToTotal (x) {
total += x; // modifies external state
return total;
}
```

### Factory Function in JavaScript
A factory function is a function that returns a new object each time it is called. factory functions makes easier to manage multiple objects with similar properties and behaviors.

### What is a Constructor Function?
A constructor function is a special type of function in JavaScript that's used to create and initialize new objects. constructor functions are designed to set up an object's initial state. They define the properties (data) and methods (behaviors) that each instance of the object will have.

### Key Characteristics of Constructor Functions
1. **Naming Convention** : By convention, constructor functions are named with a capital letter. This helps differentiate them from regular functions.
2. **Usage of this Keyword**: Constructor functions use the this keyword to refer to the new object instance being created.
3. **new Keyword**: Constructor functions are called with the new keyword. This creates a new, empty object, and this inside the function will refer to that object.

### Generator Function
A generator function is defined using the function syntax and allows execution to be paused and resumed. **Unlike regular functions that return a single value**, generator functions return a generator object, which is an iterator conforming to the iterable protocol.
```js
function simpleGenerator() {
vield 'Hello';
vield 'World';
}

const iterator = simpleGenerator();
console.log(iterator.next().value); 
console.log(iterator.next().value); 
console.log(iterator.next().done); 
```