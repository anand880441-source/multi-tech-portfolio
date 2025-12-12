// function findIndex(arr, value) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === value) {
//             return i;
//         }
//     }
//     return -1;
// }


// console.log(findIndex([10, 20, 30], 20));   
// console.log(findIndex([10, 20, 30], 40));
// console.log(findIndex(["a", "b"], "b")); 



// var arr = [1, 2, 3, 4, 5]
// var value = 1;

// var arr1 = arr.forEach((data, index) => {
//     if (data === value) { 
//     console.log(index)
// }
// })



var arr = [1, 2, 3, 4, 5]
var value = 1;

var index = arr.indexOf(value)

console.log(index)