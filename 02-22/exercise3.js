/* # Date: future or past?
​
Write two functions: one should tell us if a date has already passed, the other one should tell us if a date is in the future.
​
If the date is today - they date is not in the past and it is not in the future.
*/

function isPasteDate(date) {
  const formattedDate = new Date(date);
  const year = formattedDate.getFullYear();
  const month = formattedDate.getMonth();
  const day = formattedDate.getDate();

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();

  if (year === currentYear) {
    if (month < currentMonth) return true;
    else if (month === currentMonth) {
      if (day < currentDay) return true;
    }
  } else return false;

  if (year < currentYear) return true;
  else return false;
}

function isFutureDate(date) {
  const formattedDate = new Date(date);
  const year = formattedDate.getFullYear();
  const month = formattedDate.getMonth();
  const day = formattedDate.getDate();

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();

  if (year === currentYear) {
    if (month > currentMonth) return true;
    else if (month === currentMonth) {
      if (day > currentDay) return true;
    }
  } else return false;

  if (year > currentYear) return true;
  else return false;
}

function isPastDateCorrected(date) {
  const now = new Date();
  console.log(now);
  return now > new Date(date);
}

console.log(isPastDateCorrected("2021-02-24"));

/* console.log(isPasteDate("2021-02-20")); // true
console.log(isPasteDate("2021-02-25")); // false
console.log(isPasteDate("2021-02-22")); // false

console.log(isFutureDate("2021-02-25")); // true
console.log(isFutureDate("2021-02-20")); // false

console.log(isFutureDate("2021-02-22")); // false */
