// copy which creates a copy of even nested values of nested arrays and object


const obj1 = {
  name: "Aaqib",
  age: 28,
  profession: {
    domain: "software engineering"
  }
};


const obj2 = structuredClone(obj1);//deepcopies the source returns copy

console.log("obj2", obj2);
obj2.age = 33;// push is not valid object method
// changes only copy
obj2.profession.domain = "mechanical engineering";

console.log(obj1.profession.domain); // software engineering
console.log(obj2.profession.domain); // mechanical engineering

console.log(obj2);
console.log("obj", obj1)

// The original remains unchanged because structuredClone() creates an independent copy of the nested object as well.

// Recursive approach:

function makeDeepCopy(input) {
  // if its not array or object return the input
  if (typeof input !== "object" || input === null) return input;  // check if the copiedvalued is an array
  let deepCopy = Array.isArray(input) ? [] : {};
  var keys = Object.keys(input) // returns an array of keys

  for (let i = 0; i < keys.length; i++) {
    deepCopy[keys[i]] = makeDeepCopy(input[keys[i]]);
  }



  return deepCopy;
}