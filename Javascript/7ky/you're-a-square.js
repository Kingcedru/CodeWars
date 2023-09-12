var isSquare = function(n){
    if(n < 0){
      return false
    }
    if(n == 0 || n == 1){
      return true
    }
    return Math.sqrt(n) !== n && Math.sqrt(n) === Math.floor(Math.sqrt(n)) ? true : false
}