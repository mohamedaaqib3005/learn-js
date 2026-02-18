// super is a way to call the parent class’s constructor or methods from a child class.
// Base class
class Vehicle {
  constructor(type) {
    this.type = type;
  }

  move() {
    return `${this.type} is moving`;
  }
}


// Child class using super

class Car extends Vehicle {
  constructor(type, brand) {
    super(type);        // equivalent to  Vehicle.call(this, type);
    this.brand = brand;
  }

  drive() {
    return `${this.brand} car is driving`;
  }
}

// Grandchild class

class Maruti800 extends Car {
  constructor() {
    super("Vehicle", "Maruti"); // calls Car → Vehicle
  }
}

// Create instance

const m800 = new Maruti800();

m800.move();   // "Vehicle is moving"
m800.drive();  // "Maruti car is driving"

//Summary :
//super is just a safer, cleaner way of calling the parent constructor or method while keeping this correct.

//Rules of using super
// -> In a derived class, you cannot use this before calling super().

// Use super when:

// ✅ You extend a class
// ✅ You want parent initialization
// ✅ You want to reuse parent logic
// ✅ You want clean inheritance
