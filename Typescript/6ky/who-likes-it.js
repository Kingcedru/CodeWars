// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

export const  likes = (a : string[]) : string => {
    // Checking if array's length is = 1
    if(a.length > 0 && a.length < 2){
      return a[0] + " likes this"
    }
    // Checking if array's length is = 2
    if(a.length > 1 && a.length < 3){
      return a[0] + " and " + a[1] + " like this"
    }
    // Checking if array's length is = 3
    if(a.length > 2 && a.length < 4){
      return a[0] + ", " + a[1] + " and " + a[2]+ " like this"
    }
    // Checking if array's length is grater than 4
    if(a.length > 3){
      return a[0] + ", " + a[1] + " and " + (a.length - 2) + " others like this"
    }
    // Checking if array's length is = 0
    return "no one likes this"
  }