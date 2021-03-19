// Functions
/*
A function is a Javascript procedure - a set of statements that perform a task or calculates a value. [...]
*/
const myName = "Tim";

function sayHi() {                      //declared
    console.log("Say hi " + myName)
}
function sayBye() {                      //declared
    console.log("Say bye " + myName)
}
sayHi()  // invoked
sayBye()

function sayHello(userName, lastName) {                      //adding parameters to the function
    console.log("Say hi " + userName + " " + lastName)
}

sayHello("Tim", "Eades") // passing a value to the parameter username

const frank = "Frank";
const bill = "Bill";

sayHello(frank)

function numberDoubler(num) {
    console.log(num * 2);
}
numberDoubler(10)

function numberDouble(num) {
    return num * 10;
}
console.log(numberDouble(10))

function numberDouble2(num) {
    const doubledValue = num * 2;
    return doubledValue;
}
const numTwoDoubled = numberDouble2(2);
const numFiveDoubled = numberDouble2(5);

console.log(numTwoDoubled);
console.log(numFiveDoubled);
console.log(numTwoDoubled + numFiveDoubled);

function numAdder(num1, num2) {
    return num1 + num2;
}
console.log(numAdder(numTwoDoubled, numFiveDoubled));
//-----------------------------------------------------------------------------------------
const squaredNumber = function(num) {
    return num * num;
}
const numberAdder = function (squarer, num2) {
    const squared = squarer(4)
    return squared + num2;
}
console.log(numberAdder(squaredNumber, 10));
//------------------------------------------------------------------------------------------

let myNumber = 100;

function addTwenty(num) {
    return num + 20;
}
console.log(addTwenty(myNumber));
console.log(myNumber);
//---------------------------------------------------------------------------------------------

const myInfo = {name: "Tim", age: 54 };
function changeAgeTo100(myObj) {
    myObj.age = 100;
}
console.log(myInfo);
changeAgeTo100(myInfo);
console.log(myInfo);
//-----------------------------------------------------------------------------------------------

const myNumbers = [1, 2, 3, 4, 5,];

function addToArray(myArr) {
    myArr.push(6);
}
console.log(myNumbers);
addToArray(myNumbers);
console.log(myNumbers);
