// EXERCISE 1 — Object → Object inheritance (no constructors)
// const vehicle = {
//   move() {
//     return "Vehicle is moving";
//   }
// };

// const car = Object.create(vehicle);


// Tasks:

// Call car.move()

// Add stop() to vehicle

// Call car.stop()

// Check:

// car.hasOwnProperty("move");


//solution :


const vehicle = {
  move: function () {
    return "Vehicle is coming"
  }
}

const car = Object.create(vehicle)  // car._proto_ = vehicle


// Task 1
car.move();

// Task 2
vehicle.stop = function () {
  console.log("stop")
}

// Task 3
car.stop();

car.hasOwnProperty("move");
car.hasOwnProperty("stop");





// Things to remember:
// -Objects inherit from objects
// -Functions create prototypes