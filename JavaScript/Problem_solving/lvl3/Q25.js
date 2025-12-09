function palindromeNumber(num) {

    let num2 = num;
    let digit = 0;
    let rev = 0;
    let sing = Math.sign(num);
    num = Math.abs(num);
    while (num != 0) {
        digit = num % 10;
        rev = rev * 10 + digit;
        num = Math.floor(num / 10);

    }
    if( num2 == rev){
        console.log("True");
    }
    else{
        console.log("False");
    }
}
palindromeNumber(121);