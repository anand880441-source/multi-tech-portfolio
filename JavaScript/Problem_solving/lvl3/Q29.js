// function gcd(num1, num2){
//     Math.min(num1, num2)  //used to pick smallest number
//     for(i = num1; i>=1; i--){
//         if(num1 % i == 0 && num2 % i == 0){
//             console.log(i)
//             break;
//         }
//     }
// }

// gcd(12, 18)


//2


function gcd(num1, num2){
   
    var min = num1;
    if(num2 < num1){
        var min = num2;
    }
    
    for(i = min; i>=1; i--){
        if(num1 % i == 0 && num2 % i == 0){
            console.log(i)
            break;
        }
    }
}

gcd(12, 18)