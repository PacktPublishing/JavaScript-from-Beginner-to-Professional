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
