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

//function for add

const result=0;
let calculation=result;

function add() {
 
    const calcDescription=`${calculation}+${userInput.value}`;
  
    calculation=calculation + Number(userInput.value);
  output(calcDescription, calculation);
}

addBtn.addEventListener("click", add);

//function for subtract


function subtract(){
  
  if(calculation==0){
    var calcDescription=`${userInput.value}`;
    calculation=Number(userInput.value- calculation);
  }
  else{
    var calcDescription=`${calculation}-${userInput.value}`;
  calculation=calculation-Number(userInput.value);}
 
output(calcDescription, calculation);
}

subtractBtn.addEventListener("click", subtract);


//function for multiply


function multiply() {
  if(calculation==0){
 var calcDescription=`${userInput.value}`;
 calculation=Number(userInput.value);
  }
  else{
    var calcDescription=`${calculation}*${userInput.value}`;
  calculation=calculation * Number(userInput.value);}
  output(calcDescription, calculation);
}

multiplyBtn.addEventListener("click", multiply);

//function for divide



function divide(){
  
  if(calculation==0){
    var calcDescription=`${userInput.value}`;
    calculation=Number(userInput.value);
    
  }
  else{
    var calcDescription=`${calculation}/${userInput.value}`;
    calculation=calculation/Number(userInput.value);
    
  }
  output(calcDescription, calculation);
}

divideBtn.addEventListener("click", divide);