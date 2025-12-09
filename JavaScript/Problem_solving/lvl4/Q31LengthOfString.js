// function lengthOfString(str){
//     str.split("")
//     let count = 0;
    
//     for(let i = 0; i<=str.length - 1; i++){
//         count++
//     }
//     console.log(count)
// }

// lengthOfString("JavaScript")



function lengthOfString(str){
    let count = 0;

    while(str[count]){
        count++;
    }

    console.log(count)
}

lengthOfString("JavaScript")