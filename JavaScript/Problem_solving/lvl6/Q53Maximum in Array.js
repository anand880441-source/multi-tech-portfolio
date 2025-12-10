// var arr = [-1, -2, -3];
// var max = arr[0];

// for (let i = 0; i < arr.length; i++){
//     if (arr[i] > max) {
//         max = arr[i];
//    }
// }
// console.log(max)




// var arr = [1, 2, 3, 9, 80];
// var max = Math.max(...arr);
// console.log(max);



var arr = [1,2,3,4,5,8]

let sortedArr = arr.sort((a, b) => a - b)
let max = sortedArr[sortedArr.length - 1]
console.log(max)