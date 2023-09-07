// Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'
// (Use the English alphabet with 26 letters!)

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!

export function findMissingLetter(array:string[]):string
{
    // creating an array of alphabets
  const alp = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  // getting the values of the first index of array
  const fValue = array[0]
   // getting the values of the last index of array
  const lValue = array[array.length - 1]
  let fIndex
  let lIndex
  let newArr = []
  // getting the index of values in alp 
  fIndex = alp.indexOf(fValue.toUpperCase())
  lIndex = alp.indexOf(lValue.toUpperCase())
  
  // Gettin the values for the alp array from the first index of array
if(fValue === fValue.toLowerCase()){
  for(let x = fIndex; x <= lIndex; x++){
    newArr.push(alp[x].toLowerCase())
}
}
else{
  for(let x = fIndex; x <= lIndex; x++){
    newArr.push(alp[x])
}
}
  
  // checking for the unique value in the array
  
for (const x of newArr){
  if(!array.some(y=>y==x))
  return x
}
  return "false"
}