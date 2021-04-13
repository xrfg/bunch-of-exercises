/* # 2. TV Class
 * Create a TV class with properties like brand, channel and volume.
 * Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.
 * Add methods to increase and decrease volume. Volume can’t never be below 0 or above 100.
 * Add a method to set the channel randomly. Let’s say the TV has only 50 channels.
 * Add a method to reset TV so it goes back to channel 1 and volume 50.
 * It’s useful to write a status, that returns info about the TV status like: “Panasonic at channel 8, volume 75”.
 */

class TV {
  constructor(brand, channel = 1, volume = 50) {
    this.brand = brand;
    this.channel = channel;
    this.volume = volume;
  }
  addVolume(amount) {
    if (this.volume > 1 && this.volume <= 100) this.volume += amount;
    return this.volume;
  }
  decreaseVolume(amount) {
    if (this.volume > 1 && this.volume <= 100) this.volume -= amount;
    return this.volume;
  }

  randomChannel() {
    this.channel = Math.ceil(Math.random() * 50);
    return this.channel;
  }
  resetTv() {
    this.channel = 1;
    this.volume = 50;
    return this;
  }
  status() {
    return `${this.brand} at channel ${this.channel}, volume ${this.volume}.`;
  }
}

const sicRadical = new TV("Sic Radical", 9);
console.log("the volume is now at", sicRadical.addVolume(30));

console.log(sicRadical.randomChannel());
console.log(sicRadical);
console.log(sicRadical.resetTv());
console.log(sicRadical.status());
