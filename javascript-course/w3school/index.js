function myName() {
  let myName = (document.querySelector("p").innerHTML = "My name is Ebuka");

  console.log(myName);
}

// window.alert(5 + 6);
// document.write(5 + 6);

function checkingSpelling() {
  let lastName = "Ebuka";
  let lastname = "Obi";

  document.querySelector(".name").innerHTML = lastName;
}

var person = "John Doe",
  carName = "Volvo",
  price = 200;

console.log(person);
console.log(carName);
console.log(price);

// var x = 10;
// x += 5;

// console.log(x)

let number5 = 5;
let string5 = "5";

console.log(typeof number5);
console.log(typeof string5);

if (number5 === string5) {
  console.log("The same");
} else {
  console.log("Not the same");
}

// var x = 5;
// var y = 2;
// var z = x % y;

// console.log(z)

let raiseToPower = 10 ** 2;
console.log(raiseToPower);

// var x = 10;
// x %= 5;

// console.log(x)

var cars = ["Saab", "Volvo", "BMW"];
console.log(cars);

// var x;
// var x = 5;
// var x = "John"

// console.log(x)

var y = 123e-5;
console.log(y);

function removeContent() {
  document.querySelector(".remove").innerHTML = "Removed";
}

function addContent() {
  document.querySelector(".remove").innerHTML = "Correct text";
}

var x = "John";
var y = new String("John");
var z = new Date();

console.log(typeof x);
console.log(typeof y);
console.log(z);

var str = "Apple, Banana, Kiwi";
var res = str.slice(7);

console.log(res);

str = "Please visit Microsoft!";
var n = str.replace("Microsoft", "W3Schools");

console.log(n);

var myNumber = 2;
var txt = "";
while (myNumber != Infinity) {
  // Execute until Infinity
  myNumber = myNumber * myNumber;
  txt = txt + myNumber + "<br>";
}

document.querySelector(".infinity-text").innerHTML = txt;

let check = "Egg" / 10;
console.log(isNaN(check));
console.log(typeof NaN);

let check2 = "chicken";
console.log(typeof Number(check2));

let checkParseInt = parseInt("10.33");
let checkParseFloat = parseFloat("10.33");
console.log(checkParseInt);
console.log(checkParseFloat);

function getRandomNumber() {
  let randomNumber = Math.random();

  document.querySelector(".random-number").innerHTML = randomNumber;
}

let raiseToPower2 = Math.pow(2, 3);
console.log(raiseToPower2);

let checkSquareRoot = Math.sqrt(169);
console.log(checkSquareRoot);

let checkDateType = Date();
// console.log( checkDateType)

// var d = new Date();
// var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// document.querySelector(".demo").innerHTML = days[d.getDay()];

// var d = new Date();
// console.log(d.setDate(20))

var today, someday, text;
today = new Date();
someday = new Date();
someday.setFullYear(2024, 0, 14);

if (someday > today) {
  text = "Today is before January 14, 2024.";
} else {
  text = "Today is after January 14, 2024.";
}

console.log(text);

var d = new Date();

console.log(d.getUTCDay());

var cars01 = ["Saab", "Volvo", "BMW"];
let players = ["Ronaldo", "Messi", "Mbappe", "Bruno"];
document.querySelector(".demo").innerHTML = players;
players.push("Oshimen");
console.log(players.sort());
console.log(players[0]);

let index;
let fruits = ["Banana", "Orange", "Apple", "Mango"];
let text1 = ""
for (index = 0; index < fruits.length; index++) {
  text1 += fruits[index];
}

console.log(text1);


let point = []
console.log(Array.isArray(point))


const clubs = ["Man utd", "Chelsea", "FC Barcelona", "Arsenal"]
// clubs.pop()
// clubs.push("Real Madrid")
// clubs.shift()
// clubs.unshift("PSG")
// clubs[clubs.length] = "PSG"
delete clubs[1]
console.log(clubs)
