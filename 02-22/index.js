const date = new Date();
const date1 = new Date("2021-01-12");
const date2 = new Date(2021, 1, 14);

console.log(
  date,
  date.getDate(),
  date.getFullYear(),
  date.getDay(),
  date.getMonth()
);
// weekdays: 0-6
// 0- sunday
// 1- monday
// ... 6- saturday

// months: 0-11
// 0- january
// ... 11- december

console.log(date1);

console.log(Date.now()); // using a static method

// we can comprare dates like regular numbers < >

// formatting with the INTL object
// currencies

const currencyFormatted = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});
console.log(currencyFormatted.format(120000));

// dates

const dateFormatter = new Intl.DateTimeFormat("de-DE", {
  dateStyle: "short",
  timeStyle: "short",
});

console.log(dateFormatter.format(date1));

// Array, Object, String, Number

// new Array()
const list = [];
console.log(Array.isArray(list));

// Object

const defaultOptions = {
  color: "pink",
  width: 100,
  height: 100,
  taste: "choco",
};

const customOptions = { taste: "vanila" };

const finalOptions = {
  ...defaultOptions,
  ...customOptions, // everything that repeats will overwrite
};

const finalOptions2 = Object.assign(defaultOptions, customOptions);

console.log(finalOptions2);

// closures

function greeting(dayTime) {
  let greetSentence;
  if (dayTime === "morning") {
    greetSentence = "Good Morning";
  }
  if (dayTime === "noon") {
    greetSentence = "Good Day";
  }
  if (dayTime === "evening") {
    greetSentence = "Good Evening";
  }
  if (dayTime === "night") {
    greetSentence = "Good Night";
  }

  return function (name) {
    console.log(`${greetSentence}, ${name}`);
  };
}

const morningGreeting = greeting("morning");
morningGreeting("Jane");

const noonGreeting = greeting("noon");
noonGreeting("Jane");
