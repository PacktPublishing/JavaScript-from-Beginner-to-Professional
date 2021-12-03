class Employee {
    constructor(first, last, years) {
        this.first = first;
        this.last = last;
        this.years = years;
    }
}
const person1 = new Employee("Laurence", "Svekis", 10);
const person2 = new Employee("Jane", "Doe", 5);
const workers = [person1, person2];

Employee.prototype.details = function(){
    return this.first + " " + this.last + " has worked here " + this.years + " years";
}

workers.forEach((person) => {
    console.log(person.details());
});
