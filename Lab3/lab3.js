//challeneg 1
function min(num1, num2) {
    let smallest = (num1 < num2) ? num1 : num2;
    return (num1 < num2) ? num1 : num2;

    //version 3
    // return smallest;

    //version 2
    // return 1;

    //version 1
    // if(num1 < num2){
    //     console.log(num1);
    // }else{
    // console.log("This is not the correct answer")
    // }
}
//version 1
//console.log(`num1 is:${num1}num2 is:${num2}`)

//version 2 & 3
console.log(`min: ${min(2, 4)}`)

//version 1
// min(3,4);

//challenge 2

function min(num1, num2) {
    let smallest = (num1 < num2) ? num1 : num2;
    return (num1 > num2) ? num1 : num2;
}
console.log(`max: ${min(2, 4)}`);

//challenge 2
function max3(num1, num1, num1) {
    let biggest = max(num1, mum2);
    let actual_biggest = max(biggest, num3);
    return actual_biggest;
}
console.log(`max: ${max(99, 33, 104)}`);

//test ternary function version 1
function maxTernary(num1, num2, num3) {
    let biggest = (max(num1, num2) > max(max(num1, num2), num3)) ? max(num1, num2) : max(max(num1, num2), num3);
    return (biggest);
}
//test ternary function version 2
function max3(num1, num2, num3) {
    let biggest = Math.max(num1, num2);
    let actual_biggest = Math.max(biggest, num3);
    return actual_biggest;
}
//test ternary function version 3 final version
function maxTernary(num1, num2, num3) {
    return (Math.max(num1, num2) > Math.max(Math.max(num1, num2), num3)) ? Math.max(num1, num2) : Math.max(Math.max(num1, num2), num3);

}

console.log(`max: ${maxTernary(11, 99, 8)}`)

//challenge 3
// console.log(bottles + "bottles of beer on the wall");
// console.log(bottles +"bottles of beer");
// console.log(bottles +"You take one down you pass it around");
// bottles = bottles --; // bottles -1
// console.log(bottles +" bottles of beer on the wall");

// while(bottles >= 1){
//     console.log(`bottles is: ${bottles`}
//     bottles--;
// }
//version 1
// while(bottles > 1){
//     console.log(`bottles is: ${bottles}`);
//     bottles--;
// }
//version 2
// while(bottles > 1){
// console.log(bottles + "bottles of beer on the wall");
// console.log(bottles +"bottles of beer");
// console.log(bottles +"You take one down you pass it around");
// bottles = bottles --; // bottles -1
// console.log(bottles +" bottles of beer on the wall");
// if(bottles === 1 ){
//     console.log(bottles +" bottle of beer on the wall");
// } else{
//     console.log(bottles +" bottles of beer on the wall");
// }
// }
// console.log(bottles + "bottle of beer on the wall");
// console.log(bottles +"bottles of beer");
// console.log(bottles +"You take one down you pass it around");
// bottles = bottles --;
// console.log(bottles +"No more bottles of beer on the wall");



//version 3 -- final version
let bottles = 3;
while (bottles > 1) {
    console.log(bottles + " bottles of beer on the wall");
    console.log(bottles + " bottles of beer");
    console.log(bottles + " You take one down you pass it around");
    bottles--;
    if (bottles === 1) {
        console.log(bottles + " bottle of beer on the wall");
        console.log(bottles + " bottle of beer");
        console.log(bottles + " You take one down you pass it around");
    }
}
console.log("No More bottles of beer on the wall");