/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    const start = new Date()
    const totalSum = n*(n+1)/2
   const end = new Date()
   const duration = end-start


   return duration
}

//testing time:
// const result = calculateTime(1009172386543)
// console.log(result)


// ~~~~~~~~~~~~~~~~~~~~~~~~
// i am confusing here right now because , every time it showing 0 , so i go to internet , and find that , we should 
// use for loop to run `i` time to loop , and divide totalTime to run it via `it` , by this we can find average time .
// we can do it : 


// let precision =1000
// let totalTime = 0
// for (let i=0;i<precision;i++){
//  const start = new Date()
//  const totalSum = n*(n+1)/2
//  const end = new Date()
//  totalTime+= end-start
// }
// const totalComputeTime = totalTime/precision
// console.log(totalComputeTime)
//return totalComputeTime