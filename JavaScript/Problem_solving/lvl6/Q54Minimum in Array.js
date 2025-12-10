// var arr = [-1, -2, -3];
// var min = arr[0];

// for (let i = 0; i < arr.length; i++){
//     if (arr[i] < min) {
//         min = arr[i];
//    }
// }
// console.log(min)


// var arr = [1, 2, 3, 9, 80];
// var min = Math.min(...arr);
// console.log(min);



var arr = [1, 2, 3, 4, 0, -8]

let sortedArr = arr.sort((a, b) => b - a)
let min = sortedArr[sortedArr.length - 1]
console.log(min)