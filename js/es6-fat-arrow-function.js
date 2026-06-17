console.log("Hello World!");

// simple function
function simpleFunction() {
    return 10;
}

// fat arrow function
const fatArrowFunction = () => {
    return 10;
}
let result = fatArrowFunction();
console.log(result);

// make more simple fat arrow function
const fatArrowFunction2 = () => 10;
let result2 = fatArrowFunction();
console.log(result2);

// parameter
// const fatArrowFunction3 = (n) => n;
const fatArrowFunction3 = n => n;
let result3 = fatArrowFunction3(5);
console.log(result3);

const fatArrowFunction4 = (n, m) => n + m;
let result4 = fatArrowFunction3((4, 5));
console.log(result4);

// object and this key word problem with simple function
// simple function polute this
const javasript = {
    name: 'Shahriar',
    libraries: ["React", "Angular", "Vue"],
    printLibraries: function() { // func also object
        console.log(this); // this means javasript object
        this.libraries.forEach(function(item) {
            console.log(this); // this means window
            console.log(`${this.name} loves ${item}`); // this modified for call from javascript object
            // this mane bojte hole bojte home ke call korlo
        })
    }

}
javasript.printLibraries();

console.log("\n\nArrow function this not issue\n\n");
// arrow function can't polute arrow function
// object and this key word problem with simple function
const javasript2 = {
    name: 'Shahriar',
    libraries: ["React", "Angular", "Vue"],
    printLibraries: function() { // func also object
        console.log(this); // this means javasript object
        this.libraries.forEach((item) => {
            console.log(this); // this means window
            console.log(`${this.name} loves ${item}`); // this modified for call from javascript object
            // this mane bojte hole bojte home ke call korlo
        })
    }

}
javasript2.printLibraries();