// A design pattern where only one instance of object is created and shared throughout the app


// example without singleton :

const createObject = () => {
  return { count: 10 };
}


console.log("createObject()", createObject())//{ count: 10 }

const obj1 = createObject()//{ count: 10 }
console.log("obj1", obj1);
const obj2 = createObject()//{ count: 10 }
console.log("obj2", obj2)

obj1.count = 30;
console.log("obj1", obj1)//obj1 { count: 30 }

console.log("obj2", obj2)//obj2 { count: 10 }

