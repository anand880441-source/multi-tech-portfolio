var str1 = "application";
var arr1 = str1.split('');

var arr2 = [];

let obj = {
    i: 1, a: 1, e: 1, o: 1, u: 1, A: 1, E: 1, I: 1, O: 1, U: 1
}

for (let i = 0; i < str1.length; i++) {
    if (obj[str1[i]] != 1) {  
        arr2.push(str1[i]);  
    }
}
console.log(arr2.join(''));  




//if-else

// let str = "JavaScript Programming";
// let result = "";

// for (let i = 0; i < str.length; i++) {
//   let ch = str[i];

//   if (
//     ch !== 'a' && ch !== 'e' && ch !== 'i' && ch !== 'o' && ch !== 'u' &&
//     ch !== 'A' && ch !== 'E' && ch !== 'I' && ch !== 'O' && ch !== 'U'
//   ) {
//     result += ch;
//   }
// }

// console.log(result);



//replace

// let str = "JavaScript Programming";
// let result = str.replace(/[aeiouAEIOU]/g, "");

// console.log(result);



//ascii

// let str = "JavaScript Programming";
// let result = "";

// for (let ch of str) {
//   let code = ch.charCodeAt(0);

//   if (
//     code !== 65 && code !== 69 && code !== 73 && code !== 79 && code !== 85 && // A E I O U
//     code !== 97 && code !== 101 && code !== 105 && code !== 111 && code !== 117 // a e i o u
//   ) {
//     result += ch;
//   }
// }

// console.log(result);



//include

// let str = "JavaScript Programming";
// let vowels = "aeiouAEIOU";
// let result = "";

// for (let ch of str) {
//   if (!vowels.includes(ch)) {
//     result += ch;
//   }
// }

// console.log(result);