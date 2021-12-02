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
