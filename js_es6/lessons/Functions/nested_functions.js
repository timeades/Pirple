
function squareAndMultiply(num1, num2) {

    function squarer(x) {
        return x * x;
    }

    function multiplyBy10(y) {
        return y * 10;
    }

    return squarer(num1) * multiplyBy10(num2);
}

console.log(squareAndMultiply(4, 4));

const first = squareAndMultiply(4, 4);
const second = squareAndMultiply(10, 2);
const third = squareAndMultiply(4, 200);

console.log(first);
console.log(second);
console.log(third);

//---------------------------------------------------------------------------

function personFormatter(firstName, lastName, age) {
    // Concatenates strings into one string (first & last name)
    function formatNames(arg1, arg2) {
        return arg1 + " " + arg2;
    }
    // Formats data into an object, with an age value
    function dataFormatter(fullName, num) {
        const formattedData = {
            name: fullName,
            age: num
        }
        return formattedData;
    }
    const formattedName = formatNames(firstName, lastName);
    return dataFormatter(formattedName, age);
}

console.log(personFormatter("Tim", "Eades", 54));
