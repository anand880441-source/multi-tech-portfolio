// var str = "Hello";
// let rev = str.split('');

// var result = rev.reverse();

// console.log(result.join(''));




// var str = "Hello";
// console.log(str.split('').reverse().join(""));




var str = "hello";
let res = "";

for(var i = str.length -1; i>=0; i--){
    res = res + str[i];
}
console.log(res);