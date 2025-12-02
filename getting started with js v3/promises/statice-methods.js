const biryani = new Promise((resolve) => {
  setTimeout(() => { resolve("biryani ready") }, 200)
})


const juice = new Promise((resolve) => {
  setTimeout(() => { resolve("juice ready") })
})


const desert = new Promise((resolve) => {
  setTimeout(() => {
    resolve("desert ready")
  }, 200)
})


Promise.all([biryani, juice, desert])
  // If any one fails, the whole thing fails.

  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err)
  });


Promise.race([biryani, juice, desert])
  // Whichever order finishes first — success or failure.
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err)
  });

Promise.any([biryani, juice, desert])
  // Ignores failures.Returns first fulfilled promise only.
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err)
  });


Promise.allSettled([biryani, juice, desert])
  // Give me the status of everything, success or fail.

  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err)
  });


