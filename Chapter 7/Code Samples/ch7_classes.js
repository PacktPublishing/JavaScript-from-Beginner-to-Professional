class Dog {
  constructor(dogName, weight, color, breed) {
    this.dogName = dogName;
    this.weight = weight;
    this.color = color;
    this.breed = breed;
  }
}

let dog = new Dog("JavaScript", 2.4, "brown", "chihuahua");
console.log(dog.dogName, "is a", dog.breed, "and weighs", dog.weight, "kg.");

class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

let p = new Person("Maaike", "van Putten");
console.log("Hi", p.firstname);

let p = new Person("Maaike");
console.log("Hi", p.firstname, p.lastname);

class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  greet() {
    console.log("Hi there!");
  }

  compliment(name, object) {
    return "That's a wonderful " + object + ", " + name;
  }
}

p.greet();

let compliment = p.compliment();
console.log(compliment);

class Vehicle {
  constructor(color, currentSpeed, maxSpeed) {
    this.color = color;
    this.currentSpeed = currentSpeed;
    this.maxSpeed = maxSpeed;
  }

  move() {
    console.log("moving at", this.currentSpeed);
  }

  accelerate(amount) {
    this.currentSpeed += amount;
  }
}

class Motor extends Vehicle {
  constructor(color, currentSpeed, maxSpeed, fuel) {
    super(color, currentSpeed, maxSpeed);
    this.fuel = fuel;
  }
}
let motor = new Motor("Black", 0, 250, "gasoline");
console.log(motor.color);
motor.accelerate(50);
motor.move();

class Person {
  #firstname;
  #lastname;
  constructor(firstname, lastname) {
    this.#firstname = firstname;
    this.#lastname = lastname;
  }

  get firstname() {
    return this.#firstname;
  }

  set firstname(firstname) {
    this.#firstname = firstname;
  }

  get lastname() {
    return this.#lastname;
  }

  set lastname(lastname) {
    this.#lastname = lastname;
  }
}

let p = new Person("Maria", "Saga");
console.log(p.firstname);

class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  greet() {
    console.log("Hi there!");
  }
}

Person.prototype.introduce = function () {
  console.log("Hi, I'm", this.firstname);
};

let p = new Person("Maria", "Saga");
p.introduce();

