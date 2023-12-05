/*Write a loop that iterates from 1 to 5
sums the values 1+2+3+4+5 returning 'sum'
a) do with a for loop
b) do with a while loop
c) do with a do-while loop
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

// challenge 1
function sumOdd(n){
    //console.log("it is working" + n);
    let sum = 0;
    let odd =1;
    for(let i=0; i<n; i=i+1){
        console.log(odd);
        //console.log("count: " +count+ ", n" +n );
        sum = sum+odd;
        odd +=2;
    }
    //console.log("sum at end"+sum)
    return sum;
}
let result4 = sumOdd(4);

//sumOdd(4);
console.log("result: " + result4)
console.log("program continues");

//DigitSum version 1
let number = 1279; //1 + 2 + 7 + 9 
let digit = 0;
let sum = 0;

digit = number%10;
sum = sum + digit;
console.log("returning last digit:" + digit);
number = Math.floor(number/10);

digit = number%10;
sum = sum + digit;
console.log("returning second last digit:" + digit);
number = Math.floor(number/10);

digit = number%10;
sum = sum + digit;
console.log("returning third last digit:" + digit);
number = Math.floor(number/10);

digit = number%10;
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
while (number >=1){
    //digit = number%10;
    //sum = sum + digit;
    sum += number %10;
    //console.log(digit);
number = Math.floor(number/10);
// console.log("sum"+sum);
}
console.log("program continues");

//function DigitSum
function digitSum(number){
    let sum =0;
    while (number >=1){
        //digit = number%10;
        //sum = sum + digit;
        sum += number %10;
        //console.log(digit);
    number = Math.floor(number/10);
}
//console.log(sum);
return sum;
}
let result = digitSum(1279);
console.log("calulation result: " + result);




