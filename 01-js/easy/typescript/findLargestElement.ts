/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement<T extends number[]> (numbers:T):number {
    
    const sortedNumbers = numbers.sort((a,b)=>a-b)
    const lastNumber = sortedNumbers.pop()
    return lastNumber as number
}

 const result = findLargestElement( [3, 7, 2, 9, 1])
 console.log(result)
module.exports = findLargestElement; 