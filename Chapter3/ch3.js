arr1 = new Array("purple", "green", "yellow");
arr2 = ["black", "orange", "pink"];

arr3 = new Array(10);
arr4 = [10];

console.log(arr3);
console.log(arr4);

cars = ["Toyota", "Renault", "Volkswagen"];
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log(cars[3]);
console.log(cars[-1]);

cars[0] = "Tesla";
console.log(cars[0]);

cars[3] = "Kia";
cars[-1] = "Fiat";
console.log(cars[3]);
console.log(cars[-1]);

colors = ["black", "orange", "pink"]
booleans = [true, false, false, true];
emptyArray = [];

console.log("Length of colors:", colors.length);
console.log("Length of booleans:", booleans.length);
console.log("Length of emtpy array:", emptyArray.length);

lastElement = colors[colors.length - 1];
console.log(lastElement);

numbers = [12, 24, 36];
numbers[-1] = 0;
numbers[5] = 48;
console.log(numbers.length);

console.log("numbers", numbers);

favoriteFruits = ["grapefruit", "orange", "lemon"];
favoriteFruits.push("tangerine");

let lengthOfFavoriteFruits = favoriteFruits.push("lime");
console.log(lengthOfFavoriteFruits);
console.log(favoriteFruits);

let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
arrOfShapes.splice(2, 0, "square", "trapezoid");
console.log(arrOfShapes);

let arr5 = [1, 2, 3];
let arr6 = [4, 5, 6];
let arr7 = arr5.concat(arr6);
console.log(arr7);

let arr8 = arr7.concat(7, 8, 9);
console.log(arr8);

arr8.pop();
console.log(arr8);

arr8.shift();
console.log(arr8);

arr8.splice(1, 3);
console.log(arr8);

delete arr8[0];
console.log(arr8); 

let findValue = arr8.find(() => e === 6);
let findValue2 = arr8.find(() => e === 8);
console.log(findValue, findValue2);

let findIndex = arr8.indexOf(6);
let findIndex2 = arr8.indexOf(10);
let findIndex3 = arr8.indexOf(6, 2);
console.log(findIndex, findIndex2, findIndex3);

let animals = ["dog", "horse", "cat", "platypus", "dog"]
let lastDog = animals.lastIndexOf("dog");
console.log(lastDog);


let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
names.sort();

let ages = [18, 72, 33, 56, 40];
ages.sort();

console.log(names);
console.log(ages);

names.reverse();
console.log(names);

console.log(typeof arr1);

let dog = { dogName: "JavaScript", 
            weight: 2.4, 
            color: "brown", 
            breed: "chihuahua", 
            age: 3, 
            burglarBiter: true 
          };

let dogColor1 = dog["color"];
let dogColor2 = dog.color;


dog["color"] = "blue";
dog.weight = 2.3;

let company = { companyName: "Healthy Candy",
                activity: "food manufacturing",
                address: {
                  street: "2nd street",
                  number: "123",
                  zipcode: "33116",
                  city: "Miami",
                  state: "Florida"
                },
                yearOfEstablishment: 2021 
              };

company.address.zipcode = "33117";
company["address"]["number"] = "100";

console.log(company);

let company2 = { companyName: "Healthy Candy",
                activities: ["food manufacturing", "improving kids' health", "manufacturing toys"],
                address: {
                  street: "2nd street",
                  number: "123",
                  zipcode: "33116",
                  city: "Miami",
                  state: "Florida"
                },
                yearOfEstablishment: 2021 
              };

let activity = company2.activities[1];
console.log(activity);

let addresses = [{
    street: "2nd street",
    number: "123",
    zipcode: "33116",
    city: "Miami",
    state: "Florida"
  },
  {
    street: "1st West avenue",
    number: "5",
    zipcode: "75001",
    city: "Addison",
    state: "Texas"
  }];

  let company3 = { companyName: "Healthy Candy",
                    activities: ["food manufacturing", "improving kids' health", "manufacturing toys"],
                    address: [{
                      street: "2nd street",
                      number: "123",
                      zipcode: "33116",
                      city: "Miami",
                      state: "Florida"
                    },
                    {
                      street: "1st West avenue",
                      number: "5",
                      zipcode: "75001",
                      city: "Addison",
                      state: "Texas"
                    }],
                    yearOfEstablishment: 2021 
                  };