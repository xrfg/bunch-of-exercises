/* function whatIsThis(){
    return this;
}
console.log(whatIsThis());

function variablesInThis() {
    this.person = 'xerox';
    console.log(this.person);
}
variablesInThis();
this.person = 'carl';
let person = 'me';
console.log(this.person);
console.log(person);

function info(){
    this.data = 'something';
}
console.log(info()); */

let friend = {
    firstName: 'xerox fag',
    sayHi() {
        console.log(this);
        return `${this.firstName} says get off my plane.`;
    },
};
// the this keyword will refer to the friend object here
// console.log(friend.sayHi());

// create a dog object
// the dog should have a name key/value
// it should a sleep method
// the sleep method should return some message with the dogs name -- "peaches is my dog, she likes the beach"
// call the method -- i.e console.log()

let dog = {
    firstName: 'Peaches',
    goSleep() {
        console.log(this);
        return `${this.firstName} is my dog, she likes the beach.`;
    },
};

// console.log(dog.goSleep());

let nested = {
    number: 1,
    anotherObject: {
        anotherNumber: 2,
        whatIsThis() {
            return this;
        },
    },
};

// console.log(nested.anotherObject.whatIsThis());

let anotherPerson = {
    firstName: 'xerox',
    sayHi() {
        return `hey ${this.firstName}`;
    },
    determineContext() {
        return this === anotherPerson;
    },
};

let yetAnotherPerson = {
    firstName: 'sallo',
    sayHi() {
        return `hey ${this.firstName}`;
    },
    determineContext() {
        return this === yetAnotherPerson;
    },
    dog: {
        sayHello() {
            return `hey ${this.firstName}`;
        },
        determineContext() {
            return this === yetAnotherPerson;
        },
    }
};

// console.log(yetAnotherPerson.determineContext()); // true
// console.log(yetAnotherPerson.dog.sayHello()); // hey undefined
// because it just refers to the object where it is written on

// create a meetings object
// the meetings object should have day, meetings, and meetingsDone properties
// there should be a method to add meetings
// there should be a method to remove meetings

let meetings = {
    day : 'Wednesday',
    meetings : 5,
    meetingsDone : 2,
    addMeetings(num){
        this.meetings += num;
    },
    removeMeetings(num){
        this.meetings -= num;
    },
    resetMeetings(){
        this.meetings = 0;
        this.meetingsDone = 0;
    },
    summary(){
      return `You have ${this.meetings} meetings today`;
    },
    completed(){
       return `You have completed ${this.meetingsDone} today.`;
    },
};
meetings.addMeetings(2);
meetings.removeMeetings(5);
meetings.resetMeetings();
// console.log(meetings.summary());
// console.log(meetings.completed());

// ------------
// CALL
// the call() method calls a function with a given this value and arguments provided individually.
// ------------

let animal = {
    introduce(){
        return `${this.name} is a ${this.type} and says ${this.sound}.`;
    }
};

let peeches = {
    name: 'peeches',
    type: 'dog',
    sound: 'woof',
};

let dudley = {
    name: 'dudley',
    type: 'cat',
    sound: 'meoooooow',
};

// set this argument to peeches
// console.log(animal.introduce.call(peeches));

let person1 = {
    name: 'xerox fag',
    greet(otherName) {
        return `Hi ${otherName}, I'm ${this.name}. Nice to meet you!.`;
    },
};

let person2 = {
    name: 'carl quinoa',
    
}

// console.log(person1.greet(person2.name));

// console.log(person2.greet(person1.name));

// console.log(person1.greet.call(person2));

// console.log(person1.greet.call(person2, person1.name));

// ......
// APPLY
// ----

/* let xerox = {
    firstName: 'xerox',
    sayHi() {
       return `Hi ${this.firstName}`;
    },
    addNumbers(a,b,c,d) {
        return `${this.firstName} calculated ${a + b + c + d}`;
    },
};

let nic = {
    firstName: 'nic',
}; */
// console.log(xerox.sayHi());
// console.log(xerox.addNumbers(1,2,3,4));

// make nic borrow the add numbers method and print the result to the console

// console.log(xerox.addNumbers.call(nic, 10,2,3,4));
// console.log(xerox.addNumbers.apply(nic, [1,2,3,4]));

let matt = {
    firstName:'matt',
    lastName:'mattson',
    instructor: true,
    favColor:'blue',
    dogOwner: true,
    deleteInfo(...args){
        for (let arg of args)
        delete this[arg];
    },
}
let john = {
    firstName:'john',
    lastName:'johnson',
    instructor: true,
    favColor:'green',
    dogOwner: false,
}
let todd = {
    firstName:'todd',
    lastName:'toddson',
    instructor: true,
    favColor:'hates colors',
    dogOwner: false,
}

matt.deleteInfo('instructor', 'favColor');
// console.log(matt);
matt.deleteInfo.apply(john, ['firstName', 'DogOwner', 'favColor']);
// console.log(john);
matt.deleteInfo.apply(todd, ['firstName', 'DogOwner', 'lastName', 'favColor']);
// console.log(todd);

// -----
// BIND
// -----

function add(a,b){
    return a + b;
}

let partialAdd = add.bind(this, 2);
console.log(partialAdd(2));

let xerox = {
    firstName: 'xerox',
    sayHi() {
       return `Hi ${this.firstName}`;
    },
    addNumbers(a,b,c,d) {
        return `${this.firstName} calculated ${a + b + c + d}`;
    },
};

let nic = {
    firstName: 'nic',
};

let nicCalc = xerox.addNumbers.bind(nic, 1,2,3,4);
console.log(nicCalc());
let nicCalcMore = xerox.addNumbers.bind(nic, 1,2);
console.log(nicCalcMore(3,7));