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

class Porsche extends Car {
  constructor(color) {
    super(color, "porsche");
  }
}


function carFactory(color, model) {
  let speed = 0;
  return {
    accelerate: function (targetSpeed) {
      this.speed += targetSpeed
      console.log("speed", speed);
    },
    getSpeed: function () {
      return speed;
    },
    color: color,
    model: model,
    speed: speed,
  };


}







const gar = new Car("yellow", "lamborghini")
gar.accelerate(16)
gar["accelerate"](16)
const acc = gar.accelerate
// acc(16);
console.log(Car.countCars())
console.log(gar)


const par = new Porsche("red")
console.log(par)
console.log(Car.countCars())


const batMobile = carFactory("black", "tank")
// batMobile.accelerate(54)
batMobile.accelerate(6)
const bacc = batMobile.accelerate
bacc(34)
gar.bacc = bacc
gar.bacc(45)
console.log("gar", gar);
// batMobile["accelerate"](56)

// console.log(carFactory.countCars())
console.log("batMobile", batMobile)
console.log("getSpeed", batMobile.getSpeed())



