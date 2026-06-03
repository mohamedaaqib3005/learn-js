
function printMax(a, b) {
  console.log(Math.max(a, b));
}

printMax(2, 3)
undefined

// Referencial Transparency




function alwaysError() {
  throw new Error("always Error");

}


function alwaysCatch(fn) {
  try {
    fn()
  }
  catch (err) {
    console.log("caught u");
  }
}



function alwaysCatch2(fn) {
  try {
    fn()
  }
  catch (err) {
    console.log("caught all");
  }
}
alwaysCatch(alwaysError)
alwaysCatch2(alwaysError)

}
const arr = [];
const arr2 = arr;
arr2.push(1, 2);
console.log(arr, arr2);

arr = [];
arr2 = arr;
arr2.append(1)
arr2.append(2)
print(arr, arr2)


const arr = [];
function arrayPusher(arr) {
  const arr2 = arr;
  arr2.push(1, 2);

}
arrayPusher(arr)
console.log(arr,);