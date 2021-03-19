function sayHi() {
    var shouldSayHi = true;
    if (shouldSayHi === true) {
        var myName = "Tim";
        console.log("Hi " + myName);
    }
}
 sayHi()

function sayHiAgain() {
    let shouldSayHi = true;
    let myName;

    if (shouldSayHi === true) {
        myName = "Tim";
        console.log(shouldSayHi);
        console.log("Hi " + myName);
    }
    else {
        myName = "John";
        console.log("Hi " + myName);
    }
}
sayHiAgain()
