console.log("Hello, World!");
console.log("Test");

//  Variables
console.log("Variables");

/*
  Declaring a variable:
  1. var 2. let 3. const
*/

let varialeName = "Welcome to variables";

varialeName = "Hello!";
console.log(varialeName);

const name = "John";
console.log(name);

// Data Type

/* 
  Primitive Data Types:
  - Strings  ---- "Hello!"
  - Numbers  --- 2, 3, 4
  - Booleans  --- true or false
  - Null --- null
  - Undefined  --- undefined
  - Symbol 

  Complex Data Type:
  - Objects

*/

// String
const exampleString = "This is a string";
console.log(exampleString);

// Number
const wholeNumber = 5;
const decimalNumber = 0.5;

console.log(wholeNumber);
console.log(decimalNumber);

// Booleans

/* 

  true - yes, correct, 1
  false - no, incorrect, 0

*/

const isCool = true;

if (isCool) {
  console.log("Hi man, you're cool");
} else {
  console.log("Oh, hi...");
}

const age = 20;

console.log(age > 18);

// Null

let empty = null;

empty = 20;
console.log(empty);

// Undefined

let x;
console.log(x);

// Objects

const person = {
  name: "John",
  age: 25,
};

console.log(person);

// Dot notation
console.log(person.name);

// Array

const arr = [1, 2, 3, 4];
console.log(arr);

const date = new Date();
console.log(date);

// Statically typed

let message = "Hello World!";
console.log(message);

message = true;

console.log(message);

// Note: JavaScript is dynamically typed

// Note: Comparison Operators ==> true/false

const a = 5;
const b = 10;

console.log(a >= b);
console.log(a < b);

console.log(a == b);

console.log(a != b);

console.log(a === b);
console.log(a !== b);

// Logical Operators
// AND  &&  ==> Check if all operands are true ==> True

console.log(true && false); // false
console.log(true && false && true); // false
console.log(false && false); // false
console.log(true && true); // true

// OR  || ==> Check if at least one of the operand is true ==> true

console.log(true || false); // true
console.log(false || false); // false

// NOT !

console.log(!true); // false
console.log(!false); // true

// IF statement

const allowedAge = 16;

if (allowedAge > 18) {
  console.log("You may enter!");
} else if (allowedAge === 18) {
  console.log("You just turned 18, welcome!");
} else {
  console.log("Grow up!");
}

// The "while" loop
console.log("WHILE Loop");

let i = 0;

while (i < 10) {
  console.log(i);
  i++;
}

// The "for"  loop
console.log("FOR Loop");

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// Functions

/* 
   A function is a block of code that is designed to perform a particular task.
*/

// Function Declaration (defining a function)

/*
function square(number) {
  return number * number;
}
  */

// Function Call (calling/invoking/executing a function)

/*
const result = square(2);

console.log(result);
*/

function displayName() {
  const name = document.querySelector("#js-input");
  const value = name.value;

  if (value) {
    alert(`Welcom ${value}!`);
  }
}

// An arrow function

const nameOfTheFunction = (params) => {
  // Statements
};

function sayHi(name) {
  console.log(`Hi, ${name}`);
}

sayHi("Ebuka");

function add(a, b) {
  return a + b;
}

const sum = add(2, 2);

console.log(sum);

// Arrow Function
const square = (number) => {
  return number * number;
};

// OR

const square1 = (number) => number * number;

const result = square(5);
const result1 = square1(6);

console.log(result);
console.log(result1);
