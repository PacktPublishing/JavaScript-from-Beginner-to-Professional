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
