// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
    s = s.split(" ")
   const length = s.map((elt)=>elt.length)
   return Math.min(...length)
 }