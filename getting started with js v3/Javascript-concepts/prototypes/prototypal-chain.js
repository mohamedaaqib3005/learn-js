

const vehicle = {
  move() {
    console.log("run")
  }
}


const car = Object.create(vehicle);

car.drive = function () {
  return this.model + " is driving";
}


const maruti800 = Object.create(car);

maruti800.model = "maruti800"


maruti800.drive()

// When you write: maruti800.drive();  JS internally converts it to: car.drive.call(maruti800);
// Think of .call like saying:
// “Hey function, pretend you belong to THIS object for a moment.”
// call invokes a function immediately and explicitly sets the value of this inside that function.


maruti800.move()

maruti800.hasOwnProperty(drive) // hasOwnProperty : return true if the object has the method & returns false if the object inherits from the parent;

maruti800.hasOwnProperty(move)






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


