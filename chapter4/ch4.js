// let rain = true;

// if(rain){
//   console.log("** Taking my umbrella when I need to go outside **");
// } else {
//   console.log("** I can leave my umbrella at home **");
// }

// if(expression) {
//   // code associated with the if block
//   // will only be executed if the expression is true
// } else {
//   // code associated with the else block
//   // we don't need an else block, it is optional
//   // this code will only be executed if the expression is false
// }

let age = 16;

if(age < 18) {
  console.log("We're very sorry, but you can't get in under 18");
} else {
  console.log("Welcome!");
}

if(age < 3){
  console.log("Access is free under three.");
} else if(age >=3 && age < 12) {
  console.log("With the child discount, the access fee is 5 dollar");
} else if(age >=12 && age < 65) {
  console.log("A regular ticket costs 10 dollar.");
} else if(age >= 65) {
  console.log("A ticket is 7 dollars.");
}

if(age < 3){
  console.log("Access is free under three.");
} else if(age < 12) {
  console.log("With the child discount, the access fee is 5 dollar");
} else if(age < 65) {
  console.log("A regular ticket costs 10 dollar.");
} else if(age >= 65) {
  console.log("A ticket is 7 dollars.");
}

let access = age < 18 ? "denied" : "allowed";
console.log(access);

age < 18 ? console.log("denied") : console.log("allowed");

let activity = "Lunch";

if(activity === "Get up") {
  console.log("It is 6:30AM");
} else if(activity === "Breakfast") {
  console.log("It is 7:00AM");
} else if(activity === "Drive to work") {
  console.log("It is 8:00AM");
} else if(activity === "Lunch") {
  console.log("It is 12.00PM");
} else if(activity === "Drive home") {
  console.log("It is 5:00PM")
} else if(activity === "Dinner") {
  console.log("It is 6:30PM");
} 

switch(expression) {
  case value1:
    // code to be executed
    break;
  case value2:
    // code to be executed
    break;
  case value-n:
    // code to be executed
    break;
}

switch(activity) {
  case "Get up":
    console.log("It is 6:30AM");
    break;
  case "Breakfast":
    console.log("It is 7:00AM");
    break;
  case "Drive to work":
    console.log("It is 8:00AM");
    break;
  case "Lunch":
    console.log("It is 12:00PM");
    break;  
  case "Drive home":
    console.log("It is 5:00AM");
    break;    
  case "Dinner":
    console.log("It is 6:30PM");
    break;
}

switch(expression) {
  case value1:
    // code to be executed
    break;
  case value2:
    // code to be executed
    break;
  case value-n:
    // code to be executed
    break;
  default:
    // code to be executed when no cases match
    break;
}

if(false) {
  // omitted to not make this unnecessarily long
} else {
  console.log("I don't know this activity and cannot determine the current time.")
}

switch(activity) {
  case "Get up":
    console.log("It is 6:30AM");
    break;
  case "Breakfast":
    console.log("It is 7:00AM");
    break;
  case "Drive to work":
    console.log("It is 8:00AM");
    break;
  case "Lunch":
    console.log("It is 12:00PM");
    break;  
  case "Drive home":
    console.log("It is 5:00AM");
    break;    
  case "Dinner":
    console.log("It is 6:30PM");
    break;
  default:
    console.log("I cannot determine the current time.");
    break;
}

let grade = "F";

switch(grade){
  case "F":
  case "D":
    console.log("You've failed!");
    break;
  case "C":
  case "B":
    console.log("You've passed");
    break;
  case "A":
    console.log("Nice!");
    break;
  default:
    console.log("I don't know this grade.");
}

if(grade === "F" || grade === "D") {
  console.log("You've failed!");
} else if(grade === "C" || grade === "B") {
  console.log("You've passed");
} else if(grade === "A") {
  console.log("Nice!");
} else {
  console.log("I don't know this grade.");
}