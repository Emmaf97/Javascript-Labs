//drawdots programme lecture slides
const Dot_Size = 6;
const GWINDOW_WIDTH = 500;
const GWINDOW_HEIGHT = 300;

function init() {
    console.log("inside init");
}

function test() {
    let string = "Thistlewood";
    let lastIndex = string.length - 1;
    console.log(`last index" ${lastIndex}`);

    // to get a character in a string
    let charAt4 = string.charAt(4);
    console.log("char at :" + charAt4);

    // to get the index of a character
    let string2 = string.indexOf("s");
    console.log("char at :" + string2);

    //to convert string to uppercase
    let string3 = string.toUpperCase;
    console.log("char at :" + string3); // strings are immutable

    //convert to lowercase
    let string4 = string.toLowerCase;
    console.log("char at :" + string4);

    // concatted strings
    let town = "town";
    let string5 = string.concat("town");
    console.log("char at :" + string5);
    let string6 = string.concat(town);
    console.log("char at :" + string5);

    //indexing into string
    let indexed = string[2];
    console.log("char at :" + indexed);

    // iterate over each of the string
    for (let i = 0; i < string.length; i++) {
        console.log(string[i]);
        //console.log(charAt(i));
    }

}

// attempt 1
function stringTest() {
    let typedIn = prompt("Enter your name: ")
    //let firstIndex = typedIn[0].toUpperCase;
    for (i = 0; i < typedIn.length; i++) {
        let firstLetter = "";
        if (i < 1) {
            firstLetter += typedIn[i];
            console.log(typedIn[i]);
            //return typedIn[i].toUpperCase;
        } else {
            console.log(typedIn[i].toLowerCase);
        }
    }
}

//attempt 2
function firstCharUpper(text) {
    return text[0].toUpperCase();
}

function lowerAllButFirst(text) {
    let allButFirst = "";
    for (i = 1; i < text.length; i++) {
        allButFirst += text[i];
    }
    return allButFirst.toLowerCase();
}

function capitalize(name) {
    return firstCharUpper(name) + lowerAllButFirst(name);
}

function test0() {
    let name = prompt("Enter your name");
    console.log("Hello: " + capitalize(name))
}

function test() {
    let text = "this is a string";
    console.log(typeof (text));
    console.log(text.substring(2, 7));
    console.log("--" + text.substring(2, 7) + "--");

    let firstIs = text.indexOf("is");
    let secondIs = text.indexOf("is", 4);
    console.log("--" + text.substring(firstIs, secondIs) + "--");

    //slicing
    let mySlice = text.slice(2, 7);
    console.log("--" + mySlice + "--");

}
function test1() {
    for (let char of text) {
        console.log(char)
    }
}

function test3() {
    let number = "4";
    //doesn't match as the same type
    if (number === 4) {
        console.log("it's 4");
    } else {
        console.log("not quite right");
    }
    //matches as it is seen as the same type
    if (number == 4) {
        console.log("it's 4");
    } else {
        console.log("not quite right");
    }
    //converts string to a number
    let numberValue = Number(number);
    if (numberValue == 4) {
        console.log("it's 4");
    } else {
        console.log("not quite right");
    }

    //
    if (isNaN(numberValue)) {
        console.log("not right");
    }
    else {
        if (numberValue == 4) {
            console.log("it's 4");
        } else {
            console.log("not quite right");
        }
    }
}

/* challenge excercises
Complete the following challenges.
*/

//Challenge 1
// Write a function called "add" that takes two parameters (numbers) and returns their
//sum
function add(x, y) {
    let sum = x + y;

    return sum;
}
console.log("Add: " + add(3, 3));

//Challenge 2
//Write a function called "multiply" that takes two parameters (numbers) and returns
//their product.

function multiply(x, y) {
    let result = x * y;
    return result;
}
console.log("Multiply: " + multiply(3, 3));

//Challenge 3
//Write a function called "calculate" that takes three parameters (two numbers and a
//callback function) and returns the result of applying the callback function to the two
//numbers.

function calculate(x, y, f) {
    return f(x, y);
}
console.log("Calculate: " + calculate(2, 3, multiply));

//Challenge 4
//Write a function called "filter" that takes two parameters (an array and a callback
//function) and returns a new array containing only the elements of the original array
//for which the callback function returns true.

function filter(f, numArray) {
    let arrayResult = [];
    for (var i = 0; i < numArray.length; i++) {
        if (f(numArray[i])) {
            arrayResult.push(numArray[i]);
        }
    }
    return arrayResult;
}

//challenge 5
//Write a function called "isEven" that takes one parameter (a number) and returns
//true if the number is even, false otherwise.
function isEven(number) {
    return number % 2 == 0;
}
let filteredArray = filter(isEven, [1, 2, 3, 4, 5, 6]);
console.log("Filtered Array: " + filteredArray);

//challenge 6
//Write a function called "sum" that takes one parameter (an array of numbers) and
//returns the sum of all the numbers in the array.

function sum(array) {
    let result = 0;
    for (i = 0; i < array.length; i++) {
        result += array[i];
    }
    return result;
}
console.log("Sum: " + sum([1, 2, 3]));


//challenge 7
//Write a function called "average" that takes one parameter (an array of numbers)
//and returns the average of all the numbers in the array.
function test2() {
    let testArray = [1, 2, 3, 4, 5];
    function average(array) {
        let result = 0;
        for (i = 0; i < array.length; i++) {
            result += array[i];
        }
        return result / 2;
    }
    console.log("Average: " + average(testArray));
}
test2();



//challenge 8
//Write a function called "map" that takes two parameters (an array and a callback
//function) and returns a new array containing the results of applying the callback
//function to each element of the original array.

function test() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    function map(array, func) {
        let arrayResult = [];
        for (let i = 0; i < array.length; i++) {
            (arrayResult.push(func(array[i])));
        }

        return arrayResult;
    }
    function double(num) { return num * 2; }
    console.log("Map: " + map(numbers, double));

}
test();

//challenge 9
//Write a function called "factorial" that takes one parameter (a number) and returns
//the factorial of that number. The factorial of a number is the product of all positive
//integers up to and including that number. For example, the factorial of 5 is 5 x 4 x 3 x
//2 x 1 = 120.
function test3() {
    function factorial(num) {
        let result = 1;
        for (i = 1; i <= num; i++) {
            result *= i;
        }
        return result;
    }
    console.log("Factorial: " + factorial(5));
}
test3();

//challenge 10
//Write a function called "recursiveSum" that takes one parameter (an array of
//numbers) and returns the sum of all the numbers in the array using recursion.
//non recursive version.
function test4() {
    // let sum = 0;
    let numArray = [1, 2, 3, 4, 5]; //10
    function recursiveSum(array) {
        let result = 0;
        for (i = 0; i < array.length; i++) {
            result += array[i];
            //console.log(result);
            //sum += result;
        }
        return result;
    }
    console.log("Non-recursive sum: " + recursiveSum(numArray));
}
test4();

//recursive version
function test5() {
    let numArray = [1, 2, 3, 4, 5]; //10
    function recursiveSum(array) {
        if (array.length === 1) {
            return array[0];
        } else {
            return array[0] + recursiveSum(array.slice(1));
        }
    }
    console.log(recursiveSum(numArray));
}
test5();

// Euclid's Theorem Non Recursive
function test() {
    function gcd(x, y) {
        let value = 0;
        let a = x;
        let b = y;
        for (i = 1; i <= a; i++) {
            //console.log(i);
            if (a % i === 0 && b % i === 0) {
                value = i;
            }
        }
        return value;
    }

    console.log("Euclids Theorem non recursive: " + gcd(8, 4));
}

test();

//Euclid's Theorem Recursive
function test2() {
    function gcd(x, y) {
        if (y === 0) {
            return x;
        }
        else {
            return gcd(y, x % y);
        }
    }
    console.log("Euclids Theorem recursive: " + gcd(8, 4));
}

test2();

// draw rectangle 
function lineDrawClick() {
    let gw = GWindow(500, 200);
    let rect = null;

    gw.addEventListener("mousedown", mouseDownAction);
    gw.addEventListener("drag", dragAction);
    gw.addEventListener("click", clickAction);
    gw.addEventListener("mouseup", mouseUp);

    function mouseDownAction(e) {
        rect = GRect(e.getX(), e.getY(), 0, 0);
        gw.add(rect);
    }
    function dragAction(e) {
        rect.setSize(e.getX() - rect.getX(), e.getY() - rect.getY());
        rect.setFilled(true);
    }
    function mouseUp(e){
        rect.setFilled(true);
    }

    function clickAction(e) {
        let halfDotSize = Dot_Size / 2;
        let oval = GOval(e.getX() - halfDotSize,
            e.getY() - halfDotSize,
            Dot_Size, Dot_Size);
        oval.setFilled(true);
        gw.add(oval);
    }
}