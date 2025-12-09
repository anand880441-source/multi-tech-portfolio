var str = "hel1lo123"
var count = 0;
var result = str.split('');

for (let i = 0; i < str.length; i++){
    if (str[i] >= 0 && str[i] <= 9) {
        count++;
    }
}
console.log(count)