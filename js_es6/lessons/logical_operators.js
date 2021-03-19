
// Here all 3 statements have to be true for a positive outcome using the && (and) operator
const bankAccountBalance = 124;
const costOfItem = 123;
const tax = 0.30;
const canSpendMoney = true;
//  |---------statement 1----------|    |-----statement 2-----|   |--statement 3--|
if (bankAccountBalance >= costOfItem && canSpendMoney === true && costOfItem < 150) {
    console.log("You can purchase this item! - block A");
}

// or operator || so one side or the other can evaluate to true or false
// So first statement on it's own would return false the || (or) operator evaluates to true so block runs and positive result
// adding statement 3 with the && (and) operator shows how logical operators can be mixed
// if credit limit is less than costOfItem block runs but no output as condition of 2 & 3 is false
const bankAccountBalanceA = 1;
const costOfItemA = 123;
const hasCreditCard = true;
const creditLimit = 200;
//  |------------statement 1---------|    |----statement 2-----|    |--------statement 3 -----|
if (bankAccountBalanceA >= costOfItemA || hasCreditCard === true && creditLimit >= costOfItemA) {
    console.log("You can purchase this item! - block B");
}

//Not operator '!'
// if a value is false and the not operator is called on it it will evaluate to true and visa versa
const bankAccountBalanceB = 1;
const costOfItemB = 123;
const hasCreditCardB = true;
const hasReachedCreditLimit = false;

if ((bankAccountBalanceB >= costOfItemB) || (hasCreditCardB && !hasReachedCreditLimit)) {
    console.log("You can purchase this item! - block C");
}
