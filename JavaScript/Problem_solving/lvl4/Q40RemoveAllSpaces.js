// var str = "Hello World";

// var rmv = str.split(' ');

// var result = "";

// console.log(result + rmv.join(""));




var str = "hello world";

var result = "";

for (let i = 0; i < str.length; i++){
    if (str[i] == " ") {
        continue;
    }
    result = result + str[i];
}
console.log(result);