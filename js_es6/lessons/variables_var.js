var myName = "Tim";
var myLastName = "Eades";
var myArray = [1, 2, 3];
var myObject = {name: "Tim", age: 55};

console.log(myName);
console.log(typeof myName);
console.log(myLastName);
console.log(myArray);
console.log(myObject);

function sayHi() {
    console.log("Hi " + myName);
}
sayHi();

var count = 1;

function increase() {
        count += 1;
        console.log(count);
}
increase()
increase()
increase()

