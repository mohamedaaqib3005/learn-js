

let hashmap = {};
for (let num of nums) { // loop over values of nums
  console.log("of loop", num);
  // of loop 1
  // of loop 2
  // of loop 3
  // of loop 6
  // of loop 7
  // of loop 9
}

for (let i in nums) { // loop over indices of nums
  console.log("in loop", i);
  // in loop 0
  // in loop 1
  // in loop 2
  // in loop 3
  // in loop 4
  // in loop 5
}

nums.forEach((num) => console.log("forEach", num)
  // forEach 1
  // forEach 2
  // forEach 3
  // forEach 6
  // forEach 7
  // forEach 9
)

for (let [i, num] of nums.entries()) {
  console.log(`indices and values ${i}, ${num}`);
}

console.log("nums.entries", nums.entries())//nums.entries Object [Array Iterator] {}

console.log('assign', Object.assign({}, nums))//assign { '0': 1, '1': 2, '2': 3, '3': 6, '4': 7, '5': 9 }

