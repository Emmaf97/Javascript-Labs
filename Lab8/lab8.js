//Create an array named fruits containing the following items: "apple", "banana",
//"cherry", "date". Then, log the array to the console.

let fruits = ["apple","banana","cherry","date"]
console.log("Creating an array of fruits: ");
console.log(fruits);

//Add "elderberry" to the end of the fruits array using the push() method. Then, log
//the updated array to the console.

fruits.push("elderberry");
console.log("Adding Elderberry to the fruits array: ");
console.log(fruits);

//Remove the first item from the fruits array using the shift() method. Then, log the
//updated array to the console.
fruits.shift();
console.log("Removing the first item from the fruits array: ");
console.log(fruits);

//Use the join() method to join all the items in the fruits array into a single string
//separated by commas. Then, log the resulting string to the console.
newString = fruits.join(', ');
console.log("Joining all items in the frutis array into a comma seperated string: ");
console.log(newString);

//Create a new array named numbers containing the following items: 4, 8, 15, 16, 23,
//42. Then, log the array to the console.
let numArray = [4,8,15,16,23,42];
console.log("Creating a num array: ");
console.log(numArray);

//Sort the numbers array in ascending order using the sort() method. Then, log the
//updated array to the console.
let numArray2 = [4,15,8,16,23,42];
numArray2.sort();
console.log("Sorting the munArray in ascending order: ");
console.log(numArray);

//Use the reverse() method to reverse the order of the numbers array. Then, log the
//updated array to the console.
numArray.reverse();
console.log("Sorting the munArray in reverse order: ");
console.log(numArray);

//Use the slice() method to create a new array named subNumbers that contains the
//items from index 2 to index 4 of the numbers array. Then, log the new subNumbers
//array to the console.
let numArray3 = [4,8,15,16,23,42];
subNumbers = numArray3.slice(2,4);
console.log("Using slice to create new array from index 2 to 4 of number array: ");
console.log(subNumbers);

//Use the splice() method to remove the item at index 2 from the numbers array.
//Then, log the updated numbers array to the console.
let numArray4 = [4,8,15,16,23,42];
numArray4.splice(2,1);
console.log("Using splice to remove item at index 2 from the numbers array: ");
console.log(numArray4);

//challenge 1
//Use the map() method to create a new array that contains the square of each item in
//the numbers array. Then, log the new array to the console.
let numbersArray = [1,2,3,4]; // 1, 4, 9, 16
let newNumArray = numbersArray.map((a) => a * a);
console.log("Using Map function to create new array that squares each item in the numbers array: ");
console.log(newNumArray);

//challenge 2
//Use the filter() method to create a new array that contains only the even numbers
//from the numbers array. Then, log the new array to the console.
let numbersArray2 = [1,2,3,4,5,6,7];//2,4
let filteredNumArray = numbersArray2.filter((a) => a % 2 ===0);
console.log("Using filter function to create new array that containes only even numbers from the numbers array: ");
console.log(filteredNumArray);

//challenge 3
//Use the reduce() method to find the sum of all the items in the numbers array. Then,
//log the sum to the console.
let numbersArray3 = [1,2,3,4,5,6]; //21
reducedArray = numbersArray3.reduce((a,b) =>  a+ b);
console.log("Using reduce function to find the sume of all the items in the numbers array: ");
console.log(reducedArray);
