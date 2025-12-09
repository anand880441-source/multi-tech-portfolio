function num(n){
    var temp = n;
    var count = 0;
    
    while(temp != 0){
        temp = Math.floor(temp/10);
        count++
    }
    console.log(count)
}

num(Math.abs(-125))