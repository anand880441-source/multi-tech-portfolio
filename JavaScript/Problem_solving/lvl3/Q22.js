function sumOfDigits(num){
    var sum = 0;
    var total;
    for (var i = num; i > 0; i = i / 10){
        total = Math.floor(i%10);
        sum = sum + total;
    }
    console.log(sum);
}

sumOfDigits(551);