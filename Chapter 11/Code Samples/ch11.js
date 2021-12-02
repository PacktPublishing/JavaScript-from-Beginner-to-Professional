let x = 7;
console.log(Number.isNaN(x));
console.log(isNaN(x));

let uri = "https://www.example.com/submit?name=maaike van putten";
let encoded_uri = encodeURI(uri);
console.log("Encoded:", encoded_uri);
let decoded_uri = decodeURI(encoded_uri);
console.log("Decoded:", decoded_uri);

let uri = "https://www.example.com/submit?name=maaike van putten";
let encoded_uri = encodeURIComponent(uri);
console.log("Encoded:", encoded_uri);
let decoded_uri = decodeURIComponent(encoded_uri);
console.log("Decoded:", decoded_uri);

//parseint
let str_int = "6";
let int_int = parseInt(str_int);
console.log("Type of", int_int, "is", typeof int_int);

let str_float = "7.6";
let int_float = parseInt(str_float);
console.log("Type of", int_float, "is", typeof int_float);

let str_binary = "0b101";
let int_binary = parseInt(str_binary);
console.log("Type of", int_binary, "is", typeof int_binary);

let str_nan = "hello!";
let int_nan = parseInt(str_nan);
console.log("Type of", int_nan, "is", typeof int_nan);

//parsefloat
let str_float = "7.6";
let float_float = parseFloat(str_float);
console.log("Type of", float_float, "is", typeof float_float);

let str_version_nr = "2.3.4";
let float_version_nr = parseFloat(str_version_nr);
console.log("Type of", float_version_nr, "is", typeof float_version_nr);

let str_int = "6";
let float_int = parseFloat(str_int);
console.log("Type of", float_int, "is", typeof float_int);

let str_binary = "0b101";
let float_binary = parseFloat(str_binary);
console.log("Type of", float_binary, "is", typeof float_binary);

let str_nan = "hello!";
let float_nan = parseFloat(str_nan);
console.log("Type of", float_nan, "is", typeof float_nan);

// concat() and split()
let s1 = "Hello ";
let s2 = "JavaScript";
let result = s1.concat(s2);
console.log(result);

let arr_result = result.split(" ");
console.log(arr_result);

let favoriteFruits = "strawberry,watermelon,grapefruit";
let arr_fruits = favoriteFruits.split(",");
console.log(arr_fruits);

// indexOf() and lastIndexOf() and charAt()
let poem = "Roses are red, violets are blue, if I can do JS, then you can too!";
let index_re = poem.indexOf("re");
console.log(index_re);

let indexNotFound = poem.indexOf("python");
console.log(indexNotFound);

let lastIndex_re = poem.lastIndexOf("re");
console.log(lastIndex_re);

let pos1 = poem.charAt(10);
console.log(pos1);

let pos2 = poem.charAt(1000);
console.log(pos2);

//slice
let str = "Baby shark";
let substr1 = str.slice(5);
let substr2 = str.slice(0,3);
console.log("1:", substr1);
console.log("2:", substr2);

// replace() 
let hi = "Hi buddy";
let new_hi = hi.replace("buddy", "Pascal");
console.log(new_hi);

let new_hi2 = hi.replace("not there", "never there");
console.log(new_hi2);

//replace only all, first first we'll need regex
let s3 = "hello hello";
let new_s3 = s3.replace("hello", "oh");
console.log(new_s3);

// toLowerCase() and toUpperCase()
let low_bye = "bye!";
let up_bye = low_bye.toUpperCase();
console.log(up_bye);

let caps = "HI HOW ARE YOU?";
let fixed_caps = caps.toLowerCase();
console.log(fixed_caps);

// startsWith() and endsWith()
let encouragement = "You are doing great, keep up the good work!";
let bool_start = encouragement.startsWith("You");
console.log(bool_start);
let bool_start2 = encouragement.startsWith("you");
console.log(bool_start2);

let bool_start3 = encouragement.toLowerCase().startsWith("you");
console.log(bool_start3);

let bool_end = encouragement.endsWith("Something else");
console.log(bool_end);

// search()
let searchStr = "When I see my fellow, I say hello";
let pos = searchStr.search("lo");
console.log(pos);

let notFound = searchStr.search("JavaScript");
console.log(notFound);

//Math

// Max() and min()
let highest = Math.max(2, 56, 12, 1, 233, 4);
console.log(highest);

let lowest = Math.min(2, 56, 12, 1, 233, 4);
console.log(lowest);

//NaN
let highestOfWords = Math.max("hi", "bye");
console.log(highestOfWords);

// sqrt() and pow()
let result = Math.sqrt(64);
console.log(result);

let result2 = Math.pow(5, 3);
console.log(result2);

// Ceil() and floor() and trunc() and round()
let x = 6.78;
let y = 5.34;

console.log("X:", x, "becomes", Math.round(x));
console.log("Y:", y, "becomes", Math.round(y));

console.log("X:", x, "becomes", Math.ceil(x));
console.log("Y:", y, "becomes", Math.ceil(y));

let negativeX = -x;
let negativeY = -y;

console.log("negativeX:", negativeX, "becomes", Math.ceil(negativeX));
console.log("negativeY:", negativeY, "becomes", Math.ceil(negativeY));

console.log("X:", x, "becomes", Math.floor(x));
console.log("Y:", y, "becomes", Math.floor(y));

console.log("negativeX:", negativeX, "becomes", Math.floor(negativeX));
console.log("negativeY:", negativeY, "becomes", Math.floor(negativeY));

console.log("X:", x, "becomes", Math.trunc(x));
console.log("Y:", y, "becomes", Math.trunc(y));

// Exp() and log10()
let x = 2;
let exp = Math.exp(2);
console.log("Exp:", exp);
let log = Math.log(exp);
console.log("Log:", log);

// Date
// Create date: constructor and now
let now = new Date();
let now2 = Date.now();
let milliDate = new Date(1000);
let stringDate = new Date("Sat Jun 05 2021 12:40:12 GMT+0200");
let specificDate = new Date(2022, 1, 10, 12, 10, 15, 100);

console.log(now);
console.log(now2);
console.log(milliDate);
console.log(stringDate);
console.log(specificDate);

// Methods to get and set the elements of a date
let d = new Date();
console.log("Day:", d.getDay());
console.log("Month:", d.getMonth());
console.log("Year:", d.getFullYear());
console.log("Seconds:", d.getSeconds());
console.log("Milliseconds:", d.getMilliseconds());
console.log("Time:", d.getTime());

d.setFullYear(2010);
console.log(d);

d.setMonth(9);
console.log(d);

d.setDate(10);
console.log(d);

d.setHours(10);
console.log(d);

d.setMinutes(10);
console.log(d);

d.setSeconds(10);
console.log(d);

d.setMilliseconds(10);
console.log(d);

d.setTime(1622889770682);
console.log(d);

// Parse() date
let d1 = Date.parse("June 5, 2021");
console.log(d1);

let d2 = Date.parse("6/5/2021");
console.log(d2);

// Convert date to string
console.log(d.toDateString());
console.log(d.toLocaleDateString);

// Array
let arr = ["grapefruit", 4, "hello", 5.6, true];

// foreach() method
function printStuff(element, index) {
  console.log("Printing stuff:", element, "on array position:", index);
}

arr.forEach(printStuff);

// filter() method
function checkString(element, index) {
  return typeof element === "string";
}

let filterArr = arr.filter(checkString);
console.log(filterArr);

// every() method
console.log(arr.every(checkString)); //false not all string

// copyWithin() method
// copy to pos 0 the element at pos 3 to the end
let arr = ["grapefruit", 4, "hello", 5.6, true];
arr.copyWithin(0, 3);

arr = ["grapefruit", 4, "hello", 5.6, true];

// copy to pos 0 the element at pos 3
arr.copyWithin(0, 3, 4);

// lastIndexOf() method
let bb = ["so", "bye", "bye", "love"];
console.log(bb.lastIndexOf("bye"));

// join() method
let letters = ["a", "b", "c"];
let x = letters.join();
console.log(x);

// Number
// isNaN()
let x = 34;
console.log(isNaN(x));
let str = "hi";
console.log(isNaN(str));

// isFinite()
console.log(isFinite(x));
console.log(isFinite(str));
console.log(isFinite(Infinity));
console.log(isFinite(10 / 0));

// isInteger()
console.log(Number.isInteger(x));
console.log(Number.isInteger(str));
console.log(Number.isInteger(Infinity));
console.log(Number.isInteger(2.4));

// toFixed()
let x = 1.23456;
let newX = x.toFixed(2); // 2 decimals

// toPrecision()
let x = 1.23456;
let newX = x.toPrecision(2); //2 numbers
