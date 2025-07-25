// Exercise1
let firstName = "Oppah";
console.log(firstName);

// Exercise2
 let age = 21;
let likesCoding = true;
let favoriteColor = "Blue";
console.log(age)
console.log(likesCoding)
console.log(favoriteColor);

// SECTION 2: OPERATORS & EXPRESSIONS
// Exercise3

let x = 10;
let y = 3;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);

// Exercise4
let result = (5 + 3) * 2 - 4;
console.log(result);  // Output: 12

// Exercise5
console.log(10 > 5);     // true
console.log(7 == "7");   // true
console.log(7 === "7");  // false
console.log(15 != 20);   // true
// Section 3: CONDITIONALS STATEMENTS
// Exercise6
let number = -5;
if (number > 0) {
    console.log("Positive");
} else if (number < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}
// Exercise7
let userAge = 17;
if (userAge >= 18) {
    console.log("You’re an adult.");
} else {
    console.log("You’re a minor.");
}

// Exercise8
let num = 4;
if (num % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}
// Exercise9
// Exercise 9
function sayHello() {
    console.log("Hello, world!");
}
sayHello();  // Output: Hello, world!
// Exercise10
function greet(name) {
    console.log("Hello, " + name + "!");
}
greet("Precious");  // Output: Hello, Precious!
// Exercise11

function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(5, 6));  // Output: 11
// Exercise12
function convertToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
console.log(convertToFahrenheit(25));  // 77
// Exercise13 Arrow Function
const multiply = (x, y) => x * y;
console.log(multiply(4, 5));  // Output: 20
// Challenge Question

// Challenge 1
function isEligibleToVote(age) {
    return age >= 18;
}
console.log(isEligibleToVote(20));  // true

// Challenge 2
function getGrade(score) {
    if (score >= 90) return "A";
    else if (score >= 80) return "B";
    else if (score >= 70) return "C";
    else return "F";
}
console.log(getGrade(85));  // B
// IM DONE WITH THE WORK



