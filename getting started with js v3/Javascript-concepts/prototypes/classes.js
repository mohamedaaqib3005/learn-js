// function Vehicle() { }

// Vehicle.prototype.move = function () {
//   return "Vehicle is moving";
// };

// function Car() { }
// Car.prototype = Object.create(Vehicle.prototype);

// Car.prototype.drive = function () {
//   return "Car is driving";
// };

// function Maruti800() { }
// Maruti800.prototype = Object.create(Car.prototype);

// const m800 = new Maruti800();


class Vehicle { // equivalent to function Vehicle() {}
  move() { // equivalent to Vehicle.prototype.move = function () { return "Vehicle is moving"};
    return "Vehicle is moving"
  }
}

class Car extends Vehicle {  // equivalent to Car.prototype = Object.create(Vehicle.prototype);
  drive() {
    return "Car is driving"
  }
}

class Maruti800 extends car {

}


const m800 = new Maruti800();

// Summary :
//In JavaScript, class is syntactic sugar over constructor functions and prototypes; it creates a function, not an object.