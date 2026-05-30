
// 'use strict';

// Most important things in programming is : Array, Object, Function

// array: object
let arr = [1,2,3,4,5]; // 0 to 4

// insert last
// arr[5] = 6;
arr[arr.length] = 6;  // array last insert
console.log(arr);

// array methods
arr.push(7);
console.log(arr);

// insert first
arr.unshift(0);
console.log(arr);

// wired js
arr[12] = 12;
console.log(arr); // 4 empty items: undefined
console.log(arr[8]); // 

// ====================== for loop for countable arr ====================
// stat zero, step 1, stop arr.length
for(let i = 0; i < arr.length; i++) { // let is block scope
	console.log(i);
}
// console.log(i); // can't access
console.log('\n');


for(j=0; j <= 7; j++) {
	console.log(j);
}
console.log(j); // can access
// recale
// w3 schools array methods
// dry

num = 10; // wierd js
console.log(num);

// =================== while loop use when not countable elements ============
console.log("\n");

let k = 1;
while(k <= 10) {
	console.log(k);
	k++;
}

console.log("\n");
let m = 1;
while(m--) { // post decrement
	console.log(m);
}
console.log(m);

// for in 
// for off