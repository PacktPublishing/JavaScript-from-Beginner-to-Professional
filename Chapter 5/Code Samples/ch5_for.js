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
