// function lcm(num1, num2) {
//     let max = Math.max(num1, num2); 
    
//     for(i = max; i <= num1 * num2; i++) {
//         if(i % num1 == 0 && i % num2 == 0) {
//             console.log(i);
//             break;
//         }
//     }
// }

// lcm(4, 6); 


//2 

function lcm(num1, num2) {
    var max = num1;
    if(num2 > num1){
        max = num2;
    }
    
    for(i = max; i <= num1 * num2; i++) {
        if(i % num1 == 0 && i % num2 == 0) {
            console.log(i);
            break;
        }
    }
}

lcm(5, 7); 