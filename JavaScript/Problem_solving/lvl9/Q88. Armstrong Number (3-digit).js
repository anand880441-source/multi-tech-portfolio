// function armstrongNumber(num) {
//     let arr = num.toString().split(""); 
//     let n = arr.length;  

//     let result = arr.reduce((acc, value) => {
//         return acc + Math.pow(Number(value), n);  
//     }, 0); 

//     if (result === num) {
//         console.log(`${num} is an Armstrong number`);
//     } else {
//         console.log(`${num} is not an Armstrong number`);
//     }
// }

// armstrongNumber(407);



function armstrongNumber(num) {
    let original = num;
    let sum = 0;
    let numberOfDigits = 0;

    let temp = num;
    while (temp > 0) {
        temp = Math.floor(temp / 10);
        numberOfDigits++;
    }
    temp = num;

    while (temp > 0) {
        let digit = temp % 10; 
        sum = sum + (temp%10)**numberOfDigits;
        temp = Math.floor(temp / 10);  
    }

    if (sum === original) {
        console.log(`${original} is an Armstrong number`);
    } else {
        console.log(`${original} is not an Armstrong number`);
    }
}

armstrongNumber(407);