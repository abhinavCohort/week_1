/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1:string, str2:string) {
//anagram matlab : god/dog aur rehab/bahre , alla/lala
//sabse pahle check karenge : dono string same naa ho ,
//fir check karenge ki dono same length ke hai ya nahi 


if(str1.length != str2.length){
  return false
}

 const lowerKeywordArrayStr1:string[] = str1.toLowerCase().split("")
 const lowerKeywordArrayStr2:string[] = str2.toLowerCase().split('')

 //now we will sort it , we have made it array, and we can sort it now ,
 //sort karne se hum usko arrange kar sakte hain , aur agar dono same pattern mein arrange hain to `true` return kar sakte hain !

 const sortedStr1 = lowerKeywordArrayStr1.sort().join("")
 const sortedStr2 = lowerKeywordArrayStr2.sort().join('')

 if(sortedStr1==sortedStr2){
  return true
 } 
else{
  return false
}

//in simpler words : 
//return sortedStr1==sortedStr2
}

module.exports = isAnagram;
