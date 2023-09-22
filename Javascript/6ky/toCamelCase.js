// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str){
    if(str.length === 0){
      return ''
    }
    str = str.split("")
   for(let x = 0; x < str.length; x++){
    if(str[x] === "-" || str[x] === "_"){
      str.splice(x,2,str[x+1].toUpperCase())
    }
   }
   return str.join("")
  }
  console.log(toCamelCase(''))
  console.log(toCamelCase("the_stealth_warrior"))
  console.log(toCamelCase("The-Stealth-Warrior"))
  console.log(toCamelCase("The_Stealth-Warrior"))
  console.log(toCamelCase("A-B-C"))