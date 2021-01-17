//variables for get elements
const userInput=document.getElementById("input");
const addBtn=document.getElementById("add");
const subtractBtn=document.getElementById("subtract");
const multiplyBtn=document.getElementById("multiply");
const divideBtn=document.getElementById("divide");
const currentResultOutput=document.getElementById("result");
const currentCalculationOutput=document.getElementById("calculation");

//function for output

function output (nam1, nam2) {
  currentResultOutput.textContent=nam1;
  currentCalculationOutput.textContent=nam2;
}

//function for complete operators

function allOperator(operator, resultBefor, calcNumber){
 const calcDescription=`${resultBefor} ${operator} ${calcNumber}`;
  output(calcDescription, calculation)
}

//function for  user input value
function getUserInput (){
  return Number(userInput.value);
}

//function for add

const result=0;
let calculation=result;

 
function add() {
  let inputNumber=getUserInput();
 const calcbefor=calculation;
 calculation=calculation + inputNumber;
 allOperator("+",calcbefor, inputNumber)
}

addBtn.addEventListener("click", add);

//function for subtract


function subtract(){
  const inputNumber = getUserInput ();

  if(calculation==0){
    
    var calcDescription=`${inputNumber}`;
    calculation=inputNumber- calculation;
    output(calcDescription, calculation)
  }
  else {
 const calcbefor=calculation;
 calculation=calculation - inputNumber;
 allOperator("-",calcbefor, inputNumber);
 
}
}

subtractBtn.addEventListener("click", subtract);


//function for multiply


function multiply() {
  const inputNumber = getUserInput ();
  if(calculation==0){
 var calcDescription=`${inputNumber}`;
 calculation=inputNumber;
 output(calcDescription, calculation)
  }
  else{
const calcbefor=calculation;
 calculation=calculation * inputNumber;
 allOperator("*",calcbefor, inputNumber);
}
}
multiplyBtn.addEventListener("click", multiply);

//function for divide

function divide(){
  const inputNumber = getUserInput ();
  if(calculation==0){
    var calcDescription=`${inputNumber}`;
    calculation=inputNumber;
    output(calcDescription, calculation)
    
  }
  else{
    const calcbefor=calculation;
 calculation=calculation / inputNumber;
 allOperator("/",calcbefor, inputNumber);
  }
  
}

divideBtn.addEventListener("click", divide);