debugger;
console.log('Global Execution Context Start');

var globalVariable ='I am a global Variable';

console.log(globalVariable);
console.log(greet());
greet();

console.log('Global Execution Context End');

// Function Declaration
function greet() {
    var name = 'Hastag';
    console.log('Inside Global Function');
}