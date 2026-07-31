// function Dog(name, bark, age, weight) {
//   this.name = name;
//   this.bark = bark;
//   this.age = age;
//   this.weight = weight;


//   this.bite = function () {
//     console.log("Chomp"); 
//   };
//   this.makeSound = function () {
//     console.log("Woof!"); 
//   };
// }

// const myDog = new Dog("preet", "humanform", 21, 99);


// console.log(myDog.name); 
// console.log(myDog.weight);
// myDog.bite();
// myDog.makeSound();

function Student(name,enro,phone,email,address,course,year){
    this.name=name;
    this.enro=enro;
    this.phone=phone;
    this.email=email;
    this.address=address;
    this.course=function(){
        console.log("BTech");
    };
    this.year=function(){
        console.log("3");
    };

}
const myStudent=new Student("Shubham",2403051050886,8393838474,"singh@gmail.com","Bihar");

console.log(myStudent.name);
console.log(myStudent.enro);
console.log(myStudent.phone);
console.log(myStudent.email);
myStudent.course();
myStudent.year();

const myStudent2=new Student("Singh",2403051050855,8393838343,"shubahm@gmail.com","UP");

console.log(myStudent2.name);
console.log(myStudent2.enro);
console.log(myStudent2.phone);
console.log(myStudent2.email);
myStudent2.course();
myStudent2.year();