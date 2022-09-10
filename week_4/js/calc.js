// --------------------------------------------------------------------------
// ------------------------ CALCULATOR SET UP -------------------------------
// --------------------------------------------------------------------------

let disNum = "";  // current display value
let prDisNum = "";  // previous display value
let operator = "";

const numBtn = document.querySelectorAll('.theNum'); 
const mathOpr = document.querySelectorAll('.theMath');

window.addEventListener('keydown', keyPresHandler, false);

const decimal = document.querySelectorAll('.theDecimal');
decimal.forEach(td => td.addEventListener('click',()=> {
    addDecimal();
    remove_active();
}));

const equal = document.querySelectorAll('.theEqual');
equal.forEach(td => td.addEventListener('click', () => {
    if (disNum !== "" && prDisNum !== ""){
        calculate();
    }
    remove_active();
}));

const displayResults = document.querySelector('.displayCurrent'); 
const previousDisplayR = document.querySelector('.previousDisplay');

const clearCell = document.querySelector('.clearBtn');
clearCell.addEventListener('click', () => {
    clearCalc ();
    remove_active ();
});

const backSpace = document.querySelector('.backSBtn');
[backSpace].forEach(td => td.addEventListener('click', () => {
    remove_active ();
    bcSpace()
}));

 /*-------------------------------------------------------------
		Class active set up
	------------------------------------------------------------*/
const remove_active = () => {
    numBtn.forEach(td => {
        td.classList.remove("active");});
};
 /*-------------------------------------------------------------
		Numbers table data set up
	------------------------------------------------------------*/
numBtn.forEach(td => td.addEventListener('click',() => {
    remove_active();
    cellNum = td.textContent;
    displayResults.textContent = cellNum;
    handleNum (cellNum);
}));

numBtn.forEach(td => td.addEventListener('click', (e) => {
    e.target.classList.add("active");
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
              if (disNum.startsWith("0") && disNum.length === 2) {
                disNum = cellNum;
            return;        
            }
            displayResults.textContent = disNum;
        break;
    }
}
 /*-------------------------------------------------------------
		Operators table data set up
	------------------------------------------------------------*/
mathOpr.forEach(td => td.addEventListener('click',()=> {
    remove_active();
    cellOper = td.textContent;
    displayResults.textContent = cellOper;
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

operCheck = (cellOper) => {
    operator = cellOper;
    previousDisplayR.textContent = prDisNum + " " + operator;
    displayResults.textContent = "0";
    disNum = "";
}

 /*-------------------------------------------------------------
		Calculation set up
	------------------------------------------------------------*/
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
        if (disNum <= 0){
            // alert("Error");
            prDisNum = "Error!";
            results();
            return;
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
const results = () => {
    previousDisplayR.textContent = "";
    displayResults.textContent = prDisNum;
    operator = "";
    disNum = "";
};

 /*-------------------------------------------------------------
		The "Clear" button set up
	------------------------------------------------------------*/
function clearCalc() {
    disNum = "";
    prDisNum = "";
    operator = "";
    displayResults.textContent = "0";
    previousDisplayR.textContent = "";
};

 /*-------------------------------------------------------------
		The decimal button set up
	------------------------------------------------------------*/
const addDecimal = () => {
    if(!disNum.includes('.')){
        disNum += '.';
        displayResults.textContent = disNum;
    }
};

 /*-------------------------------------------------------------
		The backspace button set up
	------------------------------------------------------------*/
const bcSpace = () => {
    prDisNum = prDisNum.toString();
    disNum = disNum.toString();
    if (disNum !== "") {
        disNum = disNum.slice(0, -1);
        // console.log(disNum);
        displayResults.textContent = disNum;
        if (disNum === "") {
            displayResults.textContent = "0";
        };
    }
    if (disNum === "" && prDisNum !== "" && operator === "") {
        prDisNum = prDisNum.slice(0, -1);
        displayResults.textContent = prDisNum;
    }
}

/*-------------------------------------------------------------
		The keyboard button set up
	------------------------------------------------------------*/
function keyPresHandler (e) {
    e.preventDefault();
    if (e.key >= 0 && e.key <=9) {
        handleNum(e.key);
    }
    if (e.key === "Enter" || (e.key === "=" && disNum !== "" && prDisNum !== "")) {
        calculate();
    }
    if (e.key === "+" || e.key === "-" || e.key === "/") {
        handleOper(e.key);
    }
    if (e.key === "*") {
        handleOper("*");
    }
    if (e.key === ".") {
        addDecimal();
    }
    if (e.key === "Backspace") {
        bcSpace();
    }
    if (e.key === "Clear") {
        clearCalc();
    }    
};
