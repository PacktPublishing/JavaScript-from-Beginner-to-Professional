# Errata, Corrections and Improvements
----------------------------------------------------
If you find any mistakes in the second edition of JavaScript from Beginner to Professional, or if you have suggestions for improvements, then please [raise an issue in this repository](https://github.com/PacktPublishing/JavaScript-from-Beginner-to-Professional/issues), or email to us.

## Chapter 04, Page 2 - Fixing the equals syntax in an `if` statement

The example of an `if` statement here explains how a single `=` sign is true. It should be `if(hobby = "coding")`

Incorrect code is:
```
if(hobby == "coding"){
  console.log("** I love coding too! **");
} else {
  console.log("** Can you teach me that? **");
}
```
Correct code is:
```
if(hobby = "coding"){
  console.log("** I love coding too! **");
} else {
  console.log("** Can you teach me that? **");
}
```

## Chapter 14, Page 379 - Replaced `Exercise 14.4` with correct solution
Solution for [Exercise 14.4](https://github.com/PacktPublishing/JavaScript-from-Beginner-to-Professional/blob/main/Chapter%2014/Exercise_14.4.html) is now fixed.


## Chapter 05, Page 89 - Added the missing `console.log` statement on line 8 to match the output
```
while (notFound && someArray.length > 0) {
  if (someArray[0] === "Louiza") {
    console.log("Found her!");
    notFound = false;
    console.log("false");
  } else {
    someArray.shift();
  }
}
```
## Chapter05, Page 112 - Rephrased the 2nd paragrah on the page.
"We are looking for all the groups that have two or more names starting with an M. If we find such a group, we will log it."


## Practice exercise 6.4, Page 129 - Fixed the incorrect referencing
Modify the calculator that you made in Practice exercise `6.2` 
should be
Modify the calculator that you made in Practice exercise `6.4`
