"use strict"
// using classes
class Singleton {
  static #instance = null;
  constructor() {
    if (Singleton.#instance) {
      return Singleton.#instance;
    }
    this.count = 10;
    Singleton.#instance = this;
  }

}

// console.log("instance", Singleton.#instance)//cannot access

const obj1 = new Singleton()
console.log("obj1", obj1)
const obj2 = new Singleton()
console.log("obj2", obj2)
obj1.count = 50;
console.log("obj1", obj1)//{ count: 50 }
console.log("obj2", obj2)//{ count: 50 }
console.log(obj1 === obj2)// true

// Learnings :
// Always have variables inside the class