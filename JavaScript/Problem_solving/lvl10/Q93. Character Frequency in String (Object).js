let name1 = "Anand Suthar"
let arr = name1.split("")

let obj = {}

for (let char of arr) {
    if (obj[char] == undefined) {
        obj[char] = 1;
    }
    else {
        obj[char]++;
    }
}

console.log(obj)