var str = "JAVASCrIPT123";
var result = "";

for (var i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);

    if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
        result = result + String.fromCharCode(charCode);
    }
}
console.log(result);