// js execution errors


// Parsing errors
// syntax errors
function foo() {
  console.log(first)

  // SyntaxError: Unexpected end of input


  let a = 89;
  let a = 78;

  // SyntaxError: Identifier 'a' has already been declared


  //Runtime errors

  // console.log(b)
  // const b = 89;
  // ReferenceError: Cannot access 'b' before initialization

  let a = 5;
  a()
  // TypeError: a is not a function



  if (true) {
    let a = 23;
    var y = 78;
    let z = 56;
  }

  console.log(a, y, z)
  // ReferenceError: a is not defined



  let arr = new Array(-1)//creates a new array object with the arg no of length for ex: new Array (5) creates a new array with a length of 5

// RangeError: Invalid array length