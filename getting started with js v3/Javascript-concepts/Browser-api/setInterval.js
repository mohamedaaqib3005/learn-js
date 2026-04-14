

function setInterval() {//(callback fn,timeinterval:millisecond)-->id:number or timeout object
  return setInterval(() => {
    console.log("hi")
  }, 1000);// returns an id which is a number(Browser) or timeout object(Node js)
}


// Flow:
// 1. JS executes setInterval(callback, delay)

// 2. JS extracts:
// - callback function
// - delay (time)
// - type (interval → repeat)

// 3. JS delegates this information to the environment (browser / Node):
// {
//   callback: () => console.log("tick"),
//   delay: 1000,
//   repeat: true
// }

// 4. The timer system:
// - registers the timer
ID: 1
callback: fn
delay: 1000
repeat: true

// - assigns an id (browser: number, Node: Timeout object)

// 5. Timer system starts tracking time

// 6. After delay completes:
// - callback is pushed into the MACROTASK (callback) queue

// 7. Event loop checks:
// - if call stack is empty

// 8. If empty:
// - takes callback from queue
// - executes it

// 9. Since it's setInterval:
// - timer system schedules it again (repeat)



function clearInterval() {//(id:number)-->undefined nothing
  clearInterval(id)
}

//Flow
//when you do clearinterval it removes the id in the timer system
//it stops scheduling of the callback functions

// setInterval = keeps scheduling new executions
// clearInterval = stops scheduling new ones
