let s1 = "Hello ";
let s2 = "JavaScript";
let result = s1.concat(s2);
console.log(result);

let result = "Hello JavaScript";
let arr_result = result.split(" ");
console.log(arr_result);

let favoriteFruits = "strawberry,watermelon,grapefruit";
let arr_fruits = favoriteFruits.split(",");
console.log(arr_fruits);

let letters = ["a", "b", "c"];
let x = letters.join();
console.log(x);

let letters = ["a", "b", "c"];
let x = letters.join('-');
console.log(x);

let poem = "Roses are red, violets are blue, if I can do JS, then you can too!";
let index_re = poem.indexOf("re");
console.log(index_re);

let indexNotFound = poem.indexOf("python");
console.log(indexNotFound);

if (poem.indexOf("python") != -1) {
    // do stuff
}

let searchStr = "When I see my fellow, I say hello";
let pos = searchStr.search("lo");
console.log(pos);

let notFound = searchStr.search("JavaScript");
console.log(notFound);

let lastIndex_re = poem.lastIndexOf("re");
console.log(lastIndex_re);

let pos1 = poem.charAt(10);
console.log(pos1);

let pos2 = poem.charAt(1000);
console.log(pos2);

let str = "Create a substring";
let substr1 = str.slice(5);
let substr2 = str.slice(0,3);
console.log("1:", substr1);
console.log("2:", substr2);

let hi = "Hi buddy";
let new_hi = hi.replace("buddy", "Pascal");
console.log(new_hi);

let new_hi2 = hi.replace("not there", "never there");
console.log(new_hi2);

let s3 = "hello hello";
let new_s3 = s3.replace("hello", "oh");
console.log(new_s3);

let s3 = "hello hello";
let new_s3 = s3.replaceAll("hello", "oh");
console.log(new_s3);

let low_bye = "bye!";
let up_bye = low_bye.toUpperCase();
console.log(up_bye);

let caps = "HI HOW ARE YOU?";
let fixed_caps = caps.toLowerCase();
console.log(fixed_caps);

let caps = "HI HOW ARE YOU?";
let fixed_caps = caps.toLowerCase();
let first_capital = fixed_caps.charAt(0).toUpperCase().concat(fixed_caps.slice(1));
console.log(first_capital);

let encouragement = "You are doing great, keep up the good work!";
let bool_start = encouragement.startsWith("You");
console.log(bool_start);

let bool_start2 = encouragement.startsWith("you");
console.log(bool_start2);

let bool_start3 = encouragement.toLowerCase().startsWith("you");
console.log(bool_start3);

let bool_end = encouragement.endsWith("Something else");
console.log(bool_end);

