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
