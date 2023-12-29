
function testCases() {


    //Excerise 1
    //Write a function called "reverseString" that takes a string parameter and returns the
    //reversed string.

    function reverseString(text) {
        let text2 = "";
        for (let i = text.length - 1; i >= 0; i--) {
            text2 += text[i];
        }
        return text2;
    }

    //Excerise 2
    //Write a function called "capitalize" that takes a string parameter and returns the
    //string with the first letter capitalized.

    function capitalize(text) {
        let textString = "";
        for (let i = 0; i < text.length; i++) {
            if (i === 0) {
                textString += text[i].toUpperCase();

            } else {
                textString += text[i].toLowerCase();
            }
        }
        return textString;
    }

    //Excerise 3
    //Write a function called "isPalindrome" that takes a string parameter and returns true
    //if the string is a palindrome, false otherwise. A palindrome is a word or phrase that
    //reads the same backwards as forwards.

    function isPalindrome(text) {
        let string1 = "";
        let string2 = "";
        let result = "";
        for (let i = 0; i < text.length; i++) {
            string1 += text[i];
        }
        for (let j = text.length - 1; j >= 0; j--) {
            string2 += text[j];
        }
        if (string1 === string2) {
            result = string1;
            console.log("This is an example of a palindrome " + result);
            return true;
        } else {
            result += text;
            console.log("This is not an example of a palindrome " + result);
            return false;
        }
    }


    //Excerise 4
    //Write a function called "countVowels" that takes a string parameter and returns the
    //number of vowels in the string.
    function countVowels(text) {
        let count = 0;
        for (let i = 0; i < text.length; i++) {
            if (text[i] === "a" || text[i] === "e" || text[i] === "i" || text[i] === "o" || text[i] === "u") {
                count++;
            }
        }
        console.log("There are " + count + " vowels in the word " + text);
        return count;
    }



    //Excerise 5
    //Write a function called "replaceSpaces" that takes a string parameter and replaces
    //all spaces with a specified character.
    // function replaceSpaces(text, symbol) {
    //     let newString = "";
    //     for(let i=0; i < text.length; i++){
    //         if(text[i] === ' '){
    //             newString += symbol;
    //         }
    //         else{
    //             newString += text[i];
    //         }
    //         //console.log(text[i]);
    //     }
    //     return newString;
    // }
    function replaceSpaces(text, symbol) {
        let newString = "";
        for (let i = 0; i < text.length; i++) {
            newString += text[i].replace(" ", symbol);


        }
        return newString;
    }

    //Excerise 6
    //Write a function called "truncateString" that takes two parameters (a string and a
    //number) and returns a truncated string with the specified number of characters.
    function truncateString(text, num){
        return text.slice(0,num);
    }

    //Excerise 7
    //Write a function called "splitString" that takes two parameters (a string and a
    //separator) and returns an array of substrings that were separated by the separator.
    function splitString(text,symbol) {
        return text.split(symbol);
    }

    //Excerise 8
    //Write a function called "joinArray" that takes two parameters (an array and a
    //separator) and returns a string that contains all elements of the array separated by
    //the separator.
    function joinArray(arr,symbol){
        return arr.join(symbol);

    }

    //Excerise 9
    //Write a function called "countOccurrences" that takes two parameters (a string and
    //a character) and returns the number of times the character occurs in the string.
    function countOccurrences(text, char){
        let count = 0;
        for(let i=0; i < text.length; i++){
            if(text[i] === char){
                count++;
            }
        }
        return count;
    }

    //Excerise 10
    //Write a function called "removeDuplicates" that takes a string parameter and
    //returns the string with all duplicate characters removed.
    function removeDuplicates(text){
        let newString = "";
        //let char = ""
        for(let i=0; i < text.length; i++){
            if(!newString.includes(text[i])){
            newString += text[i];
            }
        }
        return newString;
    }
    console.log(reverseString("test")); //tset
    console.log(capitalize("new string"));//New string
    console.log(isPalindrome("radar"));// true
    console.log(countVowels("elkwraps")); //2
    console.log(reverseString("hello")); // "olleh"
    console.log(capitalize("hello world")); // "Hello world"
    console.log(isPalindrome("racecar")); // true
    console.log(countVowels("hello world")); // 3
    console.log(replaceSpaces("hello world", "-")); // hello-world
    console.log(truncateString("I bought a new car", 4)); // I bo
    console.log(splitString("I" , "bought","a","new","car", ","));// I
    console.log(joinArray(["I","bought","a","new","car"], ",")); //I,bought,a,new,car
    console.log(countOccurrences("this is a test for characters", "a"))//3
    console.log(removeDuplicates("rrrr therrr dogrrrr")); // r the dog
}
testCases();

//Challenge 1
//Write a function that takes in a string as input and returns the length of the longest
//word in the string.
function challenges(){
    function longestWord(text){
        let count = 0;
        let symbol = ' ';
        let word = "";
        let result = text.split(symbol);
        console.log(result);
        for(let i=0; i < result.length; i++){
            if(result[i].length > count){
                count = result[i].length;
                word = result[i];
            }
        }
        return console.log("The longest word is: " + word + " It is a length of:  " + count);
    }


//Challenge 2
//Write a function that takes in a string as input and returns a new string with every
//other character removed.

function removeEveryOther(text){
    let newString = "";
    for (let i=0; i < text.length; i+=2){
        newString += text[i];
    }
    return newString;
}

// Challenge 3
//Write a function that takes in two strings as input and returns true if the second
//string is a rotation of the first string, and false otherwise.

function isRotation(text1, text2){
    let string1 = "";
    let string2 = "";

    for(let i=0; i < text1.length; i++){
        string1 += text1[i];
    }
    for(let j=0; j < text2.length; j++){
        string2 += text2[j];
    }
    // if(text1.length !== text2.length){
    //     return false;
    // }
    return (string1 + string1).includes(string2);

}
    console.log(longestWord("The quick brown fox jumps over the lazy dog ")); //quick is the first matched biggest word in the sentence.
    console.log(removeEveryOther("Hello, world!")); /// Returns "Hlo ol!"
    console.log(isRotation("waterbottle", "erbottlewat"));
}
challenges();



