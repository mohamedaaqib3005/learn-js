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


function makeDeepCopy(input) {
  // edgecases take care of input if it is not object and null
  if (typeof input !== "object" || input === null) {
    return input;
  }
  // create an empty array or object
  let deepCopy = Array.isArray(input) ? [] : {};
  // create an array with keys
  let keys = Object.keys(input)
  // loop through the keys
  for (let i = 0; i < keys.length; i++) {
    // create a new key value pair in empty deepcopy and call the same function to get the value of key
    deepCopy[keys[i]] = makeDeepCopy(input[keys[i]]);
  }
  return deepCopy;
}

const obj = {};
obj.self = obj;

makeDeepCopy(obj);
// this will break the code

// The function behaves like this:
// 1. Receives obj.
// 2. Finds the self property.
// 3. input.self points to obj again.
// 4. Calls makeDeepCopy(obj) again.
// 5. Finds self again.
// 6. Calls itself again...
// This continues until JavaScript throws a Maximum call stack size exceeded error.

// This is called a circular reference.

const obj = {};

obj.self = obj;

console.log(obj.self === obj); // TRUE