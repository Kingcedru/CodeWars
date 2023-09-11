function circleArea(radius) {
    if(radius > 0){
       return (radius * radius) * Math.PI
    }
    else{
        throw new Error("This is an error message")
    }
}