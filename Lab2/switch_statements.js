//switch case 1
let cuisine = prompt("please type an country name that has cuisine you like");
let mycuisine = (`my choise: ${cuisine}`);

let dish = "japanese";
//let mycuisine = dish;
switch ("mycuisine") {
    case 'japanese':
        console.log(mycuisine + "There are so many dishes to choose from");
        break;
    case 'Thai':
        console.log("Try the red dang");
        break;
    case 'Italian':
        console.log("try the pasta or the pizza");
        break;
    case 'Dutch':
        console.log("try the peanut mayo");
        break;
    default:
        console.log("we cannot find what you are looking for");
        break;
}

//switch case 2
let RainbowColors = "Rainbow Red";

switch ("RainbowColors") {
    case "Rainbow Red":
        console.log("Red");
        break;
    case "Rainbow Blue":
        console.log("Blue");
        break;
    default:
        console.log("Your Color");
        break;
}

//switch case 3
let advice = "balanced";
let diet = advice;

switch (diet) {
    case 'balanced':
        advice += 'Continue following a balanced diet.';
        break;
    case 'high-fat':
        advice += 'Consider revising your diet to reduce high-fat food consumption.';
        break;
    case 'low-protein':
        advice += 'Ensure you are getting enough protein for your health.';
        break;
    default:
        advice += 'Balanced nutrition is important for good health.';
}