/* # Born on a weekend
​
Write a function that accepts a date of birth.
​
It returns a string: `Born on a weekend` if the person was born on a weekend.
​
If the birth date was not on a weekend, it should return: `Born on a week day: Monday`, for */

function weekOrWeekend(date) {
  const formattedDate = new Date(date);
  const birthWeekDayIndex = formattedDate.getDay(); // 0- Sunday, 1- Monday, ... 6-Saturday
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const birthWeekDay = weekDays[birthWeekDayIndex];
  if (birthWeekDay === "Sunday" || birthWeekDay === "Saturday")
    return `Born on the weekend`;
  else return `Born on a week day: ${birthWeekDay}.`;
}

console.log(weekOrWeekend("2021-02-21")); // Born on the weekend     0
console.log(weekOrWeekend("2021-02-18")); // Born on a week day: Thursday     4
console.log(weekOrWeekend("1996-05-28"));
