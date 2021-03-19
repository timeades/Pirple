// Operators listed here https://www.w3schools.com/js/js_operators.asp
/*
== 	equal to
=== equal value and equal type
!= 	not equal
!== not equal value or not equal type
> 	greater than
< 	less than
>= 	greater than or equal to
<= 	less than or equal to
? 	ternary operator
*/

const myFirstNumber = 123;
const mySecondNumber = 120;

if (myFirstNumber === mySecondNumber) {
    console.log("Hi there!");
} else {
    console.log("Not the same!");
}

const bankAccountBalance = 124;
const costOfItem = 123;
const tax = 0.50;

if (bankAccountBalance !== costOfItem + tax) {
    console.log("I am running!");
}

console.log(bankAccountBalance !== costOfItem);
