/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // i dont know much about regular expression , but i got this .replace() wala code in stackoverflow ! 
  //
  str= str.toLowerCase().trim().replace(/[^a-zA-Z0-9]/g, '')

  let reversedStr = str.split('').reverse().join("")

    return str == reversedStr
}

module.exports = isPalindrome;
