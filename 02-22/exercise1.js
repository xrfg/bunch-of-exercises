/* # Age of majority

Let's create a function (using closures) to create an age of majority validator.

The age of majority is the threshold of adulthood as recognized or declared in law. It is the moment when minors cease to be considered such and assume legal control over their persons, actions, and decisions, thus terminating the control and legal responsibilities of their parents or guardian over them. 

Different countries have a different age of majority, so it should be possible to specify the counry (as a short code) we want to check for.

For example, with Germany, where the age of majority is 18:
and then we can use it like so:
## Ages of majority:
​
- Myanmar (MM) - 15
- United Kingdom (GB) - 16
- Germany (DE) - 18
- Canada (CA) - 19
- Japan (JP) - 20 */

function createAgeOfMajorityValidator(countryAgeMajority) {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();

  return function (date) {
    const formattedDate = new Date(date);
    const birthYear = formattedDate.getFullYear(); // year
    const birthMonth = formattedDate.getMonth(); // month
    const birthDay = formattedDate.getDate(); // day of the month
    const age = currentYear - birthYear;

    if (age > countryAgeMajority) return true; // they are over 18
    if (age < countryAgeMajority) return false; // they are under 18

    if (
      age === countryAgeMajority &&
      birthMonth === currentMonth &&
      birthDay < currentDay
    )
      return true;

    if (age === countryAgeMajority && birthMonth > currentMonth)
      return `${false}, ${birthMonth - currentMonth} months to go`;

    if (age === countryAgeMajority && birthMonth === currentMonth) {
      if (birthDay === currentDay) return `${true}, they turn 18 today!`;
      else return `${false}, ${birthDay - currentDay} days to go!`;
    }
  };
}

const MM = 15;
const GB = 16;
const DE = 18;
const CA = 19;
const JP = 20;

const isAgeOfMajorityGermany = createAgeOfMajorityValidator(DE);

console.log(isAgeOfMajorityGermany("2019-11-11")); // false
console.log(isAgeOfMajorityGermany("2003-04-23")); // false, few months to go
console.log(isAgeOfMajorityGermany("2003-02-23")); // false, one more day to go
console.log(isAgeOfMajorityGermany("2003-02-22")); // true, they turn 18 today!
console.log(isAgeOfMajorityGermany("1920-11-11")); // true
