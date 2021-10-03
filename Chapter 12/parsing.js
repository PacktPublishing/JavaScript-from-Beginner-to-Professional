let str = "{\"name\": \"Maaike\", \"age\": 30}";
let obj = JSON.parse(str);
console.log(obj.name, "is", obj.age);

let dog = {
    "name": "wiesje",
    "breed": "dachshund"
};

let strdog = JSON.stringify(dog);
console.log(typeof strdog);
console.log(strdog);