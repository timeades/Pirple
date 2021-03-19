// In this iteration the log credit card will show as there is not enough cash in the back but the hasCreditCard
// and hasReached

const bankAccountBalance = 1;
const costOfItem = 123;
const hasCreditCard = true;
const hasReachedCreditLimit = false;
const hasCreditRating = false;

if (bankAccountBalance >= costOfItem) {
    console.log("Congrats! You can pay for this item with cash!");
} else if (hasCreditCard && !hasReachedCreditLimit) { //not the use of the !(not) operator to set statements to true
    console.log("You can use your credit card!");
} else if (!hasCreditRating) {
    console.log("You can purchase the item with Klama!");
} else {
    console.log("Sorry, you can not purchase this item!");
}
