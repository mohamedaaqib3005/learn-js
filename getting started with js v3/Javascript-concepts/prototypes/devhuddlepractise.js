// class ItalianCars {
// }
// const ferrari = new ItalianCars("ferrari", "2018", "red");
// console.log(ferrari);

//  We cannot pass or assign values like "ferrari", "2018", "red" because there's no constructor to receive and assign them to this.model, this.year, and this.color


// Why constructor is necessary:
// It’s the only place where you can safely initialize instance properties using this.
// It runs automatically when new is used.
// It enables proper inheritance via super().
// It ensures consistent object setup with provided arguments.



// class ItalianCars {
//   this.model = model;
// }

// const car = new ItalianCars();
// console.log(car)
// SyntaxError: Unexpected token '.'


// class ItalianCars {
//  this.model = model;
// }

// const car1 = new ItalianCars("ferrari");
// SyntaxError: Unexpected token '.'

//In JavaScript, you cannot use this like that in a class body.  The class body only allows method definitions (like constructor, method() {}), not arbitrary statements or assignments.

// //Why This Happens:
// this.model = model is an assignment statement.
// Such statements are only allowed inside methods, like the constructor.
// Without a constructor, there's no valid place for this code to run

// ✅ Use this only inside constructor or methods.
// The constructor is the only place for such initialization.

// class ItalianCars {


// }

// const car1 = new ItalianCars("ferrari", "2019", "red")
// console.log(car1)
// car1.model = model;
// car1.year = year;
// car1.color = color;
// //ReferenceError: model is not defined


// class ItalianCars {
//   constructor() {
//     const car1 = new ItalianCars()
//     car1.model = "ferrari";
//     car1.year = "2019"
//     car1.color = "red"
//   }
// }

// console.log(car1)
//ReferenceError: car1 is not defined

// class ItalianCars {
//   factoryFunction() {
//     const car1 = new ItalianCars();
//     car1.model = "ferrari";
//     car2.year = "2019";
//     car3.color = "red";
//   }
// }

// ItalianCars.factoryFunction()
//TypeError: ItalianCars.factoryFunction is not a function
// cannot access factoryfunction () method because it is an instance method


// class ItalianCars {
//   static factoryFunction() {
//     const car1 = new ItalianCars();
//     car1.model = "ferrari";
//     car1.year = "2019";
//     car1.color = "red";
//     return car1;
//   }
// }

// console.log(ItalianCars.factoryFunction())



// class ItalianCars {
//   constructor() {

//   }
// }

// var obj = {
//   name: "Aaqib",
//   age: "27",
//   ask: function () {
//     console.log("my name is ", this.name)
//   }
// }

// function func() {
//   console.log("my name is ", this.name)
// }

// var aaqibobj = {
//   name: "Aaqib",
// }

// console.log(func.call(aaqibobj))
// console.log(obj)
// console.log(obj.ask())


//Normal Function Call
// function show() {
//   console.log(this) // this refers to the global object
// }

// show();


// Object Method Call (Most Important Case)

var obj = {
  name: "Aaqib",
  age: 16,
  getIntro: function () {
    console.log(`my name is ${this.name}
my age is ${this.age}`)
  }
}
// getIntro();
obj.getIntro()
// console.log(this.getIntro())



// // Constructor method
// function Laptop(color) {
//   this.color = color;
// }

// const maruti800 = new Laptop("blue");

// console.log(maruti800);

// Explicit Binding

function Laptop() {
  this.name;
}

var guf = {
  name: "Lenovo",
}

const les = new Laptop("900");
Laptop.call(guf);
console.log(Laptop);

// Arrow function
var obj = {
  name: "Aaqib",
  age: "16",
  func: () => {
    console.log(`hi i m a function ${this.name} ${this.age}`)
  }
}
obj.func()
// hi i m a function undefined undefined
//this = undefined in the case of arrow function