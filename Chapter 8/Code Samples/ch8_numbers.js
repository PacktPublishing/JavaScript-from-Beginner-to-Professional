let x = 34;
console.log(isNaN(x));
console.log(!isNaN(x));
let str = "hi";
console.log(isNaN(str));

let str1 = "5";
console.log(isNaN(str1));

let x = 3;
let str = "finite";
console.log(isFinite(x));
console.log(isFinite(str));
console.log(isFinite(Infinity));
console.log(isFinite(10 / 0));

let x = 3;
let str = "integer";
console.log(Number.isInteger(x));
console.log(Number.isInteger(str));
console.log(Number.isInteger(Infinity));
console.log(Number.isInteger(2.4));

let x = 1.23456;
let newX = x.toFixed(2);

let x = 1.23456;
let newX = x.toFixed(3);
console.log(x, newX);

let x = 1.23456;
let newX = x.toPrecision(2);

let x = 1.23456;
let newX = x.toPrecision(4);
console.log(newX)