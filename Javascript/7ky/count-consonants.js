// Complete the function that takes a string of English-language text and returns the number of consonants in the string.

// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.


function consonantCount(str) {
    // trying to find consonants in the string
   const conso = str.match(/[bcdfghjklmnpqrstvwxyz]/gi)
   if(conso == null){
    return 0
   }
   return conso.length
  }