// //while loop
// //print numbers 1 to 10
// const printNumbers = () => {
//   let n = 0;
//   while (n <= 10) {
//     console.log(n)
//     n++;
//   }
// }

// printNumbers()


// // // Flow :
// // Function is called
// // Function is executed from line 1 of func body
// // Checks if it satisfies the condition if yes then enter the loop
// // Go back to again condition to check if condition is satisfied after first iteration
// // if the condition is always met it doesnt come out of the loop and becomes an infinite loop
// // Function only runs once unless it meets a base case or just keep running loop

// const countDown = () => {
//   let n = 10;
//   while (n > 0) {
//     console.log(n)
//     n -= 1;
//   }

// }

// countDown()

// const arr = [1, 2, 3, 4, 5]
// const logArrayElements = () => {
//   let i = 0;
//   while (i < arr.length) {
//     console.log("arrayelements", arr[i])
//     i++;
//   }

// }

// logArrayElements()


// const factorialNumbers = (n) => {
//   if (n <= 1) return 1;//base case always need it is the simplest version of the problem which can be solved directly
//   while (n > 0) {
//     return n * factorialNumbers(n - 1)
//   }

// }

// factorialNumbers(5)






// const func = () => {
//   {
//     let n = 2;
//     console.log("n++", n++)//2 returns old value Post increment or Post decrement use for loops or when u need old value
//   }
//   {
//     let n = 2
//     console.log("n+=", n += 1)//3 returns new value
//   }
// }

// func()


//For loop

// const multiplicationTable = () => {
//   // if (n < 0) console.log("invalid input")
//   console.log("multiplication table starts here")
//   for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 12; j++) {
//       console.log(i * j)
//     }
//   }
//   console.log("loop ends here")

// }

// multiplicationTable()
// //Flow:Here’s the complete flow of your `multiplicationTable` function:

// 1. **Function is called** → `multiplicationTable()` starts executing.
// 2. **First line runs** → `console.log("multiplication table starts here")` prints the message.
// 3. **Outer loop starts** → `i = 1`.
// 4. **Inner loop runs** → `j` goes from `1` to `12`, printing `1×1`, `1×2`, ..., `1×12`.
// 5. **Inner loop ends** → returns control to outer loop.
// 6. **Outer loop increments** → `i = 2`.
// 7. **Inner loop runs again** → prints `2×1`, `2×2`, ..., `2×12`.
// 8. This repeats until `i = 10`.
// 9. **Outer loop ends** → `i = 11`, condition `i <= 10` fails → loop exits.
// 10. **Next line runs** → `console.log("loop ends here")` executes.
// 11. **Function ends** → no more code to run.

// ✅ After nested loops finish, execution continues to the **next line in the function**, not back to the top.

// const triangularPattern = () => {
//   for (let i = 1; i < 6; i++) {
//     let line = "";
//     for (let j = 1; j <= i; j++) {
//       line += j
//     }
//     console.log("line", line)
//   }
// }

// triangularPattern()



const triangularPattern = () => {
  for (let i = 1; i < 6; i++) {
    let line = "1";

    console.log(line.repeat(i))
  }
}

triangularPattern()
//Flow:
//Function is called
//Function body starts to execute
//Outer loop starts Iterating through rows of a library
//and each book is the Inner loop
//You cant go to another rows unless iterate through all books in that row
// But in this case the inner loop has a condition cannot go more than the nth book for nth row so only iterates till there
// For each  i value a line variable is declared and iterated through inner loop
// and for each j value is added in the line variable
// After it comes out of the inner loop
// line is logged for each i
// Next moves to  i= 2
// and so on