/* # 4. Employee class
Let’s create an Employee class. The Employee class should have a default company they work for.
The class should expect emplyoee’s first name, last name, and job title. If no title is provided, by default ‘Employee’ is being used. It should create an email account that looks like this: firstname.lastname@company.com
It should be possible to get the full name of the employee.
It should be possible to add one or more phone numbers.
It should be possible to get an email signature that should look something like this:
First Name Last Name
Job Title at Company
---------------
E: email address
T: phone number(s)
The phone number(s) in the signature should be displayed only if there are any. */

class Employee {
  constructor(options) {
    const defaultOptions = {
      company: "Street Rats",
      firstName: null,
      lastName: null,
      jobTitle: "Employee",
    };
    const updatedOptions = {
      ...defaultOptions,
      ...options,
    };
    this.company = updatedOptions.company;
    this.firstName = updatedOptions.firstName;
    this.lastName = updatedOptions.lastName;
    this.jobTitle = updatedOptions.jobTitle;
    this.phoneNumber = [];
  }
  createEmail() {
    return `${this.firstName.toLowerCase()}.${this.lastName.toLowerCase()}@${this.company.toLowerCase()}.com`;
  }
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  addPhoneNumber(...numbers) {
    this.phoneNumber = this.phoneNumber.concat(numbers);
    return this.phoneNumber;
  }
  createSignature() {
    if (this.phoneNumber)
      return `${this.firstName} ${this.lastName}
${this.jobTitle} at ${this.company}
---------------
E : ${this.createEmail()}
T : ${this.phoneNumber}`;
    else
      return `${this.firstName} ${this.lastName}
${this.jobTitle} at ${this.company}
---------------
E : ${this.createEmail()}`;
  }
}

const employeeOne = new Employee({ firstName: "Rebeca", lastName: "Black" }); // how to only give first and last name since the others have defaults?
console.log(employeeOne.createEmail());
// console.log(employeeOne);
console.log(employeeOne.fullName());
console.log(employeeOne.addPhoneNumber(917800170));
console.log(employeeOne.addPhoneNumber(9111111));
// console.log(employeeOne);
console.log(employeeOne.createSignature());
