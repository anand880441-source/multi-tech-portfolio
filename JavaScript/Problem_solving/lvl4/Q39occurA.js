// function occurA(str){
    
//     let count = 0;
//     for(let i = 0; i<str.length; i++){
//         if(str[i] == "a" || str[i] == "A"){
//             count++;
//         }
//     }
//     console.log(count)
// }

// occurA("Application")




// var str = "Application"
// var count = 0;

// for (var i = 0; i < str.length; i++) {
//     if (str[i] == "a" || str[i] == "A") {
//         count++;
//     }
// }
// console.log(count)



var str = "Application"
var count = 0;
let arr = str.split('');

arr.forEach((char) => {
    if (char == "a" || char == "A") {
        count++;
    }
});
console.log(count);