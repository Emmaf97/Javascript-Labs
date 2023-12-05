//Version 1 simple response on browser
//alert("Hello, World!");

//Version 2  function call
// var message = "Hello, World!";
// alert(message);
// function showMessage() {
// alert(message);
// }

// version 3 button call
var button = document.getElementById("myButton");
var message = "Hello, World!";
function showMessage() {
alert(message);
}
button.addEventListener("click", showMessage);

var button2 = document.getElementById("calcButton");
//version 1
// let sqrNum = Math.pow(2,2);
// let multX = (5 * 2);
// let minusFirstVals = (sqrNum - multX);
// let addvalues = (minusFirstVals + 6)
// let result = Math.round(addvalues);
// let finalresult = Math.pow(x,2) - (5 * x) + 6;

//Challenge 1 takes any value number and calculates the equation f(x) = x^2 - 5*2 +6
function calculateX() {
    let value = prompt("please type a whole number below");
    let x = parseInt(value);
    let finalresult = Math.pow(x,2) - (5 * x) + 6;
    alert(finalresult);
}

button2.addEventListener("click", calculateX);

//Challenge 2 get a quotient that divides one number into another  e.g quotient of (9,4) is 2. 4 goes into 9 twice with one remainder.

var button3 = document.getElementById("calcQuotiant");

function calcQuotiant() {
    //example for values
    // let value1 = 9;
    // let value2 = 2;
    // let equation = (value1 / value2);
    let valuex = prompt("please type a number for X ");
    let valuey = prompt("please type a number for Y ");
    let x = parseInt(valuex);
    let y = parseInt(valuey);
    let equation = (x / y);
    let result = Math.round(equation);
    alert(result);
}

button3.addEventListener("click", calcQuotiant);


// Challenge 3 convert Fahrenheit to Celsius taking value from user with prompt.
var button4 = document.getElementById("fahrenheitToCelsius");

function fahrenheitToCelsius() {
    let valuep = prompt("please type a Farenheit ");
    let valuef = parseInt(valuep);
    let equationf2C = (5 / 9) * (valuef - 32);
    let finalresult = Math.round(equationf2C);
    alert(finalresult);
}

button4.addEventListener("click", fahrenheitToCelsius);


