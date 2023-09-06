export function convert(n: string): string {
    // ...Convert integers given as string into ASCII uppercase letters...
    let newArr = []
    let scii = []
    for(let i = 0; i < n.length; i++){
      newArr.push(parseInt(n[i] + n[i+1]));
      i += 1
    }
    for(let x of newArr){
       scii.push(String.fromCharCode(x))
    }
    return scii.join("")
  }
  
  console.log(convert('658776'))
  console.log(convert('73327673756932858080698267658369'))