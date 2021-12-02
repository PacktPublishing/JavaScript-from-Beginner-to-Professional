function testAvailability(x) {
  console.log("Available here:", x);
}

testAvailability("Hi!");
console.log("Not available here:", x);

function testAvailability() {
  let y = "Local variable!";
  console.log("Available here:", y);
}

testAvailability();
console.log("Not available here:", y);

function testAvailability() {
  let y = "I'll return";
  console.log("Available here:", y);
  return y;
}

let z = testAvailability();
console.log("Outside the function:", z);
console.log("Not available here:", y);

let globalVar = "Accessible everywhere!";
console.log("Outside function:", globalVar);

function creatingNewScope(x) {
  console.log("Access to global variables from inside functions.", globalVar);
}

creatingNewScope("some parameter");

console.log("Still available:", globalVar);

function doingStuff() {
  if (true) {
    var x = "local";
  }
  console.log(x);
}

doingStuff();

function doingStuff() {
  if (true) {
    let x = "local";
  }
  console.log(x);
}

doingStuff();

let x = "global";

function doingStuff() {
  let x = "local";
  console.log(x);
}

doingStuff();

var x = "global";

function confuseReader() {
  x = "Guess my scope...";
  console.log("Inside the function:", x);
}

confuseReader();
console.log("Outside of function:", x);
