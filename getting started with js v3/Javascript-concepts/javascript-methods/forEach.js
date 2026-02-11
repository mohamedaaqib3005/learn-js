// Function Signature
// forEach: (callbackFn, thisArg?) → undefined
// callbackFn(element, index, array)


function callbackFn(element, index, array) {
  console.log("value:", element, "index:", index);
}

function myOwnForEach(arr, callbackFn) {
  for (let i = 0; i < arr.length; i++) {
    callbackFn(arr[i], i, arr);
  }
}

const arr = [1, 2, 3, 4, 5]
myOwnForEach(arr, callbackFn)





// const arr = [1, 2, 3, 4, 5]
// let sum = 0;

// arr.forEach((num) => {

//   sum = num + sum;

// }
// )
// console.log(sum); // taking this out logs the final value instead of all values of total iterations

// const arr = [1, 2, 3, 4, 5]
// let sum = 0;

// return arr.forEach((num, i, array) => {

//   sum = num + sum;
//   if (i === array.length - 1)
//     console.log(sum);
// }
// )

// // Notes :

//  Design intent:

// --> Perform side effects

// --> Do NOT transform data

// --> Do NOT accumulate values

// That’s why:

// --> callback return value is ignored

// --> forEach returns nothing