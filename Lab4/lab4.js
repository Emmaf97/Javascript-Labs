/*Write a loop that iterates from 1 to 5
sums the values 1+2+3+4+5 returning 'sum'
a) do with a for loop
b) do with a while loop
c) do with a do-while loop
*/
/**
 In class examples of functions.
*/

//version 1
// sum = 1;
// result = 0;

for (let i = 0; i < 6; i++) {
    console.log("count" + i);
    //console.log("Sun:" + sum++);
    //console.log("Sun:" + sum);
    result = result + sum;
    sum++;
}
// console.log("Result:" + result);


//version 2
//let sum = 0;
for (let count = 0; count < 5; count += 1) {
    sum = sum + count;
    console.log("sum of 1 - 5:" + sum);
}

//function call
function doSum() {

    let sum = 0;
    for (let count = 0; count < 5; count += 1) {
        sum = sum + count;
        console.log("sum of 1 - 5:" + sum);
    }
}
doSum();
console.log("programe continues");

// assign variable to function result
function doSum() {
    let sum = 0;
    for (let count = 1; count <= 5; count += 1) {
        sum = sum + count;
    }
    return sum;
}
let result = doSum(); //call or 'invoke'
console.log("result: " + result);

console.log("program continues");


//factorial function
function dofactorial() {
    let sum = 1;
    for (let count = 1; count <= 5; count += 1) {
        //console.log("count" + count);
        sum = sum * count;
        // sum =sum +count;
        //sum * (sum +count);
    }
    return sum;
}
let result2 = dofactorial(); //call or 'invoke'
console.log("result: " + result2);

console.log("program continues");

//factorial with different values
function dofactorial2(n) {
    let sum = 1;
    for (let count = 1; count <= n; count += 1) {
        sum = sum * count;
    }
    return sum;
}
let result3 = dofactorial2(5); //call or 'invoke'
console.log("result: " + result2);

console.log("program continues");

//DigitSum version 1
let number = 1279; //1 + 2 + 7 + 9 
let digit = 0;
let sum = 0;

digit = number % 10;
sum = sum + digit;
console.log("returning last digit:" + digit);
number = Math.floor(number / 10);

digit = number % 10;
sum = sum + digit;
console.log("returning second last digit:" + digit);
number = Math.floor(number / 10);

digit = number % 10;
sum = sum + digit;
console.log("returning third last digit:" + digit);
number = Math.floor(number / 10);

digit = number % 10;
sum = sum + digit;
console.log("returning first digit:" + digit);
//number = Math.floor(number/10);

console.log(sum);
//division and mod

//console.log(number / 10);
// number = number / 10;
// console.log(number);

// 1279 mod 10 to get 9 then 1279

// DigitSum version 2
let number = 1279; //1 + 2 + 7 + 9 
//let digit = 0;
let sum = 0;
while (number >= 1) {
    //digit = number%10;
    //sum = sum + digit;
    sum += number % 10;
    //console.log(digit);
    number = Math.floor(number / 10);
    // console.log("sum"+sum);
}
console.log("program continues");

//function DigitSum
function digitSum(number) {
    let sum = 0;
    while (number >= 1) {
        //digit = number%10;
        //sum = sum + digit;
        sum += number % 10;
        //console.log(digit);
        number = Math.floor(number / 10);
    }
    //console.log(sum);
    return sum;
}
let result = digitSum(1279);
console.log("calulation result: " + result);

/********************** 
Lab sheet week 4
***********************/

//Question 2
function testLoops1() {
    // code goes here
}

//Question 3
function testLoops2() {
    var sum = 0;
}

//Question 4
function testLoops3() {
    var sum = 0;
    for (var i = 1; i <= 5; i++) {
        sum += i;
    }
    console.log("The sum of 1 to 5 is " + sum);
}

//Quesiton 5
function testLoops4() {
    var sum = 0;
    var i = 1;
    while (i <= 5) {
        sum += i;
        i++;
    }
    console.log("The sum of 1 to 5 is " + sum);
}

//Question 6
function testLoops5() {
    var sum = 0;
    var i = 1;
    do {
        sum += i;
        i++;
    } while (i <= 5);
    console.log("The sum of 1 to 5 is " + sum);
}

//Question 7
function testLoops6() {
    var person = {
        name: "John",
        age: 30,
        gender: "male"
    };
    for (var prop in person) {
        console.log(prop + ": " + person[prop]);
    }
}


// challenge 1
function sumOdd(n) {
    //console.log("it is working" + n);
    let sum = 0;
    let odd = 1;
    for (let i = 0; i < n; i = i + 1) {
        console.log(odd);
        //console.log("count: " +count+ ", n" +n );
        sum = sum + odd;
        odd += 2;
    }
    //console.log("sum at end"+sum)
    return sum;
}
let result4 = sumOdd(4);

//sumOdd(4);
console.log("result: " + result4)
console.log("program continues");

// first version of pyramid for known number of outcomes
function drawConsolePyramid(size) {
    let icon = "*";
    let space = " ";
    for (let i = 1; i <= size; i++) {
        let pyramid = i;
        switch (pyramid) {
            case 1:

                console.log(space + space + icon + space + space);
                break;
            case 2:
                console.log(icon + space + icon + space + icon);
                //console.log("* * *");
                break;
            case 3:
                console.log(icon + space + icon + space + icon + space + icon + space + icon);
                //console.log("*****");
                break;
            case 4:
                console.log(icon + space + icon + space + icon + space + icon + space + icon + space + icon + space + icon);
                //console.log("*****");
                break;
            case 5:
                console.log(icon + space + icon + space + icon + space + icon + space + icon + space + icon + space + icon + space + icon + space + icon);
                //console.log("*****");
                break;
            case 6:
                console.log(icon + space + icon + space + icon + space + icon + space + icon + space + icon + space + icon + space + icon + space + icon + space + icon + space + icon);
                //console.log("*****");
                break;
            case 7:
                console.log(icon + space + icon + space + icon + space + icon + space + icon + space + icon + space + icon + space + icon + space + icon + space + icon + space + icon + space + icon + space + icon);
                //console.log("*****");
                break;
            case 8:
                console.log(icon + space + icon + space + icon + space + icon + space + icon + space + icon + space + icon + space + icon + space + icon + space + icon + space + icon + space + icon + space + icon + space + icon + space + icon);
                //console.log("*****");
                break;
            default:
                console.log("t");
                break;
        }

    }
}

//challenge 2 final version 
function drawConsolePyramid(size) {
    let space = " ";
    let icon = "*";

    //spaces and icons based on a size input
    for (let i = 0; i < size; i++) {
        let countSpaces = size - i -1;
        let countIcons = 2 * i + 1;

        //spaces
        let spaces ="";
        for (let s = 0; s < countSpaces; s++) {
            spaces += space;
        }
        //icons
        let icons = "";
        for (let j = 0; j < countIcons; j++) {
            icons += icon;
        }
        console.log(spaces + icons);
    }
}

//Expected Output
/*
    *
   ***
  ***** 
 *******
*********
*/
// solution
function pyramid(n) {
    const sp = " ";
    const st = "*";
    let stars = 1;            //one to begin with
    let spaces = n - 1;          //n-1 spaces to begin
    for (let i = 0; i < n; i++) {
        console.log(sp + st);
        stars += 2;
        spaces--;
    }

}
pyramid(4);

//challenge 3
