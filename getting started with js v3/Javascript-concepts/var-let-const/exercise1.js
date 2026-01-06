if (true) { // if condition is true
  var a = 10;
  let b = 20;
  const c = 30;
}

console.log(a);
console.log(b);
console.log(c);

// Explanation: var is functional scoped it attaches with a func or becomes a global variable and gets hoisted
// let and const are blocked scoped they cannot be accessed outside the block


// ReferenceError : b is not defined