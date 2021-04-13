function greet(greeting) {
  return function (name) {
    return `${greeting} ${name}`;
  };
}

/* function sayHello(name) {
    let text = `Hello ${name}`;
    return function() {
        return text;
    };
} */

// console.log(greet('Hi')('Helon'));
// let sayHi = greet("Hi");
// console.log(sayHi("Helon"));
// second function
/* let sayHelon = sayHello("Helon");
console.log(sayHelon()); */

function buildFunctions() {
  let arr = [];

  for (var i = 0; i < 3; i++) {
    arr.push(function () {
      console.log(i);
    });
  }
  return arr;
}

let fs = buildFunctions();
fs[0]();
fs[1]();
fs[2]();

const createCounter = () => {
  let count = 0;
  // is saved within the scope

  return {
    increment() {
      count++;
    },
    decrement() {
      count--;
    },
    get() {
      return count;
    },
  };
};

const counter = createCounter(); // stored as a reference
console.log(counter);
counter.increment();
console.log(counter.get());
counter.increment();
counter.increment();
counter.increment();
console.log(counter.get());
counter.increment();
counter.increment();
let finalCount = counter.get();
console.log(finalCount);
