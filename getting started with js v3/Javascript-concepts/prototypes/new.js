function Vehicle() { }
Vehicle.prototype.move = function () {
  return "Vehicle is moving";
};

function Car() { }
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.drive = function () {
  return "Car is driving";
};

function Maruti800() { }
Maruti800.prototype = Object.create(Car.prototype);

const m800 = new Maruti800();


// prototypal chain

// m800
//    ↓
// Maruti800.prototype
//    ↓
// Car.prototype
//    ↓
// Vehicle.prototype
//    ↓
// Object.prototype


// const m800 = new Maruti800();

// const temp = {};                          // 1️⃣ create object
// temp.__proto__ = Maruti800.prototype;    // 2️⃣ link prototype
// Maruti800.call(temp);                    // 3️⃣ run constructor
// return temp;                             // 4️⃣ return object


// ONLY JS feature that:

// creates an object

// links it to .prototype

// sets this

// runs initialization logic

// 👉 is the new keyword




//Summary:
// new creates an object, links it to the constructor’s prototype, binds this, and runs the constructor to initialize the instance.


// Use constructor + new when:

// ✅ You need many similar objects
// ✅ Each object needs initial data
// ✅ You want a clear blueprint
// ✅ You’re building domain models (User, Order, Product)

// Example:

// new User(id, email)
// new Order(total, items)
