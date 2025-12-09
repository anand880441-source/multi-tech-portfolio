// function toUpperCase(str) {
//   return str.toUpperCase();
// }

// console.log(toUpperCase("hello"));    
// console.log(toUpperCase("Js")); 
// console.log(toUpperCase("123abc")); 


function toUpperCase(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);

        if (charCode >= 97 && charCode <= 122) {
            result = result + String.fromCharCode(charCode - 32);
        } else {
            result = result + str[i];
        }
    }
    console.log(result)
}

toUpperCase("123abc")