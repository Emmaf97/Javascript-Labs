//drawdots programme lecture slides
const Dot_Size = 6;
const GWINDOW_WIDTH = 500;
const GWINDOW_HEIGHT = 300;

//Greet function
function testFunction1() {
    function greet(name) {
        console.log("Hello, " + name + "!");
    }
    greet("Alice");
    greet("Bob");
    greet("Charlie");
}
//squaring a number
function testFunction2() {
    function greet(name) {
        console.log("Hello, " + name + "!");
    }
    function square(num) {
        return num * num;
    }
    console.log(square(2)); // 4
    console.log(square(3)); // 9
    console.log(square(4)); // 16
}

// factorial of a number
function testFunction3() {
    function greet(name) {
        console.log("Hello, " + name + "!");
    }
    function square(num) {
        return num * num;
    }
    function factorial(num) {
        let varname = 1;
        for (i = 1; i <= num; i++) {
            varname *= i;
        }
        return varname;
    }
    console.log(factorial(5)); // 120
    console.log(factorial(6)); // 720
    console.log(factorial(7)); // 5040
}
//product of array of numbers
function testFunction4() {
    function greet(name) {
        console.log("Hello, " + name + "!");
    }
    function square(num) {
        return num * num;
    }
    function factorial(num) {
        let varname = 1;
        for (i = 1; i <= num; i++) {
            varname *= i;
        }
        return varname;
    }
    function productArray(numArray) {
        let varArray = 1;
        for (i = 0; i < numArray.length; i++) {
            varArray *= numArray[i];
        }
        return varArray;
    }
    console.log(productArray([2, 3, 4])); // 24
    console.log(productArray([5, 6, 7, 8])); // 1680
    console.log(productArray([1, 2, 3, 4, 5])); // 120
}

//challenge 1 randomAverage(n) - generates n random real numbers between
//0 and 1 and then returns the average of those n values

function randomAverage(n){
    let total = 0;
    for(i=0; i<n; i++){
        total += Math.random();
    }
    return total / n;
}
//console.log(randomAverage(100000));

//how many iterations does it take to get n consecutive heads in a row.

function randomChance(p = 0.5) {
    return Math.random() < p;
 }

function consecutiveHeads(n){
    let headcount = 0;
    let count = 0;

    while(headcount < n){
        let result = randomChance();
        if(result === true){
            console.log("heads");
            headcount++;
            count ++
        } else {
            console.log("tails");
            headcount = 0;
        }
    }
    console.log("It took " + count + " times before 3 consecutive heads were thrown");
    return headcount;
}

// fibonacci sequence function

function fibonacci(n){
    let number1 = 0;
    let number2 = 1;
    let sum = 0;
    for(i=0; i<n; i++){
        sum = number1 + number2;
        number1 = number2;
        number2 = sum;
        console.log("Fibonacci sequence of :" + i + "with a value of " + sum);
    }
    return sum;
}

function drawDots() {
    let gw = GWindow(500, 200);
    gw.addEventListener("click", clickAction);


    function clickAction(e) {
        let halfDotSize = Dot_Size / 2;
        let oval = GOval(e.getX() - halfDotSize,
            e.getY() - halfDotSize,
            Dot_Size, Dot_Size);
        oval.setFilled(true);
        gw.add(oval);
    }
}
// draw a line 
function linePlay() {
    let gw = GWindow(500, 200);
    let line = GLine(0, 0, 100, 100);
    gw.add(line);
    line.setLocation(200, 50);
    line.setStartPoint(250, 100);
    line.setEndPoint(350, 100);
}

// draw lines by dragging mouse
function lineDraw() {

    let gw = GWindow(500, 200);
    let line = null;

    gw.addEventListener("mouseDown", mouseDownAction);
    gw.addEventListener("drag", dragAction);

    console.log("before mouse click");

    function mouseDownAction(e) {
        line = GLine(e.getX(), e.getY(), e.getX(), e.getY());
        gw.add(line);
        console.log("Clicked mouse");
    }
    function dragAction(e) {
        line.setEndPoint(e.getX(), e.getY());
    }
}

//Draw lines and dots
function lineDrawClick() {
    let gw = GWindow(500, 200);
    let line = null;

    gw.addEventListener("mousedown", mouseDownAction);
    gw.addEventListener("drag", dragAction);
    gw.addEventListener("click", clickAction);

    function mouseDownAction(e) {
        line = GLine(e.getX(), e.getY(), e.getX(), e.getY());
        gw.add(line);
    }
    function dragAction(e) {
        line.setEndPoint(e.getX(), e.getY());
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
