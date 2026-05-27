// // // Determine the output of this code

// if (true) {
//   var a = 10;
//   let b = 20;
//   const c = 30;
// }

// console.log(a);
// console.log(b);
// console.log(c);


// // // var  is functional scoped /global scoped
// // // let /const is blocked scoped
// // // Output :
// // // 10
// // // Reference Error : b is not defined

// // // Reference Error is the type of error which happens when js engine tries to access a reference / variable in the current or accessible outer scope but cannot find it

// // // there is only one error because js engine stops execution immediately as soon as it encounters any uncaught error



// // // // Exercise 2

// {
//   var f = "my name "
//   let h = 78;
//   const g = 30;
// }



// console.log(f);
// console.log(h);
// console.log(g);

// // // // Output :
// // // // 10
// // // // undefined
// // // // undefined



// // // How do u make it work ??


// function function1() {
//   if (true) {
//     let a = 70;
//     var b = 60;
//   }

//   console.log(b, a)
// }

// function1()
// // 60

// // console.log(b, a)

// // ↓
// // evaluate b  → 60 ✅
// // ↓
// // evaluate a  → ReferenceError ❌
// // ↓
// // console.log never runs

// // console.log first evaluates the arguments and then takes them as argument it throws error during the evaluation phase only


// console.log(a)
// let a = 89;
// ❌ ReferenceError: Cannot access 'a' before initialization
// “I found the variable, but it is still inside the Temporal Dead Zone.”
// in this example a is in TDZ



// let count = 1;
// count = 2;

// const limit = 8;
// limit = 0;

// TypeError: Assignment to constant variable.

// const means constant binding not immutable


const obj = {};
obj["name"] = "aaqib"
console.log(obj)


// obj[variable]  it should the key name without ""

obj.name = "baddi"
console.log(obj)


const arr = [];
// arr = [56, 67];
// TypeError: Assignment to constant variable.

arr.push(56, 78)
console.log(arr)



{
  let a = 10;
  const b = 20;
  var c = 30;
}

console.log(a);
console.log(b);
console.log(c);

//30


function test() {
  var x = 100;
  let y = 200;

  console.log(x);
  console.log(y);
}

test();

console.log(x);
console.log(y);

// 100
// 200
// reference error : x is not defined

let a = 1;
function outer() {
  let b = 2;

  function inner() {
    let c = 3;


    console.log(a)
    console.log(b)
    console.log(c)
  }
  inner();
}

outer();
// 1
// 2
// 3

// 1
// 2
// 3

// Why can inner access all the three variables ?
// what is the scope chain ?
//   it is the mechanism of accessing variable  from inner scope to outer variable which is parent scope and then finally global scope



function outer() {

  let secret = "hidden"

  function inner() {
    console.log(secret)
  }

  inner();
}

outer();

console.log(secret);

// "hidden"
// reference error : secret is not defined


let a = 10;

{
  let a = 20;
  console.log(a);
}
console.log(a)
//what is variable shadowing ?
// variable shadow is a phenomenon where the inner variable has the name as the variable present in the outer scope


var x = 1;

function demo() {
  var x = 2;

  if (true) {
    let x = 3;
    console.log(x);
  }

  console.log(x);
}

demo();

console.log(x);
// 3
//2


function first() {
  let a = 10;
}

function second() {
  console.log(a);
}

second();
// reference error
// second cannot access  because a is block scoped and cannot be accessed outside first function block

let name = "Aaqib";

function greet() {
  console.log(name);
}

function test() {
  let name = "Mohammed";
  greet();
}

test();
// Mohammed
// because greet can access name from test scope


{
  console.log(a);
  let a = 5;
}
// because memory for a is created

{
  var x = 10;
}

console.log(x);

{
  console.log(y);
  let y = 20;
}
// reference error : a is not defined
//20

var a = 1;

function test() {
  console.log(a);

  var a = 2;

  console.log(a);
}

test();
//1
// 2


Explain parsing phase
creation phase
execution phase
exact outputs ??

  let a = 1;

function outer() {
  let a = 2;


  function inner() {
    console.log(a)
  }

  inner();
}

outer();
// 2
// lexical scoping ?

function counter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const increment = counter();

increment();
increment();
increment();

//???
























