// Create basic functions (addition, substraction, multiplication, division)
// ---------------------------------------------------------------- ------
let x = parseInt(prompt("Enter your number here:"));
let y = parseInt(prompt("Enter your second number here:"));
let operator = prompt("Enter your operator (+,*,-,/) here:");
// console.log(x);
// console.log(y);
// console.log(operator);

const addition = (x, y) => {let addNum = (x + y);return addNum;}
// console.log("The addition result is: ", addition(5,6))

const substraction = (x, y) => { let subSt = (x - y); return subSt;}
// console.log("The substraction result is: ", substraction(5,2));

const multiplier = (x, y) => { let multiPly = (x * y); return multiPly;}
// console.log("The multiplying result is: ", multiplier(5,2));

const division = (x,y) => {let divideVal = (x / y);
    if (divideVal == "Infinity") {
        return alert("Error: division");
    } else return divideVal;
}
// console.log("The division result is: ", division(5,2));

// b. operate()
let operate = (operator, x, y) => {
    switch (operator) {
        case "+":
            // console.log("passing switch +");
            console.log("The addition result is", addition(x, y));
            break;
        case "-":
            // console.log("passing switch -");
            console.log("The substraction result is: ", substraction(x, y));
            break;
        case "*":
            // console.log("passing switch *");
            console.log("The multiplying result is: ", multiplier(x, y));
            break;
        case "/":
            // console.log("passing switch /");
            console.log("The division result is: ", division(x, y));
            break;
        default:
            alert("You didn't enter the correct entries");
    }
}
operate(operator,x,y);