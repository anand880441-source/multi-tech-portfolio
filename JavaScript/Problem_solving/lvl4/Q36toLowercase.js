// function toUpperCase(str) {
//     let result = "";
//     for (let i = 0; i < str.length; i++) {
//         let charCode = str.charCodeAt(i);

//         if (charCode >= 65&& charCode <= 90) {
//             result = result + String.fromCharCode(charCode + 32);
//         } else {
//             result = result + str[i];
//         }
//     }
//     console.log(result)
// }

// toUpperCase("123ABC")




var str = "JAVASCRIPT";
var result = "";

for (var i = 0; i<str.length; i++){
    let charCode = str.charCodeAt(i);
    
    if(charCode >=65 && charCode<=90){
        result = result + String.fromCharCode(charCode + 32);
    }
    else{
        result = result + str[i];
    }
}
console.log(result);