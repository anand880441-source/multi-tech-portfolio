function reverseAnumber(num) {

    let digit = 0;
    let rev = 0;
    let sing = Math.sign(num);
    num = Math.abs(num);
    while (num != 0) {
        digit = num % 10;
        rev = rev * 10 + digit;
        num = Math.floor(num / 10);

    }
    rev = rev * sing;
    console.log(rev);
}
reverseAnumber(-1201400000);