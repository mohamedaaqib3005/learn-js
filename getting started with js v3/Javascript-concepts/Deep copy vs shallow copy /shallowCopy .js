// A shallow copy copies top-level properties into a new object.
// Nested objects and arrays are shared through their references.
// Mutating a shared nested object or array also affects what the original sees.

const obj1 = {
  name: "Aaqib",
  age: 28,
  profession: {
    domain: "software engineering"
  }
};

// const obj2 = { ...obj1 }//spread does a shallow copy
// Object.assign(target, source);
const obj2 = Object.assign({}, obj1);

obj2.age = 34;
// obj2.profession = "mechanical engineer" // it changes only reference of obj2.profession
obj2.profession.domain = "ece"
console.log("obj2", obj2);
console.log("obj1", obj1);




const obj = {
  name: "Aaqib",
  age: 28,
  profession: {
    domain: "software"
  }
}

const objw = obj;
// Copies the reference value, so both variables point
// to the same object. Mutating the object through objw
// is also visible through obj.console.log("obj", obj);
// Remember: const prevents reassignment of the variable, not modification of the object's properties.
// const obj = objw; // ❌ ReferenceError
// objw = {}; // ❌ TypeError: Assignment to constant variable
// objw.age = 35; // ✅ Valid
// // const objw = obj; // ✅ Valid

console.log("objw", objw);
objw.profession.domain = "generics"

console.log("obj", obj);
console.log("objw", objw);
