let numbers;
let operators;
let operands;

numbers.CALCULATOR = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    zero: 0,
};
operators.CALCULATOR = {
    plus: "+",
    minus: "-",
    divide: "/",
    multiply: "*",
    equals: "=",
};
operands.CALCULATOR = {
    x: Number,
    y: Number,
};
var readline = require("readline");

const readWriteInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

readWriteInput.question("Enter operation: ", (userInput) => {
    userInput = userInput.slice(" ", 3);
    console.log(userInput);
});
