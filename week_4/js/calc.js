let x = Number();
let y = Number();

const addition = (x,y) => {return (x + y);};
console.log(addition(5,2));

const substraction = (x,y) => { return (x - y);};
console.log(substraction(5,2));

const multiplier = (x,y) => {return (x * y);};
console.log(multiplier(5,2));

const division = (x,y) => {return (x / y);};
console.log(division(5,2));
// b
let operate = (x,y) => {return substraction(x,y);};
console.log(operate(5,2));
// d
const clickOnCells = document.querySelectorAll('td');
const displayResults = document.querySelector('.display');
const clearCell = document.querySelector('.clearBtn');
console.log(displayResults);
console.log(clickOnCells);
console.log(clearCell);

clickOnCells.forEach(td => td.addEventListener('click',()=> {

}));

