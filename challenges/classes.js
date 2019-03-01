// 1. Copy and paste your prototype in here and refactor into class syntax.

// ANSWER
// OLD SOLUTION

// function CuboidMaker(attrs) {
//   this.length = attrs.length;
//   this.width = attrs.width;
//   this.height = attrs.height;
// }

// CuboidMaker.prototype.volume = function() {
//   return this.length * this.width * this.height;
// };

// CuboidMaker.prototype.surfaceArea = function() {
//   return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
// };

// CLASS SYNTAX VERSION

class CuboidMaker {
    constructor(attrs) {
    this.length = attrs.length;
    this.width = attrs.width;
    this.height = attrs.height;
    }
    volume() {
      return this.length * this.width * this.height;
    }
    surfaceArea() {
      return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
  }
  
  class CubeMaker extends CuboidMaker{
    constructor(cubeattrs) {
      super(cubeattrs);
    }
    cubeVolume() {
      return this.length * this.width * this.height;
    }
    cubeSurfaceArea() {
      return (this.length * this.width) * 6;
    }
  }
  
  const cuboid = new CuboidMaker({
        length: 4,
        width: 5,
        height: 5
      });
  
  const cube = new CubeMaker({
        length: 8,
        width: 8,
        height: 8
      });

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

console.log(cube.cubeVolume()); // 512
console.log(cube.cubeSurfaceArea()); // 384