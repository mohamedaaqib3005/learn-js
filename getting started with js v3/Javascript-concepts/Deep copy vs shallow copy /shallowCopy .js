// Copy only top level properties not nested arrays or objects just copy their references

const obj1 = {
  name: "Aaqib",
  age: 28,
  profession: {
    domain: "software engineering"
  }
};

// const obj2 = { ...obj1 }//spread does a shallow copy
// Object.assign(target, source);
const obj2 = Object.assign({}, obj1)

obj2.age = 34;
console.log("obj2", obj2);
console.log("obj1", obj1);


