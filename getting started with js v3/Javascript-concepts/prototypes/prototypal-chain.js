

const vehicle = {
  move() {
    console.log("run")
  }
}


const car = Object.create(vehicle);

car.drive = function () {
  return this.model + " is driving";
}

car.__proto__ === vehicle; // true

// car → vehicle




const maruti800 = Object.create(car);

maruti800.model = "maruti800"

maruti800.__proto__ === car; // true


maruti800.drive()

// When you write: maruti800.drive();  JS internally converts it to: car.drive.call(maruti800);
// Think of .call like saying:
// “Hey function, pretend you belong to THIS object for a moment.”
// call invokes a function immediately and explicitly sets the value of this inside that function.


maruti800.move()



//  maruti800
//    ↓ [[Prototype]]
//   car
//    ↓ [[Prototype]]
// vehicle
//    ↓ [[Prototype]]
// Object.prototype
//    ↓
//  null


maruti800.hasOwnProperty(drive) // hasOwnProperty : return true if the object has the method & returns false if the object inherits from the parent;

maruti800.hasOwnProperty(move)

// same code with constructor

function Vehicle() {
  vehicle.prototype.move = function () {
    return "Vehicle is moving"
  }
}

function Car() {
  Car.prototype = Object.create(Vehicle.prototype)
  Car.prototype.drive = function () {
    return "car is driving"
  }
}


function Maruti800() {
  Maruti800.prototype = Object.create(Car.prototype)

}



const m800 = new Maruti800;

// Maruti800.prototype
//    ↓
// Car.prototype
//    ↓
// Vehicle.prototype
//    ↓
// Object.prototype





// .call Explanation :

// Assume drive is defined like this:

// car.drive = function () {
//   return this.model + " is driving";
// };


// Now execute:

// car.drive.call(maruti800);


// Inside drive:

// this === maruti800; // true


// So this line executes as:

// return maruti800.model + " is driving";


// 🔥 That’s the entire mechanism.


