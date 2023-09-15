// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

function findUniq(arr) {
    let obj = {}
    for (let i=0;i<arr.length;i++) { 
    if(obj.hasOwnProperty(arr[i])){
      obj[arr[i]]++
    }
    else{
      obj[arr[i]] = 1
    }
    }
    for(const x in obj){
      if(obj[x] == 1){
        return parseFloat(x)
      }
    }
  }