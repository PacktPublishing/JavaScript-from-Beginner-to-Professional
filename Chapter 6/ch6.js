function hiThere() {
  let you = prompt("What's your name? ");
  console.log("Hello", you, "!");
}

hiThere();

console.log("this is an argument");
prompt("argument here too");

let arr = [];
arr.push("argument");

function addTwoNumbers(x, y) {
  console.log(x + y);
}

addTwoNumbers(3, 4);
addTwoNumbers(12, -90);

function myFunc(param1, param2) {
  // code of the function;
}

myFunc("arg1", "arg2");

function addTwoNumbers(x = 2, y = 3) {
  console.log(x + y);
}

addTwoNumbers();
addTwoNumbers(6, 6);
addTwoNumbers(10);

let favoriteSubject = prompt("What is your favorite subject?");

let result = addTwoNumbers(4, 5);
console.log(result);

function addTwoNumbers(x, y) {
  return x + y;
}

let results = [];

for (let i = 0; i < 10; i++) {
  let result = addTwoNumbers(i, 2 * i);
  results.push(result);
}

console.log(results);

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

function getRecursive(nr) {
  console.log(nr);
  getRecursive(--nr);
}

getRecursive(3);

function logRecursive(nr) {
  console.log("Started function:", nr);
  if (nr > 0) {
    logRecursive(nr - 1);
  } else {
    console.log("done with recursion");
  }
  console.log("Ended function:", nr);
}

logRecursive(3);

function getRecursive(nr) {
  console.log(nr);
  if (nr > 0) {
    getRecursive(--nr);
  }
}

getRecursive(3);

function calcFactorial(nr) {
  if (nr === 0) {
    return 1;
  } else {
    return nr * calcFactorial(--nr);
  }
}

function doingStuffAnonymously() {
  console.log("Not so secret though.");
}

let functionVariable = function () {
  console.log("Not so secret though.");
};

functionVariable();

function doFlexibleStuff(executeStuff) {
  executeStuff();
  console.log("Inside doFlexibleStuffFunction.");
}

doFlexibleStuff(functionVariable);

let anotherFunctionVariable = function () {
  console.log("Another anonymous function implementation.");
};

doFlexibleStuff(anotherFunctionVariable);

function doOuterFunctionStuff(nr) {
  console.log("Outer function");
  doInnerFunctionStuff(nr);
  function doInnerFunctionStuff(x) {
    console.log(x + 7);
    console.log("I can access outer variables:", nr);
  }
}

doOuterFunctionStuff(2);

function doOuterFunctionStuff(nr) {
  doInnerFunctionStuff(nr);
  function doInnerFunctionStuff(x) {
    let z = 10;
  }
  console.log("Not accessible:", z);
}

doOuterFunctionStuff(2);

function doOuterFunctionStuff(nr) {
  doInnerFunctionStuff(nr);
  function doInnerFunctionStuff(x) {
    let z = 10;
  }
}

doInnerFunctionStuff(3);

let youGotThis = function () {
  console.log("You're doing really well, keep coding!");
};

setTimeout(youGotThis, 1000);
setInterval(youGotThis, 1000);
