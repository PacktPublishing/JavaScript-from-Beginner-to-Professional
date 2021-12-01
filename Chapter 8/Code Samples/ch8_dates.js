let currentDateTime = new Date();
console.log(currentDateTime);

let now2 = Date.now();
console.log(now2);

let milliDate = new Date(1000);
console.log(milliDate);

let stringDate = new Date("Sat Jun 05 2021 12:40:12 GMT+0200");
console.log(stringDate);

let specificDate = new Date(2022, 1, 10, 12, 10, 15, 100);
console.log(specificDate);

let d = new Date();
console.log("Day of week:", d.getDay());
console.log("Day of month:", d.getDate());
console.log("Month:", d.getMonth());
console.log("Year:", d.getFullYear());
console.log("Seconds:", d.getSeconds());
console.log("Milliseconds:", d.getMilliseconds());
console.log("Time:", d.getTime());

d.setFullYear(2010);
console.log(d);

d.setMonth(9);
console.log(d);

d.setDate(10);
console.log(d);

d.setHours(10);
console.log(d);

d.setTime(1622889770682);
console.log(d);

let d1 = Date.parse("June 5, 2021");
console.log(d1);

let d2 = Date.parse("6/5/2021");
console.log(d2);

console.log(d.toDateString());

console.log(d.toLocaleDateString());


