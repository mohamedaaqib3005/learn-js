// Class Inheritance

// class ItalianCars {
//   constructor(model, color) {
//     this.model = model;
//     this.color = color;
//   }
// }

// const car1 = new ItalianCars("lamborghini", "yellow");
// console.log(car1)

// class Lamborghini extends ItalianCars {
//   super(model, color);
// }

// const porsche = new Lamborghini("ferrari", "red")

class Car {
  static carCount = 0;
  constructor(color, model) {
    this.color = color;
    this.model = model;
    this.speed = 0;
    Car.carCount += 1;
  }

  brake() {
    this.speed = 0;
  }

  accelerate(targetSpeed) {
    this.speed += targetSpeed;
  }

  static countCars() {
    return Car.carCount;
  }


}
class ItalianCars extends Car {
  constructor(color, model, topSpeed, horsePower) {
    super(color, model,)
    this.horsePower = horsePower;
    this.topSpeed = topSpeed;
  }

  activateSportsMode() {
    return `${this.model} sportsmode activated`
  }

  showPerformance() {
    return `${this.model} has ${this.horsePower}`
  }


  static flag() {
    return "Italian flag"
  }
}


class Lamborghini extends ItalianCars {
  constructor(color, model, topSpeed, horsePower, hasScissorDoors) {
    super(color, model, topSpeed, horsePower);
    this.hasScissorDoors = hasScissorDoors;
  }

  openDoors() {
    return `${this.model} has ${this.hasScissorDoors}`
  }

}


class Ferrari extends ItalianCars {
  constructor(color, model, topSpeed, horsePower, trackMode) {
    super(color, model, topSpeed, horsePower);
    this.trackMode = trackMode;

  }

  enableTrackmode() {
    return this.trackMode
      ? "Trackmode enabled"
      : "Trackmode not available";
  }


}


const ferrariCar = new Ferrari("red", "GTR", 320, 5200, true);
const lamboCar = new Lamborghini("black", "Aventador", 360, 6300, "trackmode");

console.log(ferrariCar);
console.log(lamboCar);

function test(description, expected, actual) {
  if (expected === actual) {
    console.log(`PASS: ${description}`);
  } else {
    console.log(`FAIL: ${description}`);
    console.log(`   Expected: ${expected}`);
    console.log(`   Received: ${actual}`);
  }
}
