//In class function call tests
function test() {
    let bob = {
        name: "bob"
        , age: 4
        , occupation: "elf"
        , greet: function () {
            console.log(`Hello from ${this.name}`);
        }
    };
    bob.greet();
}
test();

//In class function call tests
function createPet() {
    let pet = {
        name: "test",
        age: 1,
        birthday: function () { this.age += 1 }
    }
    console.log(pet);
    pet.birthday();
    console.log(pet);
}
createPet();

//Create an object called "person" with properties: "name", "age", "location", and
//"occupation".
let personObj = {
    name: "Person 1",
    age: 100,
    location: "Here and Now",
    occupation: "Programmer",
};

//Add a method to the "person" object called "greeting" that returns a greeting string
//including the person's name.
function objectCall() {
    let person = {
        name: "Person 1",
        age: 100,
        location: "Here and Now",
        occupation: "Programmer",
        greet: function () {
            console.log(`Hello from ${this.name}`);
        }
    };
    person.greet();
}
objectCall();

//Create a new object called "pet" with properties: "name", "species", and "age".
let pet = {
    name: "fluffy",
    species: "chimera",
    age: "infinite"
};
console.log(pet);

//Add a method to the "pet" object called "birthday" that increments the pet's age by
//1.
function ageIncrease() {
    let pet2 = {
        name: "fluffy",
        species: "chimera",
        age: 100,
        birthday: function () { this.age += 1 }
    };
    console.log(pet2);
    pet2.birthday();
    console.log(pet2);
}
ageIncrease();

//Create a function called "printObj" that takes an object as a parameter and logs all of
//its properties and their values to the console.
function printobj(obj) {
    console.log(obj)
}

//Use the "printObj" function to print the "person" object and the "pet" object to the
//console.
printobj(personObj);
printobj(pet);

//Add a new property to the "person" object called "hobbies" that is an array of
//strings.
let person2 = {
    name: "Person 1",
    age: 100,
    location: "Here and Now",
    occupation: "Programmer",
    hobbies: ["Reading", "Writing", "Video Games"]
};
printobj(person2);

//Use a loop to log each hobby in the "hobbies" array to the console.
function printPerson() {
    let person = {
        name: "Person 1",
        age: 100,
        location: "Here and Now",
        occupation: "Programmer",
        hobbies: ["Reading", "Writing", "Video Games"],
        printHobbies: function () { for (i = 0; i < this.hobbies.length; i++) { console.log(this.hobbies[i]) } }
    };
    //printobj(person);
    person.printHobbies();
}
printPerson();

//Create an object called "car" with properties: "make", "model", and "year".
let carobj = {
    make: "Volkswagen",
    model: "Golf Mark V",
    year: "2020"
};

//Add a method to the "car" object called "getAge" that returns the age of the car (i.e.
//the current year minus the year property).
function carAge() {
    let car = {
        make: "Volkswagen",
        model: "Golf Mark V",
        year: 2020,//4
        getAge: function () { 2024 - this.year }
    };
    car.getAge();
    // console.log(car);
}

//Log the age of the "car" object to the console using the "getAge" method.
function calculateCarAge() {
    let car = {
        make: "Volkswagen",
        model: "Golf Mark V",
        year: 2020,//4
        getAge: function () { console.log(2024 - this.year) }
    };
    car.getAge();
    // console.log(car);
}
calculateCarAge();


//Challenge 1
//Create an array of objects representing different books. Each book object
//should have the following properties:
//title (string)
//author (string)
//published (number)
//genre (string)

function test() {
    const books = [
        { title: "The Catcher in the Rye", author: "J.D. Salinger", published: 1951, genre: "Fiction" },
        { title: "To Kill a Mockingbird", author: "Harper Lee", published: 1960, genre: "Fiction" },
        { title: "1984", author: "George Orwell", published: 1949, genre: "Fiction" },
        { title: "Pride and Prejudice", author: "Jane Austen", published: 1813, genre: "Romance" }
    ];
}

test();


//Challenge 2
//Create a function named getBooksByGenre that takes an array of book
//objects and a genre as parameters and returns an array of book titles that
//match the genre.
function test() {
    const books = [
        { title: "The Catcher in the Rye", author: "J.D. Salinger", published: 1951, genre: "Fiction" },
        { title: "To Kill a Mockingbird", author: "Harper Lee", published: 1960, genre: "Fiction" },
        { title: "1984", author: "George Orwell", published: 1949, genre: "Fiction" },
        { title: "Pride and Prejudice", author: "Jane Austen", published: 1813, genre: "Romance" }
    ];
    function hasGenre(books, genre) {
        let bookValTrue = [];
        for (let i = 0; i < books.length; i++) {
            let book = books[i];
            if (book.genre === genre) {
                console.log(book.title + " Value is true")
                bookValTrue.push(book.title);
            }
        }
        return bookValTrue;
    }
    console.log(hasGenre(books, "Fiction"));
}


test();

//Challenge 3
//Create a function named getNewestBook that takes an array of book objects
//as a parameter and returns the book object with the most recent publication
//date.

function test2() {
    const books = [
        { title: "The Catcher in the Rye", author: "J.D. Salinger", published: 1951, genre: "Fiction" },
        { title: "To Kill a Mockingbird", author: "Harper Lee", published: 1960, genre: "Fiction" },
        { title: "1984", author: "George Orwell", published: 1949, genre: "Fiction" },
        { title: "Pride and Prejudice", author: "Jane Austen", published: 1813, genre: "Romance" }
    ];
    function hasGenre(books, genre) {
        let bookValTrue = [];
        for (let i = 0; i < books.length; i++) {
            let book = books[i];
            if (book.genre === genre) {
                console.log(book.title + " Value is true")
                bookValTrue.push(book.title);
            }
        }
        return bookValTrue;
    }
    function getNewestBook(arrBook){
        let newestBook = null;
        for(i=0; i< arrBook.length; i++){
            let book = arrBook[i];
            if(newestBook === null || book.published > newestBook.published){
                newestBook = book;
            }
        }
        return newestBook;
    }
    console.log(getNewestBook(books));
}
test2();