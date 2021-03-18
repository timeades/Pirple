// Arrays
//Collection of data

// Array literal is preferred method
var myArray = [1, 2, 3, "banana", "telecaster", true];
console.log(myArray);
console.log(myArray.length);
console.log(myArray [5]);

var myNamesArray = new Array();
myNamesArray[0] = "Tim";
myNamesArray[1] = "Carolina";
myNamesArray[2] = "Frank";

console.log(myNamesArray);
console.log(myNamesArray.length);
console.log(myNamesArray[5]); // will give undefined as the key does not exist

var myNamesArray2 = ["Tim", "Carolina", "Frank", "John", "George", ["blue", "orange", "red", "yellow"]];
// sub arrays can be added like this or line 29
console.log(myNamesArray2);
console.log(myNamesArray2.length); // this will return 6 as the sub array is counted as 1 object
console.log(myNamesArray2[5][1]) // this should return orange
myNamesArray2.push("Tom");
console.log(myNamesArray2);
myNamesArray2.pop(); // removes last value of an array
console.log(myNamesArray2);
var lastName = myNamesArray2.pop();
console.log(lastName);
myNamesArray2.push("Tom", "Paul", "Ringo");
console.log(myNamesArray2);
myNamesArray2.push(["Pattie", "Lulu", "Hazel"]); // to put an array inside an array
console.log(myNamesArray2);
var sortedArray = myNamesArray2.sort(); // this will sort the array alphabetically as no args have been included
console.log(sortedArray);
sortedArray.reverse(); // this will sort descending
console.log(sortedArray);
var myOtherNames = ["Will", "Peaches", "Bob", "Harry", "Charles"]
console.log(myOtherNames);
var concattedArray = myNamesArray2.concat(myOtherNames); // this will concatenate my 2 arrays together
console.log(concattedArray);
var evenMoreNames = ["Peter", "Midge", "Toya"]
//as many arrays can be concatenated as you like
var concatArray = myNamesArray2.concat(evenMoreNames, myOtherNames);
console.log(concatArray);
var slicedArray = concatArray.slice(5,11); // this will create a sub array of the name between position(index) 5 and 11
console.log(slicedArray);
var joinedArray = slicedArray.join("-"); // various separators can be used
console.log(joinedArray);
