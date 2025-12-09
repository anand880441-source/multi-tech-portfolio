function productOfDigits(num){
    var product = 1;
    var total;
    for (var i = num; i > 1; i = i / 10){
        total = Math.floor(i%10);
        product = product * total;
    }
    console.log(product);
}

productOfDigits(454);