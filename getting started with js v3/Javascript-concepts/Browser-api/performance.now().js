// console.log(document.timeline.currentTime)



console.log(performance.now())//23.059635
// Time from page load
// performance.now() = 0 is the moment the old page is finally gone and the browser begins the "travel" to the new page.
const t1 = performance.now()
const t2 = performance.now()
console.log(t2 - t1)//0.0009569999999996526 here it means difference in execution time
// MDN performance.now():

//     The performance.now() method returns a high resolution timestamp in milliseconds.It represents the time elapsed since Performance.timeOrigin

// MDN document.timeline.currentTime

//     This timeline expresses the time in milliseconds since Performance.timeOrigin.

// Web Animations:

// Furthermore, since the time values of the default document timeline have a zero offset from the time origin, document.timeline.currentTime will roughly correspond to Performance.now()

// console.log(performance.now(), document.timeline.currentTime)