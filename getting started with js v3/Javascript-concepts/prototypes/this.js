// this is a dynamic reference to the object that is currently executing the function.

maruti800.drive();

// Caller → maruti800

// this → maruti800

// So JavaScript executes it as if you wrote:

// car.drive.call(maruti800);


// Meaning:

// “Run drive, but inside it, make this point to maruti800.”  js does it because the methods are meant to operate on objects which call them not on the objects which store them.


const anotherCar = { model: "Swift" };
anotherCar.drive = car.drive;

anotherCar.drive();

// Caller → anotherCar

// this → anotherCar




