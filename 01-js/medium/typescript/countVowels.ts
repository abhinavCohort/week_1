/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str:string):number {
    // Your code here
    // input :'a man in my house'
    str = str.toLowerCase()
    let countVowel = 0
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    for (const letter of str) {
        vowels.has(letter) && countVowel++
    }
    return countVowel

}

const result = countVowels("a man in my house")
console.log(result)
module.exports = countVowels;