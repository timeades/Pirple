/*
What are the differences between let, const and var:

To declare a variable in Javascript we can use var, let or const. They may be needed for specific situations depending on what your
application calls for and to help to not run into error in more complex code bases.

Const:
const is block scoped which means it can only be used in the block of code it was initially written in and it's value cannot be changed
later on in the code and trying to change it will throw an error and the linter would also indicate an error. Using const to declare a variable is
a good idea if you need to keep a value constant.
 See example 1 below

Let:
Let is similar to const because it also works in block scope but it is also similar to var as it will let you change is value but won't let
you declare the same variable twice see example 2 & 3. Let is a good choice if you need a value to change, maybe for a game score,
but not a good idea if the value needs to remain constant.

Var:
As I said before var and let are similar as they will both let you change a value later in the code but they differ in their scope.
Where as let deals with block scope var has global scope so a var can be used again anywhere in your code unless it's been declared inside a function.
Because the variable can be declared many times with no errors being thrown it's safer to use let and const
see example 4

Hoisting:
This is the default behaviour of moving all declarations to the top of the current scope. With const & let this means it will move it to the top of the block
but they are not initialized. This means that the block of code is aware of the variable but it can't be used until it is declared, therefore it is good practice to declare all variables at the beginning of every scope
*/

//example 1
const myAge = 25;
myAge = 50;

console.log(myAge); // This will throw a "TypeError: Assignment to constant variable." as the value cannot be reassigned

//example 2
let myNewAge = 25;
myNewAge = 50;

console.log(myNewAge); // This will print 50

//example 3
let myNewAgeAgain = 25;
let myNewAgeAgain = 50;

console.log(myNewAgeAgain); // This will throw the syntax error "SyntaxError: Identifier 'myAge' has already been declared"

//example 4
var ageAgain = 25;
var ageAgain = 50;

console.log(ageAgain) // This will print 50, no syntax error will be thrown like with let
