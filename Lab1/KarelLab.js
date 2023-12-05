//Question 2 move Karel five steps
function main() {
    move();
    move();
    move();
    move();
    move();
}

//Question 3 put a beeper on each corner of the first row for 5x5 grid.
function moveKarel() {
    while (frontIsClear) {
        putBepper();
        move();
    }
    putbeeper();
}

//Question 3 version 2
function main() {
    moveKarel();
}

//Question 3 version 1
function main() {
    putBeeper();
    move();
    move();
    move();
    move();
    putBepper();
}

//Question 4 version 2
function place50Beepers() {
    moveKarel();
}
//Question 4 version 1
// place 50 beepers function version 1
// function place50Beepers(){
//     putBeeper();
//     move();
//     putBeeper();
// }
//

function main() {
    place50Beepers();
}

//Question 5 move karel forward until she hits a wall no matter how big the world is.
function main() {
    moveToWall();
}

function moveToWall() {
    while (frontIsClear()) {
        move();
    }
}

//Question 6 Solve the problem where Karel tried to put a line of beepers but missed the first one.
function main() {
    putBeeperLine();
}
function putBeeperLine() {
    while (frontIsClear()) {
        putBeeper();
        move();
    }
}

// Question 7 Place a beeper on row one, column three and five then solve the following. Karel
// must help rebuild broken columns. Make a column of beepers above each beeper
// you find on the first row.

function main() {
}
//version 1
function moveKarel() {
    while (frontIsClear()) {
        putbeeper()
        move();
        move();
        putbeeper()
        move();
        move();
        putbeeper()
    }
}

//version 2
function main() {
    placeBeeperRow();
    checkForBeepers();
}
function placeBeeperRow() {
    repeat(4){
        while (frontIsClear()) {
            putBeeper();
            repeat(2){
                move();
            }
        }
        repeat(3){
            turnRight();
        }
    }
}

function turnRight() {
    repeat(3){
        turnLeft();
    }
}

function checkForBeepers() {
    if (beepersPresent()) {
        faceupRow();
        putOddBeeper();
        turnRight();
        manyOddBeepers();
        turnRight();
        move();
        turnRight();
        putOddBeeper();
        movetwice();
        rowRight();
        turnLeft();
        manyOddBeepers();
    }
}
function putOddBeeper() {
    repeat(2){
        move();
    }
    putBeeper();
}
function faceupRow() {
    turnLeft();
    move();
    putBeeper();
}
function movetwice() {
    move();
    move();
}
function rowRight() {
    turnLeft();
    move();
}
function manyOddBeepers() {
    putOddBeeper();
    putOddBeeper();
}

//Teach Karel to find the midpoint of any world. You can assume that all worlds are
//square



