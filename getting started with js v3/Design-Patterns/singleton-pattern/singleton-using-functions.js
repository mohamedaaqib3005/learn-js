
// implement singleton pattern

const createObject = () => {
  return { count: 10 };
}


let instance = null;

const getInstance = () => {
  // if there is no instance create a new instance using createObject func
  if (!instance) {
    instance = createObject();
  }
  // if instance is already created use the existing instance
  return instance;
}


const obj1 = getInstance()
console.log("obj1", obj1)
const obj2 = getInstance()
console.log("obj2", obj2)


obj1.count = 30;
console.log("obj1", obj1)//{ count: 30 }
console.log("obj2", obj2)//{ count: 30 }
console.log(obj1 === obj2)//true

