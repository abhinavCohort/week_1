/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n:number):number {
    //formula for doing sum is : n*(n+1)/2
    const start = new Date()
    const totalSum = n*(n+1)/2
   const end = new Date()
    const duration:number = ( end as unknown as number) - (start as unknown as  number)
//dividing by 1000 , gives us in seconds
    return duration/1000
}

const result = calculateTime(100000000023493042)
console.log(result)