# Errata, Corrections and Improvements
----------------------------------------------------
If you find any mistakes in the second edition of JavaScript from Beginner to Professional, or if you have suggestions for improvements, then please [raise an issue in this repository](https://github.com/PacktPublishing/JavaScript-from-Beginner-to-Professional/issues), or email to us.

## Chapter 04, Page 2 - Fixing the equals syntax in an `if` statement

The example of an `if` statement here explains how a single `=` sign is always true. It should be `if(hobby = "coding")`

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
