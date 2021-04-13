/* class Person {
    // setup
    constructor(personFirstName, personLastName) {
        this.firstName = personFirstName;
        this.lastName = personLastName;
    }

    // class body

    getFormattedName() {
        return `${this.firstName[0]}. ${this.lastName}`;
    }
}

const employee1 = new Person('joe', 'doe'); // create a new instance of the Person

const employee2 = new Person('jane', 'doe');
//console.log(employee2);
//console.log(employee2.getFormattedName()); */

class Counter {
    constructor(){
        this.counter = 0;
    }

    add (){
        this.counter++;

        return this.counter;
    }
}

const counter = new Counter();
const counter2 = new Counter(); // has its own internal state

// console.log('counter 1 is now at ', counter.add());
// console.log('counter 2 is now at ', counter2.add());
// console.log('counter 1 is now at ', counter.add());
// console.log('counter 2 is now at ', counter2.add());
// console.log('counter 1 is now at ', counter.add());
// console.log('counter 1 is now at ', counter.add());

/* # 1. Person Class
Create a class called `Person` which accepts the name of a person as a string, and his/her age as a number. The `Person` class should have a method called describe which returns a string with the following syntax: “name, age years old”. So, for example, if John is 19 years old, then the function describe of his object will return “John, 19 years old”. */

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    summary() {
        return `${this.name}, ${this.age} years old.`;
    }
}

const personOne = new Person('Xerox', 24);
const personTwo = new Person('Sallo', 34);
console.log(personOne.summary());
console.log(personTwo.summary());