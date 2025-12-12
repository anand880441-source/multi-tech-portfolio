// function reverseArray(arr) {
//     const reversed = [];

//     for (let i = 0; i < arr.length; i++) {
//         reversed.push(arr[i]);
//     }

//     return reversed;
// }

// console.log(reverseArray([1, 2, 3, 4]));




// function copyArr(arr) {
//     let copy = [...arr];
//     console.log(arr);
//     console.log(copy)
// }

// copyArr([1,2,3,4,5,6])




// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// var arr1 = arr.map(data => {
//     return data
// })

// console.log(arr1)



var arr = [1, 2, 3, 4, 5]

let copyArr = new Array(...arr)
console.log(copyArr)