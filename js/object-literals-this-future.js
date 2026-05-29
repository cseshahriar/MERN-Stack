// object leterals, leteraly make object manualy without class
let person = {
	name: "Shahriar",
	age: 33,
	sayHello: function(name) {
		console.log(`Hello World ${name}`);
	},
	addr: {
		city: "Dhaka",
		county: "Bangladesh"
	},
	interests: ["Programming", "Traveling", "Cooking"],
	showInterest: function() {
		// this.interests.forEach(function(el) { // 
		// 	console.log(`${this.name} interested in ${el}`); // function ar modday this window or global object refer
		// })

		// this.interests.forEach(function(el) { // 
		// 	console.log(`${this.name} interested in ${el}`); // function ar modday this window or global object refer
		// }, person); // now this means person

		// this.interests.forEach(function(el) { // 
		// 	console.log(`${this.name} interested in ${el}`); // function ar modday this window or global object refer
		// }, this); // now this means person

		this.interests.forEach((el) => {  
			console.log(`${this.name} interested in ${el}`);
		});
	}
};

let person2 = {
	name: "Shahriar",
	age: 33,
	sayHello: function() {
		console.log("Hello World");
	}
};

// property
// method
console.log(person.name); 
console.log(person['name']);

console.log(person == person2); // false cause reference diff
console.log(person.sayHello("Shahriar"));
console.log(person.interests[0]);
console.log(person.showInterest());

// wired js
console.log(person.unknownVar);

person.catName = "kiki";
console.log(person.catName);


// iterable element
for(let el of person.interests) {
	console.log(el);
}

console.log("/n");
for(let el in person) {
	if(typeof person[el] === "function") {
		person[el]();
	} else {
		console.log(person[el]);
	}
}

// this keyword - refers to the current object that is executing the code

let person3 = {
	name: "Shahriar",
	age: 33,
	sayHello: function() {
		console.log(`Hello ${this.name}`);
	}
}

// global object
// Node - global object
// Browser - window object
// console.log('global object: ', global);

// this means for 
// function -> window/lobal
// method -> current object

let arr = [1,2,3,4,5];
arr.forEach(function(el) {
	console.log(el);
});

// let is block scope
// var global scope


function sayHello() {
	// function scope
	var name = "setu"; // can't access
	name = "setu"; // can access, accedital global variable
}
sayHello();

// block scope
// function scope
// global scope
// scope chaining
// iif

references:
----------
// The complete javascript course 2025 from zero to expert
// javascript understanding the weird parts
// you don't know js async & performance 6 volume set
// the hard parts of javascripts
// Master the full stack: frontend to backend by frontendmentor
// claude ai
// patern recognization
// code  with mosh
// https://codewithmosh.com/p/claude-code
// not bive coding x
// claude code full course 4 hourse build & sell 2026
