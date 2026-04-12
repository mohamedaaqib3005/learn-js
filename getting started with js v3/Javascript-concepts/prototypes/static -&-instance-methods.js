// class Car {
//   // INSTANCE METHOD
//   drive() {
//     return "Car is driving"
//   }

//   // STATIC METHOD
//   static wheels() {
//     return 4
//   }
// }

// const myCar = new Car()




// function Car() {
//   // constructor (empty because no properties)
// }

// // INSTANCE METHOD (goes on prototype)
// Car.prototype.drive = function () {
//   return "Car is driving"
// }

// // STATIC METHOD (goes on constructor itself)
// Car.wheels = function () {
//   return 4
// }

// const myCar = new Car()


// class Car {
//   drive() {
//     console.log("drive")
//   }

//   static wheel() {
//     return 4
//   }

// }



// const object = new Car;
// console.log(object)


function Car() { }
Car.prototype.drive = function () {
  console.log("drive")
}

Car.wheel = function () {
  return 4
}