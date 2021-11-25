let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

let someArray = ["Mike", "Antal", "Marc", "Emir", "Louiza", "Jacky"];
let notFound = true;

while (notFound && someArray.length > 0) {
  if (someArray[0] === "Louiza") {
    console.log("Found her!");
    notFound = false;
  } else {
    someArray.shift();
  }
}

console.log(someArray);

let nr1 = 0;
let nr2 = 1;
let temp;
fibonacciArray = [];

while (fibonacciArray.length < 25) {
  fibonacciArray.push(nr1);
  temp = nr1 + nr2;
  nr1 = nr2;
  nr2 = temp;
}

console.log(fibonacciArray);

do {
  // code to be executed if the condition is true
} while (true);

let number;
do {
  number = prompt("Please enter a number between 0 and 100: ");
} while (!(number >= 0 && number < 100));

for (let i = 0; i < 10; i++) {
  console.log(i);
}

let arr = [];
for (let i = 0; i < 100; i++) {
  arr.push(i);
}

let arr = [];
for (let i = 0; i < 100; i = i + 2) {
  arr.push(i);
}

let arrOfArrays = [];
for (let i = 0; i < 3; i++) {
  arrOfArrays.push([]);
  for (let j = 0; j < 7; j++) {
    arrOfArrays[i].push(j);
  }
}

console.log(arrOfArrays);

let names = ["chantal", "john", "maxime", "bobbi", "jair"];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

//let names = ["chantal", "john", "maxime", "bobbi", "jair"];
for (let i = 0; i < names.length; i++) {
  names[i] = "hello " + names[i];
}
console.log(names);

for (let name of names) {
  console.log(name);
}

let car = {
  model: "Golf",
  make: "Volkswagen",
  year: 1999,
  color: "black",
};

for (let prop in car) {
  console.log(car[prop]);
}

for (let prop in car) {
  console.log(prop);
}

let cars = [
  {
    model: "Golf",
    make: "Volkswagen",
    year: 1999,
    color: "black",
  },
  {
    model: "Picanto",
    make: "Kia",
    year: 2020,
    color: "red",
  },
  {
    model: "Peugeot",
    make: "208",
    year: 2021,
    color: "black",
  },
  {
    model: "Fiat",
    make: "Punto",
    year: 2020,
    color: "black",
  },
];

for (let i = 0; i < 10; i++) {
  console.log(i);
  if (i === 4) {
    break;
  }
}

for (let i = 0; i < cars.length; i++) {
  if (cars[i].year >= 2020) {
    if (cars[i].color === "black") {
      console.log("I have found my new car and can stop looking:", car[i]);
      break;
    }
  }
}

let superLongArray = [];
while (true) {
  if (superLongArray[0] != 42 && superLongArray.length > 0) {
    superLongArray.shift();
  } else {
    console.log("Found 42!");
    break;
  }
}

let notFound = true;
while (superLongArray.length > 0 && notFound) {
  if (superLongArray[0] != 42) {
    superLongArray.shift();
  } else {
    console.log("Found 42!");
    notFound = false;
  }
}

for (let car of cars) {
  if (car.color !== "black") {
    continue;
  }
  if (car.year >= 2020) {
    console.log("sure, let's get this one:", car);
  }
}
// let's only log the odd numbers to the console
let i = 1;
while (i < 50) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
  i++;
}

let i = 1;
while (i < 50) {
  i++;
  if ((i - 1) % 2 === 0) {
    continue;
  }
  console.log(i - 1);
}

for (let i = 1; i < 50; i = i + 2) {
  console.log(i);
}

let groups = [
  ["martin", "daniel", "keith"],
  ["margot", "marina", "ali"],
  ["helen", "jonah", "sambikos"],
];

//let's find a group with two names starting with an m
for (let i = 0; i < groups.length; i++) {
  let matches = 0;

  for (let j = 0; j < groups[i].length; j++) {
    if (groups[i][j].startsWith("m")) {
      matches++;
    } else {
      continue;
    }
    if (matches === 2) {
      console.log("Found a group with two names starting with an m:");
      console.log(groups[i]);
      break;
    }
  }
}

for (let group of groups) {
  for (let member of group) {
    if (member.startsWith("m")) {
      console.log("found one starting with m:", member);
      break;
    }
  }
}

outer: for (let group of groups) {
  inner: for (let member of group) {
    if (member.startsWith("m")) {
      console.log("found one starting with m:", member);
      break outer;
    }
  }
}
