const trim = (str, size) => {
    if(str.length <= size) return str
    if(size <= 3)return str.slice(0,size) + '...'
    if(size > 3) return str.slice(0,size-3)+'...' 
  }

console.log(trim("Creating kata is fun", 14));
console.log(trim("Code Wars is pretty rad", 50))
console.log(trim("He", 1));
console.log(trim("Hey", 1));
console.log(trim("MWPk WEbgT Bdr",3));