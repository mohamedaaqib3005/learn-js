// find the maximum from the provided args and return it

// under the hood it does this
// let max = -Infinity;

// for each number:
//    if number > max
//       max = number


// it does not sort

const numbers = [4, 2, 3, 6, 7, 9, 10, 8];
console.log(Math.max(...numbers))


// Time Complexity: O(n);

// Space Complexity : O(n) because it has to create space for addition n elements in the memory




