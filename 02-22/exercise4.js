/* # Friday the 13th
​
Given the month and year as human readable numbers, return whether that month contains a Friday 13th.
​
 */

function hasFriday13(month, year) {
  const date = year + "-" + month + "-" + "13";
  const formattedDate = new Date(date);
  // console.log(formattedDate);
  const weekdayOf13Index = formattedDate.getDay();
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  if (weekDays[weekdayOf13Index] === "Friday") return true;
  else return false;
}

console.log(hasFriday13(3, 2020)); // true // 2020-03-13

console.log(hasFriday13(10, 2017)); // true // 2017-10-13

console.log(hasFriday13(1, 1985)); // false  // 1985-1-13
