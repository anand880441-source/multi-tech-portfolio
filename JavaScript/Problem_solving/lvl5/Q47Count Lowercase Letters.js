var str = "HellSo"
var count = 0;
var result = "";

for (let i = 0; i < str.length; i++){
    let charCode = str.charCodeAt(i);

    if (charCode >= 97 && charCode <= 122) {
        count++
    }
}
console.log(count)