function doSomething(callback) {  
    callback();
}

function sayHi() {
    console.log("Hi!");
}

doSomething(sayHi);


function judge(grade) {
    switch (true) {
        case grade == "A":
            console.log("You got an", grade, ": amazing!");
            break;
        case grade == "B":
            console.log("You got a", grade, ": well done!");
            break;
        case grade == "C":
            console.log("You got a", grade, ": alright.");
            break;
        case grade == "D":
            console.log("You got a", grade, ": hmmm...");
            break;
        default:
            console.log("An", grade, "! What?!");
    }
}

function getGrade(score, callback) {
    let grade;
    switch (true) {
        case score >= 90:
            grade = "A";
            break;
        case score >= 80:
            console.log(score);
            grade = "B";
            break;
        case score >= 70:
            grade = "C";
            break;
        case score >= 60:
            grade = "D";
            break;
        default:
            grade = "F";
    }
    judge(grade);
}

getGrade(85, judge);

setInterval(500, encourage);

function encourage() {
    console.log("You're doing great, keep going!");
}

setInterval(function () {
    console.log("You're doing great, keep going!");
}, 500)