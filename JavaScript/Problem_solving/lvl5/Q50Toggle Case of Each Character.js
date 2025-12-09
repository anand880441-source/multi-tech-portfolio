var str = "Anand1";
var result = "";

for (var i = 0; i<str.length; i++){
    let charCode = str.charCodeAt(i);
    
    if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
        if (charCode >= 65 && charCode <= 90) {
            result = result + String.fromCharCode(charCode + 32);
        }
        else if (charCode >= 97 && charCode <= 122) {
            result = result + String.fromCharCode(charCode - 32);
        }
    }
    else {
        result = result + str[i];
    }
}
console.log(result);