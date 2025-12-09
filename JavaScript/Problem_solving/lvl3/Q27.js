function checkPrime(num){
    let count = 0;
    for(let i=1; i<=num; i++){
        if(num%i == 0){
            count++;
        }
    }
    if(count == 2) return true;
    else return false;
}

function printPrime(num){
    
    let res = [];
    for(let i = 0; i<= num; i++){
        if(checkPrime(i)){  // run when return is true.
            res.push(i);    // push in res
        }
    }
    console.log(res.join(" "))
}

printPrime(20)