// Homework Assignment #3: Statements and Operators

const allMenAreMortal = true;
const isSocratesAMan = true;

// As everything is evaluating to ture for a happy path i could remove the '=== true' from the statements
if (allMenAreMortal === true) {
    console.log("Yes all men are mortal!");
    if (isSocratesAMan === true) {
        console.log("Socrates is a man.");
    } else {
        console.log("Socrates is not a man.");
    }
    //checking both statements are true
   if ((allMenAreMortal === true) && (isSocratesAMan === true)){
       console.log("Therefore, Socrates is mortal.")
   } else {
       // if either of the statements returned false this line would be printed
       console.log("Therefore, Socrates is immortal. Is he a God?")
   }
}
// just to separate the outputs, don't know a prettier way
console.log("------------------------------------------------------------------------")
const cake = "vanilla"
// Using the or operator
if (cake === "vanilla" || cake === "chocolate") {
    console.log("This cake is either vanilla or chocolate.");
    // is not = to chocolate
    if (cake !== "chocolate") {
        console.log("This cake is not chocolate.\nTherefore, this cake is vanilla.");
    } else {
        // if 'cake === "chocolate" these lines would be printed
        console.log("This cake is not vanilla.\nTherefore, this cake is vanilla.");
    }
}

