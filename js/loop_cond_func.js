// loop 
// 1. loop er last number koto hobay?
// 2. i er last value koto hobay?

let arr = [1,2,3,4,5,"Setu"];
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log("\n2D Array");
// 2d array
let arr2 = [
    ["Shahriar",  "Something"],
    [1, 2, 3, 4, 5]
]

console.log("\n");
//  console.log(arr2[0][0]);
// nested loop for nested array
for(let row = 0; row < arr2.length; row++) {
    for(let col = 0; col < arr2[row].length; col++) {
        console.log(arr2[row][col]);
    }
}

// language specifit loop
console.log("\n");
// for of loop
let arr3 = [1,2,3,4,5];
for(let el of arr3) {
    console.log(el);
}

console.log("\n");
// for in loop
for(let el in arr3) {
    console.log(el);
}

arr3.forEach((el) => {
    console.log(el);
})


// ===================== condition ===============
let age = 20;
if(age >= 18) {
    console.log("Your are a adult.");
} else if(age < 9) {
    console.log("Your are children");
} else {
    console.log("You are not adult.");
}

console.log("Fizz Buzz");
// FizBuzz problem
// 1, 2, if any number divide by 3 then print fizz, if by 5 Buzz el both FizzBuzz 
// sodo code
// print 1 - 100
// i % 3 == 0 print Fizz
// i % 5 == 0 print Buzz
// i % 3 == 0 && i % 5 == 0 print FizzBuzz

for(let i = 1; i <= 100; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if(i % 3 === 0) {
        console.log("Fizz");
    } else if(i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}


// date object
let date = new Date().getDay();
console.log(date, typeof date);

// single variable different value check then use switch
switch(date) {
    case 0:
        console.log("sunday");
        break
    case 1:
        console.log("Monday");
        break
    case 2:
        console.log("Tuesday");
        break
    case 3:
        console.log("Wednesday");
        break
    case 4:
        console.log("Thrusdaay");
        break
    case 5:
        console.log("Friday");
        break
    case 6:
        console.log("Saterday");
        break // stop
        // continue // skip
    default:
        console.log("Invalid");
}

// ===================== function: reusable ================
function sayHello(name) { //parameter // defination
    console.log(`Hellow World! ${name}`);
}
sayHello("Shahriar"); // argument pass // call or invocation

// if return values then it first class citizens - functions can be assigned
// to variables, passed as argument amd return from other functions
// function as a treat value or variable thats call first class citizen
function add(num1, num2) {
    return num1 + num2;
}
let result = add(1,2);
console.log(result)

let sum = add(add(1,2), add(2,3)); // it's work
console.log(sum);

// function types
// has return no parameter
// has parameter no return
// has parameter has return
// no parameter no return

// callback function - a function that is passed as an argument to other function adn is execute after some operation is completed
function sayhello() {
    console.log("Hello");
}

function callFunc(func) {
    func();
}
callFunc(sayhello); // function refrence and refrence can copy
// sayjhello() // function invoke or call

// JavaScript hoisting is the language's default behavior of moving variable and function declarations to the top of their containing scope during the compilation phase. This allows you to use functions and variables before they are formally defined in your code.
// bad
console.log(num);
var num = 10;

// good practice
// console.log(num2);
// let num2 = 5; // undifined ar ceye error deo valo

// wired js
say()
function say() {
    console.log("say");
}

// execution context environment
// memory and code execution part
// when js code execute then all variable and function first load on top of memory
// then read and execute


// function expression
let myFunc = function () { // anonymush function
    console.log("Function Expression")
}
myFunc();

// arrow fucntion
let myFunc2 = () => { // anonymush function
    console.log("Arrow Function")
}
myFunc2();