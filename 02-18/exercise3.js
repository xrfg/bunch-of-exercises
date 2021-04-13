/* # 3. Volume
Write a JavaScript program to get the volume of a cylinder with four decimal places using a class.
Note: Volume of a cylinder : `V = πr^2h` - r is the radius and h is the height of the cylinder. */

// cylinder volume = pi * radiusELEVADO A 2 * height

class Cylinder {
  constructor(radius, height) {
    this.radius = radius;
    this.height = height;
    this.volume = 0;
  }
  volumeCalc() {
    this.volume = Math.PI * Math.pow(this.radius, 2) * this.height;
    return this.volume.toFixed(4);
  }
}

const cylinderOne = new Cylinder(2, 10); // i guess this is cm??? question
console.log(cylinderOne.volumeCalc());
