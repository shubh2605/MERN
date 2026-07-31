# DOM (Document Object Model) —

## DOM kya hai?

Socho tumhara HTML page ek **family tree** hai. `<html>` sabse upar wala **dada-dadi** hai, uske do bachhe hain — `<head>` aur `<body>`. Fir inke bhi bachhe hain jaise `<div>`, `<h1>`, `<p>`, `<ul>`, `<li>` etc.

JavaScript is tree ko use karke kisi bhi element ko **dhoondh, badal, ya delete** kar sakta hai — bina page reload kiye. Isi wajah se dynamic websites ban paati hain (jaise Instagram pe like button dabao aur count turant badal jaaye, page reload nahi hota).

- **Container element** = jisme andar aur elements hain (jaise `<ul>` jisme `<li>` hai)
- **Child element** = jo khud akela hai, andar kuch nahi (jaise ek simple `<p>`)

## DOM kyun chahiye?

1. **Dynamic updates** — page reload kiye bina content change kar sakte ho
2. **Flexibility** — real-time mein element add/remove/style kar sakte ho
3. **Interactivity** — button click, form submit jaise events handle kar sakte ho

## Elements select karna (dhoondhna)

Socho ek class mein bahut saare students hain, tumhe kisi ko dhoondhna hai:

- **`getElementById('container')`** → jaise roll number se student dhoondhna. Ek hi milega (unique hota hai). Agar same id do jagah hai, toh sirf **pehla** wala milega. Nahi mila toh `null`.
- **`getElementsByTagName('li')`** → jaise "sab students jo blue shirt pehne hain" — tag name se saare match milte hain, ek **live HTMLCollection** (array jaisa) return hota hai.
- **`getElementsByClassName('paras')`** → class name se saare matching elements milte hain. Kuch nahi mila toh **empty HTMLCollection** milega, `null` nahi.

> **Note:** "Live" collection ka matlab — agar baad mein DOM change hota hai, toh yeh collection automatically update ho jaata hai.

### querySelector vs querySelectorAll

- **`querySelector('.paras')`** → CSS selector se match karne wala **pehla** element deta hai
- **`querySelectorAll('.paras')`** → CSS selector se match karne wale **saare** elements deta hai (NodeList)

Yeh dono modern aur flexible hain kyunki tum CSS jaisa selector (`.class`, `#id`, `tag`) kuch bhi use kar sakte ho.

## Elements ko manipulate karna (badalna)

Analogy: socho tum ek **list (`ul`)** manage kar rahe ho, jisme items (`li`) add/remove karne hain.

### 1. `createElement('li')`

Naya element banata hai, but abhi page pe nahi dikhta (jaise ek naya paper likha but table pe rakha nahi).

### 2. `appendChild(li)`

Us naye element ko parent ke **andar last mein** chipka deta hai.

```js
let li = document.createElement("li");
li.innerHTML = "New Content";
document.querySelector("ul").appendChild(li);
```

### 3. `textContent`

Sirf text nikalta/set karta hai, **hidden text bhi dikhata hai** (chahe CSS se `display:none` ho).

```js
console.log(document.querySelector("ul").textContent);
```

### 4. `innerText`

Sirf visible text deta hai, hidden text **nahi** dikhata.

### 5. `after()`

Element ke **baad** naye node(s) insert karta hai (sibling ki tarah).

```js
let h4 = document.createElement("h4");
h4.innerText = "Heading 4";
let p = document.createElement("p");
p.innerText = "Paragraph 4";
document.querySelector("ul").after(p, h4);
```

### 6. `append()`

Parent ke andar **last mein** child add karta hai (appendChild jaisa hi, but multiple items aur text bhi le sakta hai).

```js
let listItem = document.createElement("li");
listItem.innerText = "This is the append List Item";
document.querySelector("ul").append(listItem);
```

### 7. `prepend()`

Parent ke andar **sabse pehle (start)** child add karta hai.

### 8. `insertAdjacentHTML(position, html)`

Position ke hisaab se HTML insert karta hai:

| Position      | Matlab                             |
| ------------- | ---------------------------------- |
| `beforebegin` | element se pehle                   |
| `afterbegin`  | element ke andar, sabse start mein |
| `beforeend`   | element ke andar, sabse last mein  |
| `afterend`    | element ke baad                    |

```js
document
  .querySelector("ul")
  .insertAdjacentHTML("afterend", "<li>This is the append List Item</li>");
```

### 9. `cloneNode(deep)`

Kisi node ki copy banata hai.

- `cloneNode()` ya `cloneNode(false)` → sirf element clone hoga, **andar ke children nahi**
- `cloneNode(true)` → element **aur uske saare children** bhi clone honge

### 10. `removeChild(child)`

Parent se ek specific child element hata deta hai.

```js
parentNode.removeChild(parent.firstElementChild);
parentNode.removeChild(parent.lastElementChild);
```

## Quick memory trick 🧠

Socho tum ek **grocery list (`ul`)** bana rahe ho:

- `createElement` = naya item likha
- `append` / `appendChild` = list ke end mein daala
- `prepend` = list ke start mein daala
- `after` = kisi item ke baad daala
- `cloneNode` = same item ki photocopy
- `removeChild` = list se item kaat diya

# Viva Tip

Agar puchhe **"getElementById aur getElementsByClassName mein difference?"** toh bol dena:

> "ID unique hoti hai, sirf ek element milta hai (ya `null`); class multiple elements pe lag sakti hai, toh collection milta hai (ya empty collection)."

## element.attributes

2. getAttribute() methods return the value of that attribues based on the selected Element

3. setAttribute() methods sets the attributes on selected element and accepts KEY and VALUE
  element.setAttribute("key", "value");

4. hasAttribute() tell us that weather element has attribute or not?
  element.setAttribute("key"); //Return true or False

5. removeAttribute(): removes the attribute from selected Element
  element.setAttribute("key");


## DOM EVENTS AND EVENT LISTENERS

1. What is the Event in DOM: HTML DOM events are notifications sent to JavaScript when specific actions occur in the browser like click mousedown,mouseover, load and unload
submit etc.


DOM Events allow JavaScript to add event listener or event handlers to HTML elements.

1. Event Listener: It's a special function that listens to every events that may occurs in the page Example addEventListener() Method

2. Event Handler: A function that is responsible to execute for the particular event.

3. *Event Bubbling: Event bubbling mechanism where an event triggered on a child element propagates upward through its ancestors until it reaches the root of the document.

4. *Event Capturing (Not Used): Event capturing is the phase where the event starts from the outermost ancestor of an element and travels downwards to the target element.

### events vs event
    events are actions like clk,dbclk
    event is object that is passed in event handler fxn.

## Stop Propagation, Immediate Propagation & Prevent Default: these are the methods available in event object {}

# Stop Propagation: 
The e.stopPropagation() method prevents further propagation of the current event in the capturing and
bubbling phases.

# Stop Immediate Propagation: 
The e.stopImmediatePropagation() method prevents other listeners of the same event from being called.

# Prevent Default:
 It prevents the default action that the browser would normally do for that event like page reloading while submitting form, Stop a
link (<a>) from navigating..

There are two ways to add events in DOM
1. using attribute (a). writing handler in string type OR assign a handler Function
2. using addEventListener(eventname, handlerFunction) Method.

## Mouse Events
1. click: User presses and releases a mouse button on an element
2. dblclick : User clicks twice quickly on the same element
3. mousedown: Mouse button is pushed down over an element
4. mouseup: Mouse button is released over an element
5. mousemove: Every time the mouse moves over an element
6. mouseenter: Pointer enters an element's area (does not bubble)
7. mouseleave: Pointer leaves an element's area (does not bubble)
8. mouseover: Pointer enters an element or its children (bubbles)
9. mouseout: Pointer leaves an element or its children (bubbles)
10. contextmenu: User right-clicks on an element