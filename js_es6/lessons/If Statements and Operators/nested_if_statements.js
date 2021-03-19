const bankAccountBalance = 124;
const costOfItem = 123;
const tax = 0.50;

if (bankAccountBalance >= costOfItem) {
    console.log("Balance ok! Checking tax");
    if (tax >= 0.50) {
        console.log("Tax amount too high!");
    }
}

