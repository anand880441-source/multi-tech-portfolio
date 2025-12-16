function perfectSquare(num) {
    let result = Math.sqrt(num);
    if (result * result === num) {  
        console.log(`${num} is a perfect square (${result} × ${result})`);
    } else {
        console.log(`${num} is not a perfect square`);
    }
}
perfectSquare(14)