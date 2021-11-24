// let firstname = "Maria";
// firstname = "Jacky";

// let nr1 = 12;
// var nr2 = 8;
// const pi = 3.14159;

// throws a TypeError
// const someConstant = 3;
// someConstant = 4;

// let singleString = 'Hi there!';
// let doubleString = "How are you?";

// let language = "JavaScript";
// let message = `Let's learn ${language}`;
// console.log(message);

// let intNr = 1;
// let decNr = 1.5;
// let expNr = 1.4e15;

// let bigNr = 90071992547409920n;
// typeError
// let result = bigNr + intNr;

// let bool1 = false;
// let bool2 = true;
// console.log(typeof bool1)

// let str1 = "JavaScript is fun!";
// let str2 = "JavaScript is fun!";
// console.log("These two strings are the same:", str1 === str2);

// let sym1 = Symbol("JavaScript is fun!");
// let sym2 = Symbol("JavaScript is fun!");
// console.log("These two Symbols are the same:", sym1 === sym2);

// let unassigned;
// console.log(unassigned);

// let terribleThingToDo = undefined;
// let lastname;
// console.log("Same undefined:", lastname === terribleThingToDo);

// let betterOption = null;
// console.log("Same null:", lastname === betterOption);

// let empty = null;

// let nr1 = 2;
// let nr2 = "2";
// console.log(nr1 * nr2);

// let nr1 = 2;
// let nr2 = "2";
// console.log(nr1 + nr2);

// let nrToStr = 6;
// nrToStr = String(nrToStr);
// console.log(nrToStr, typeof nrToStr);

// let strToNr = "12";
// strToNr = Number(strToNr);
// console.log(strToNr, typeof strToNr);

// let strToBool = "any string will return true";
// strToBool = Boolean(strToBool);
// console.log(strToBool, typeof strToBool);

// let nullToNr = null;
// nullToNr = Number(nullToNr);
// console.log("null", nullToNr, typeof nullToNr);

// let strToNr = "";
// strToNr = Number(strToNr);
// console.log("empty string", strToNr, typeof strToNr);

// let strToNr2 = "hello";
// strToNr2 = Number(strToNr2);
// console.log(strToNr2, typeof strToNr2);

// let strToBool = "";
// strToBool = Boolean(strToBool);
// console.log(strToBool, typeof strToBool);

// let strToBool2 = "false";
// strToBool2 = Boolean(strToBool2);
// console.log(strToBool2, typeof strToBool2);

// let nr1 = 2;
// let nr2 = "2";
// console.log(nr1 + Number(nr2));

// let str = "Hello, what's your name? Is it \"Mike\"?";
// console.log(str);
// let str2 = 'Hello, what\'s your name? Is it "Mike"?';
// console.log(str2);

// let str3 = "New \nline."
// let str4 = "I'm containing a backslash: \\!";
// console.log(str3);
// console.log(str4);

// let str = "Hello";
// let nr = 7;
// let bigNr = 12345678901234n;
// let bool = true;
// let sym = Symbol("unique");
// let undef = undefined;
// let unknown = null;

// console.log("str", typeof str);
// console.log("nr", typeof nr);
// console.log("bigNr", typeof bigNr);
// console.log("bool", typeof bool);
// console.log("sym", typeof sym);
// console.log("undef", typeof undef);
// console.log("unknown", typeof unknown);

// let nr1 = 12;
// let nr2 = 14;
// let str1 = "Hello ";
// let str2 = "addition";
// let result1 = nr1 + nr2;
// let result2 = str1 + str2;
// console.log(result1, result2);

// let nr1 = 20;
// let nr2 = 4;
// let str1 = "Hi ";
// let nr3 = 3;
// let result1 = nr1 - nr2;
// let result2 = str1 - nr3;
// console.log(result1, result2);

// let nr1 = 15;
// let nr2 = 10;
// let str1 = "Hi";
// let nr3 = 3;
// let result1 = nr1 * nr2;
// let result2 = str1 * nr3;
// console.log(result1, result2);

// let nr1 = 30;
// let nr2 = 5;
// let result1 = nr1 / nr2;
// console.log(result1);

// let nr1 = 2;
// let nr2 = 3;
// let result1 = nr1 ** nr2;
// console.log(result1);

// let nr1 = 10;
// let nr2 = 3;
// let result1 = nr1 % nr2;
// console.log(`${nr1} % ${nr2} = ${result1}`);

// let nr3 = 8;
// let nr4 = 2;
// let result2 = nr3 % nr4;
// console.log(`${nr3} % ${nr4} = ${result2}`);

// let nr5 = 15;
// let nr6 = 4;
// let result3 = nr5 % nr6;
// console.log(`${nr5} % ${nr6} = ${result3}`);

// let nr = 4;
// nr++;
// console.log(nr);

// let nr = 2;
// console.log(nr++);
// console.log(nr);

// let nr = 2;
// console.log(++nr);

let nr1 = 4;
let nr2 = 5;
let nr3 = 2;
console.log(nr1++ + ++nr2 * nr3++);