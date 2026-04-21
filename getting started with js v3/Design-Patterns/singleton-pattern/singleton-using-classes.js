
// using classes
let instance = null;
class singleton {
  constructor() {
    if (instance) {
      return instance;
    }
    this.count = 10;
    instance = this;
  }

}

const obj1 = new singleton()
console.log("obj1", obj1)
const obj2 = new singleton()
console.log("obj2", obj2)
obj1.count = 50;
console.log("obj1", obj1)//{ count: 50 }
console.log("obj2", obj2)//{ count: 50 }
console.log(obj1 === obj2)// true