// Question 2. In script.js, create a new class called Animal that has the following properties and
//methods: Properties: name, species Methods: makeSound()

class Animal {
    constructor(name, species) {
    this.name = name;
    this.species = species;
    }
    makeSound() {
    console.log('Animal sound!');
    }
    }

//Question 3. Create a new class called Dog that extends the Animal class. This class should have a
//new property called breed, as well as a new method called bark().
class Dog extends Animal {
    constructor(name,species,breed){
        super(name,species);
            this.breed = breed;
        }
    bark(){
        console.log("woof");
    }
}

//Question 4. In script.js, create a new instance of the Dog class called myDog. Use the
//console.log() function to display the name, species, breed, and sound of the dog.
const myDog = new Dog("Rufus","Canine","Golden Retriever")
console.log(`Name: ${myDog.name}`);
console.log(`Species: ${myDog.species}`);
console.log(`Breed: ${myDog.breed}`);

myDog.makeSound();
myDog.bark();

//Question 6Now, let's create a new class called Person using composition. Instead of inheriting
//from the Animal class, this class will contain an instance of the Animal class as a
//property.

class Person {
    constructor(name,animal){
        this.name = name;
        this.animal = animal;
    }
    makeSound(){
        this.animal.makeSound();
    }
}

const myCat = new Animal('Socks', 'Feline');
const myPerson = new Person('Bob', myCat);

console.log(`Name: ${myPerson.name}`);
console.log(`Animal name: ${myPerson.animal.name}`);
console.log(`Animal species: ${myPerson.animal.species}`);

myPerson.makeSound();


//Challenges
//1. Implement Inheritance
//Create a class Shape with a property color. Then, create a subclass Square that inherits from
//Shape and has additional properties width and height. Finally, create an instance of Square
//and log its properties to the console.
class Shape{
constructor(color){
    this.color = color;
}
}

class Square extends Shape{
    constructor(color,width,height){
        super(color);
        this.width = width;
        this.height = height;
    }
}

let newSquare = new Square("blue","10","10");
console.log(`Color: ${newSquare.color}`);
console.log(`Width: ${newSquare.width}`);
console.log(`Height: ${newSquare.height}`);

//2. Implement Composition
//Create a class Car with properties make, model, and year. Then, create a class Driver with
//properties name and age. Finally, create a class CarDriver that composes a Car and Driver
//object. This class should have a method getDriverInfo() that returns the driver's name, age,
//and the car they are driving. Create an instance of CarDriver and log the driver info to the
//console.

class Car {
    constructor(make,model,year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getInfo(){
        return `${this.make} ${this.model} ${this.year}`;
    }
}

class Driver {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    getInfo(){
        return `${this.name}, ${this.age}`;
    }
}

class CarDriver {
    constructor(car,driver){
        this.car = car;
        this.driver = driver;
    }
    getDriverInfo(){
        return `${this.driver.getInfo()} - ${this.car.getInfo()}`;
    }
}
let newCar = new Car("Volkswagen","Golf", 2022)
let newDriver = new Driver("Bob","22");
let newCarDriver = new CarDriver(newCar,newDriver);
console.log(newCarDriver.getDriverInfo());

//3.Choose between Inheritance and Composition:
//Consider a program that simulates a zoo. You have an Animal class with properties name,
//species, sound, and move(). You also have a Dog subclass that inherits from Animal and
//overrides the sound property with "woof" and the move() method with a custom
//implementation. Finally, you have a Zoo class that composes an array of Animal objects. The
//zoo needs to be able to print out the name, species, sound, and movement type of each
//animal. Would you implement this using Inheritance or Composition? Why? Implement your
//solution and test it with multiple Animal and Dog objects.

class AnimalClass {
    constructor(name,species,sound){
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    move(){
        return "Move!"
        // console.log("this animal moves at a quick pace");
    }
    getInfo() {
        return `"Animal:"${this.name} "Species:"${this.species} "Sound:"${this.sound}`
    }
}

class DogClass {
    constructor(name,breed){
        this.animal = new AnimalClass(name,"Dog", "Woof!");
        this.breed = breed;
    }
    move(){
        return "Run!";
    }
    getInfo(){
        return `${this.animal.getInfo()} - ${this.breed}`;
    }
}

class Zoo {
    constructor(animals){
        this.animals = animals;
    }
    getAnimal(){
    return `${this.animals.name} - ${this.animals.species} - ${this.animals.sound}`
    }
    printAnimals(){
        for(const animal of this.animals){
            console.log(animal.getInfo() + " - " + animal.move());
        }
    }
}
const myZoo = new Zoo([
    new AnimalClass("Lion", "Mammal", "Roar!"),
    new AnimalClass("Crocodile", "Reptile", "Hiss!"),
    new DogClass("Buddy", "Labrador"),
    new DogClass("Max", "Poodle")
  ]);

  myZoo.printAnimals();