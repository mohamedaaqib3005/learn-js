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
    super(color, model, topSpeed)
    this.horsePower = horsePower;

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
    return ` {this.trackMode}? trackmode enabled:trackmode not available`

  }

}


const ferrariCar = new Ferrari("red", "GTR", 98, 720, true);
const lamboCar = new Lamborghini("black", "Aventador", 90, 920, "trackmode");

console.log(ferrariCar);
console.log(lamboCar);