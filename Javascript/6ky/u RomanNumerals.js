function RomanNumerous(roman){
    const Romans = {
        I : 1,
        V:5 ,
        X:10,
    }
   let romanArr = []
   let romanvalues = []
   for(const i of roman){
    if(i === "I" || i === "X" || i === "V"){
        romanArr.push(i)
    }
   }
   const val = Object.values(Romans)
   for(const x of romanArr){
    if(Object.keys(Romans).includes(x))
    {
        romanvalues.push(Romans[x])
    }
   }
   let maximun
    if (romanvalues[0] < romanvalues [1]){
           maximun = romanvalues.reduce((a,b) => b - a) 
        }
    else{
        maximun =  romanvalues.reduce((a,b) => b + a)
    }
    let finalNumbers = []
    for(let s = 0; s < maximun; s++){
        finalNumbers.push(s)
    }
    return finalNumbers
}
console.log(RomanNumerous("0..X"));
console.log(RomanNumerous("0..IV"));
console.log(RomanNumerous("0..III"));



