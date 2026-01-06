function demo() {
  // var a = 1; var gets hoisted here
  if (true) {
    // let b = 2  let and const are hoisted  on top of block bcoz they are block scoped .
    // const c = 6
    var a = 1;
    let b = 2;
    const c = 6;
    console.log(b);
    console.log(c);

  }
  console.log(a);
}
demo();


// Explaination : let and const are hoisted to the top of their block, not the function, and remain in the Temporal Dead Zone until initialized.


