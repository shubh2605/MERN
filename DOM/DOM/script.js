// //1. create element --------------------------------

// let ele = document.createElement("li");
// ele.innerText = "LIST-5 - appended";
// console.log(ele);

// //2. append child ------------------------------

// let list = document.getElementById("ul1");
// list.appendChild(ele); //List 5 got appended

// //----- practice question to append through array -----
// const fruit_name = ["Apple", "Banana", "Grapes", "Guava", "Mango"];

// let add = document.getElementById("fruit");

// fruit_name.forEach((fruit) => {
//   let list_item = document.createElement("li");
//   list_item.textContent = fruit;

//   add.appendChild(list_item);
// });

// //3. before begin  -----------------------------

// //----- through JS -----
// // const before_begin = document.getElementById('parent');
// // before_begin.insertAdjacentHTML('beforebegin', '<p>this is added </strong> before begin</strong></p>');

// //----- through DOM Manipulation -----
// const add_ele = document.getElementById("parent");
// const added_header = document.createElement("h2");
// added_header.textContent = 'this is added as "before begin"';
// add_ele.before(added_header); //to add at last just change 'before' to 'after'

// // also, after begin = prepend
// //       before end = append

// //4. Parent-child relation ------------------------------

// //-----remove child -----
// let remove_list = document.getElementById("parent");
// let lastChild = remove_list.lastElementChild; //this will remove the last list from the original
// // if we add ".previousElementSibling" then this will remove the last second element
// remove_list.removeChild(lastChild);

// //----- clone child -----
// let clone_child = document.getElementById("parent");
// let clone_item = list.lastElementChild;
// let cloned = clone_item.cloneNode(true);
// clone_child.append(cloned);

// //5. Insert before -------------------------------

// let insert_item = document.getElementById("parent");
// let p = input_item.parentNode;
// let new_item = document.createElement("li");
// new_item.textContent = 'Done using "Insert Before!"';

// insert_item.insertBefore(new_item, first_item);

// //6. attribute --------------------------------

// let input_item = document.getElementById("input_text");

// let get_id = input_item.getAttribute("id");
// let get_val = input_item.getAttribute("value");

// console.log(get_id, ",", get_val);

// const quotes = [
//   {
//     quote: "The best way to get started is to quit talking and begin doing.",
//     createdBy: "Walt Disney",
//   },
//   {
//     quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
//     createdBy: "Winston Churchill",
//   },
//   {
//     quote: "Don't watch the clock; do what it does. Keep going.",
//     createdBy: "Sam Levenson",
//   },
//   {
//     quote: "Dream big and dare to fail.",
//     createdBy: "Norman Vaughan",
//   },
//   {
//     quote: "The future depends on what you do today.",
//     createdBy: "Mahatma Gandhi",
//   },
//   {
//     quote: "It always seems impossible until it's done.",
//     createdBy: "Nelson Mandela",
//   },
//   {
//     quote: "Believe you can and you're halfway there.",
//     createdBy: "Theodore Roosevelt",
//   },
//   {
//     quote: "Do one thing every day that scares you.",
//     createdBy: "Eleanor Roosevelt",
//   },
//   {
//     quote: "Your time is limited, so don't waste it living someone else's life.",
//     createdBy: "Steve Jobs",
//   },
//   {
//     quote: "Opportunities don't happen. You create them.",
//     createdBy: "Chris Grosser",
//   },
//   {
//     quote: "The only limit to our realization of tomorrow is our doubts of today.",
//     createdBy: "Franklin D. Roosevelt",
//   },
//   {
//     quote: "Hardships often prepare ordinary people for an extraordinary destiny.",
//     createdBy: "C.S. Lewis",
//   },
//   {
//     quote: "If you can dream it, you can do it.",
//     createdBy: "Walt Disney",
//   },
//   {
//     quote: "The secret of getting ahead is getting started.",
//     createdBy: "Mark Twain",
//   },
//   {
//     quote: "Everything you've ever wanted is on the other side of fear.",
//     createdBy: "George Addair",
//   },
//   {
//     quote: "Small steps every day lead to big results.",
//     createdBy: "Unknown",
//   },
//   {
//     quote: "Discipline is choosing between what you want now and what you want most.",
//     createdBy: "Abraham Lincoln (attributed)",
//   },
//   {
//     quote: "Great things never come from comfort zones.",
//     createdBy: "Unknown",
//   },
//   {
//     quote: "Don't limit your challenges. Challenge your limits.",
//     createdBy: "Jerry Dunn",
//   },
//   {
//     quote: "Success usually comes to those who are too busy to be looking for it.",
//     createdBy: "Henry David Thoreau",
//   },
// ];

// const button = document.getElementById("getQuote");
// const quote = document.getElementById("quote");
// const author = document.getElementById("author");

// button.addEventListener("click", function() {
//     const randomIndex = Math.floor(Math.random() * quotes.length);
//     const selectedQuotes = quotes[randomIndex];
    
//     // Inject data securely into the DOM elements
//     quote.textContent = `"${selectedQuotes.quote}"`;
//     author.textContent = `- ${selectedQuotes.createdBy}`;
// });
