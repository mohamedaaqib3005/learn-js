function sumCallback(a, b, callback) {
  let sum = a + b;
  callback(sum);
}

function handlesum(sum) {
  console.log(sum);
}

function gamblesum(sum) {
  sum = sum + 7;
  console.log(sum)
  return sum;
}
sumCallback(1, 2, gamblesum)