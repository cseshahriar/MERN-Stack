// History: JavaScript was created by Brendan Eich in 1995 for the Netscape browser and later standardized as ECMAScript. It has evolved significantly, becoming the most widely used programming language on GitHub as of 2025, with key milestones including the introduction of frameworks like React and Node.js.
// compiler: whole program at a time execute
// interpreter: line by line execure
// JIT - just in time compiler
// js run in browse engine - js engine - v8(google), spide monky(mozila), chakra(microsoft)
// Javascript is a single threaded, no-blocking, asynchronous language
// ECMAScript 2015, also known as ES6, is a major update to the JavaScript language that introduced new features such as let and const for variable declarations, arrow functions, classes, and promises. This version was ratified in June 2015 and significantly improved the language's capabilities and usability.
// nodejs - js run anywhere 
// Most important currency is Data
// Programmer work with data: number, text, image, video 

// Variable: containing block keep data
// strongly type and lossly type language
var name = "Shahriar"; // String
var snake_case = "Shahriar"; // String
var camelCase = "Shahriar"; // String
// keyword: let, var, const
// keyword identifier = value
// requment: let
// le, const block scope, var func scope
console.log(name);

console.log("\n");
// Data type: primitive and object data type
// Primitive data type: String, Number, Boolean, Null, Undefined, Symbol 
let fullName; // init and default asign undefined
fullName = "Shahriar Hosen"; // Asignment
console.log(fullName, typeof fullName);

let num = 20 // 20, 20.0 all are number, 64bit
console.log(num, typeof num);

let isActive = true;

// truthy and falsy value
// In JavaScript, truthy values are those that evaluate to true in a Boolean context, while falsy values evaluate to false. The falsy values include false, 0, "" (empty string), null, undefined, NaN, and document.all, while all other values are considered truthy.

let emptyValue = null;
console.log(typeof emptyValue); // null=object js wrong concept
// null means nothing, undefined is solid value

console.log("\n");
// Object data: Array, Functions, Objects

// type coecion / type casting
// implicite type conversion
// explicit type conversion
// conversion only: String, Number, Boolean

let number = 20;
let strNum = "number";
console.log(typeof number); // num
console.log(typeof strNum); // str

let num1 = '10'; // string
let num2 = 20;
console.log(num1 * num2, typeof num1 * num2); // 200

// number to str type conversion
let strNumber = String(number);
console.log(strNumber);
console.log(typeof strNumber);

let num3 = '20';
let strNum4 = Number(num3);
console.log(strNum4, typeof strNum4); //20, number

let num5 = 10;
let bool = Boolean(number);
console.log(bool); // true

// Falsy values: 0, '', null, undfined, NaN, false, -0, 0n(big int zero)
// Truthy values: all values, except falsy values

// https://www.freecodecamp.org/news/coercion-and-type-conversion-in-javascript/
// https://www.w3schools.com/js/default.asp
// https://eloquentjavascript.net/
// https://with.zonayed.me/js/
