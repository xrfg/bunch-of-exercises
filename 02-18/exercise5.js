/* # 5. Tick Tock
Rewrite the following code to use the “class” syntax. */

/* const template = "h:m:s";

let hours = date.getHours();
if (hours < 10) hours = "0" + hours;
let mins = date.getMinutes();
if (mins < 10) mins = "0" + mins;
let secs = date.getSeconds();
if (secs < 10) secs = "0" + secs;
let output = template.replace("h", hours).replace("m", mins).replace("s", secs);
console.log(output); */

class Time {
  constructor(template = "h:m:s") {
    this.template = template;
  }
  getTime() {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, "0");
    const mins = date.getMinutes().toString().padStart(2, "0");
    const secs = date.getSeconds().toString().padStart(2, "0");
    return this.template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);
  }
}

const time1 = new Time("1:32:12");
console.log(time1);
