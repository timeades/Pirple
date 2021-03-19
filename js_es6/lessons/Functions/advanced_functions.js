// Pre ES6 way of writing a function expression
var sayHi = function() {
    console.log("Hi");
}
sayHi()

// The ES6 way - arrow functions

var sayHey = () => {
    console.log("Hey, I'm using an arrow function");
}
sayHey()
//-------------------------------------------------------------------
const multiplyer = (num1, num2) => {
    return num1 * num2;
}
console.log(multiplyer(5, 10));
//--------------------------------------------------------------------

const users = [
    {name: "Tim", age: 54},
    {name: "Billy-Bob", age:38 },
    {name: "Frankie boy", age: 46}
];
const mapUserNames = (myArr) => {
    const userNameList = myArr.map((user) => {
        return user.name;
    });
    return userNameList;
}
console.log("simplified 1")
console.log(mapUserNames(users));

// Lets simplify the code above even more with ES6
const usersA = [
    {name: "Tim", age: 54},
    {name: "Billy-Bob", age:38 },
    {name: "Frankie boy", age: 46}
];
const mapUserNamesA = (myArr) => myArr.map((user) => {
        return user.name;
    });
console.log("more simplified")
console.log(mapUserNamesA(users));
// Simplify it even more
const usersB = [
    {name: "Tim", age: 54},
    {name: "Billy-Bob", age:38 },
    {name: "Frankie boy", age: 46}
];
const mapUserNamesB = (myArr) =>
    myArr.map((user) => user.name);

console.log("Even more simplified")
console.log(mapUserNamesB(users));
//--------------------------------------------------------------------
//Built in function
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const filteredNumbers = numbers.filter(function(num) {
    //return num === 5; //to return just the number 5 from the array
    //return num % 2 === 0; // to return all even numbers % 2 divides the numbers by 2 and any that are = 0 (wholly divisible) are returned
    return num % 2 !== 0; // This will return odd numbers as the not = to 0 has been used
});
console.log(filteredNumbers);

//can be simplified
const numbersA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const filteredNumbersA = numbers.filter((num) =>
    //num === 5 //to return just the number 5 from the array
    //num % 2 === 0 // to return all even numbers % 2 divides the numbers by 2 and any that are = 0 (wholly divisible) are returned
    num % 2 !== 0 // This will return odd numbers as the not = to 0 has been used
);
console.log("simplified")
console.log(filteredNumbersA);

// Another example
const numbersC = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const doubledNumbers = (num) => {
    const numberContainer = [];
    num.forEach((n) => {
        const doubled = n * 2
        numberContainer.push(doubled);
    })
    return numberContainer;
}
console.log(doubledNumbers(numbersC));
//--------------------------------------------------------------------------------------
//Simple number multiplier the old way
function numberMultiplier(x, y) {
    x = x || 5; // so if we don't give our args a value we will pass a value for x & y
    y = y || 10;
    return x * y;
}
console.log(numberMultiplier()); // even if we don't pass a value to the args we have already given x & y values above
console.log(numberMultiplier(7)); // again only passing a value for x the code reads the default for y
console.log(numberMultiplier(10, 10));
// The ES6 way
function numberMultiplierA(x = 5, y = 10) {
    return x * y;
}
console.log(numberMultiplierA()); // even if we don't pass a value to the args we have already given x & y values above
console.log(numberMultiplierA(7)); // again only passing a value for x the code reads the default for y
console.log(numberMultiplierA(10, 10));

//string splitter
const initialString = "How are you";

function stringSplitter(str=initialString) {
    return str.split(" ");
}
console.log(stringSplitter());
console.log(stringSplitter("Hi there!"));

const bankAccount = {
    canSpendMoney: true,
    balance: 100
}
function purchaseItem(price, acct=bankAccount) {
    if (acct.canSpendMoney) {
        acct.balance -= price;
        if (acct.balance <= 0) {
            acct.canSpendMoney = false;
        }
        return true;
    } else {
        return false;
    }
}
console.log(purchaseItem(99)); // should return true
//console.log(purchaseItem(10)); // should return false because account is 0
console.log(purchaseItem(10, {canSpendMoney: true, balance: 40})); // should return false because account is 0
//--------------------------------------------------------------------------

function logAllArguments(x, y, z) {
    console.log(arguments);// could use arg [] to return specific entry
}
logAllArguments(10, 5, 1, 3, 6)
//ES6 way
function logAllArgumentsA(x, ...nums) {
    console.log(nums.sort());
    console.log(nums.length);
}
logAllArgumentsA(10, 5, 1, 3, 6);

function Dog(years, breed) {
    this.age = years;
    this.type = breed;
    setInterval(() => {
        this.age += 1;
        //console.log(this);
    }, 5000)
}
const spike = new Dog(3, "Heinze");
const fido = new Dog(5, "Poodle");
console.log(spike);
console.log(fido);

/*
// clever but not great styling
const multiplier = (x, y) => x * y; // with only 1 expression you can drop the return as it's implicit
console.log(multiplier(5, 5));
             //|   |
const squarer = num => num * num; // with only on arg you can drop the brackets
console.log(squarer(10));
*/
