// --------------------------------------------------------------------------
// ------------------------ CALCULATOR SET UP -------------------------------
// --------------------------------------------------------------------------

let disNum = "";  // current display value
let prDisNum = "";  // previous display value
let operator = "";

const numBtn = document.querySelectorAll('.theNum'); 
const mathOpr = document.querySelectorAll('.theMath'); 

const decimal = document.querySelectorAll('.theDecimal');
decimal.forEach(td => td.addEventListener('click',()=> {addDecimal();}));

const equal = document.querySelectorAll('.theEqual');
equal.forEach(td => td.addEventListener('click', () => calculate()));

const displayResults = document.querySelector('.displayCurrent'); 
const previousDisplayR = document.querySelector('.previousDisplay');

const clearCell = document.querySelector('.clearBtn');
clearCell.addEventListener('click',clearCalc);

const backSpace = document.querySelector('.backSBtn');
[backSpace].forEach(td => td.addEventListener('click', () => bcSpace()));

// Handle the table data (td) with the numbers
numBtn.forEach(td => td.addEventListener('click',()=> {
    cellNum = td.textContent;
    displayResults.textContent = cellNum;
    // console.log(cellNum);
    // console.log(typeof(cellNum));
    handleNum (cellNum);
}));
function handleNum (cellNum) {
    switch (true) {
        case prDisNum !== "" && disNum !== "" && operator === "":
            prDisNum = "";
            displayResults.textContent = disNum;
        break;
    }

    switch (true) {
        case disNum.length <= 11:
            disNum += cellNum;
            displayResults.textContent = disNum;
        break;
    }
}

// Handle the table data (td) with the operators
mathOpr.forEach(td => td.addEventListener('click',()=> {
    cellOper = td.textContent;
    displayResults.textContent = cellOper;
    // console.log("celloperator",cellOper);
    handleOper (cellOper);
}));
handleOper = (cellOper) => {
    switch (true) {
        case prDisNum === "":
            prDisNum = disNum;
            operCheck(cellOper);
        break;
        case disNum === "":
            operCheck(cellOper);
        break;
        default:
            calculate();
            operator = cellOper;
            displayResults.textContent = "";
            previousDisplayR.textContent = prDisNum + " " + operator;
    }
}

// Check the operator
operCheck = (txt) => {
    operator = txt;
    previousDisplayR.textContent = prDisNum + " " + operator;
    displayResults.textContent = "0";
    disNum = "";
}

// Calculate
calculate = () => {
    prDisNum = Number(prDisNum);
    disNum = Number(disNum);

    if (operator === "+"){
        prDisNum += disNum;
    } else if (operator === "-"){
        prDisNum -= disNum;
    } else if (operator === "*"){
        prDisNum *= disNum;
    } else if (operator === "/"){
        if (disNum === 0){
            alert("Error");
        }
        prDisNum /= disNum;
    }
    prDisNum = roundTheNum(prDisNum);
    prDisNum = prDisNum.toString();
    results();
}

// Round the number
const roundTheNum = (num) => {
    return Math.round(num*100)/100;
}

//  The result of the caclulator function
const results = () => {
    previousDisplayR.textContent = "";
    displayResults.textContent = prDisNum;
    operator = "";
    disNum = "";
};

// The "C"- clear table data setting
function clearCalc() {
    disNum ="";
    prDisNum = "";
    operator = "";
    displayResults.textContent = "0";
    previousDisplayR.textContent = "";
};

//  Handling the decimals
const addDecimal = () => {
    if(!disNum.includes('.')){
        disNum += '.';
        displayResults.textContent =disNum;
    }
};

// Backspace handling
const bcSpace = () => {
    if (disNum !== "") {
        disNum = disNum.slice(0, -1);
        console.log(disNum);
        displayResults.textContent = disNum;
    }
};



