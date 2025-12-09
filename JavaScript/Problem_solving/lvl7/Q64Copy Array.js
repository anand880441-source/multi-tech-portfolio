// function reverseArray(arr) {
//     const reversed = [];

//     for (let i = 0; i < arr.length; i++) {
//         reversed.push(arr[i]);
//     }

//     return reversed;
// }

// console.log(reverseArray([1, 2, 3, 4]));


function copyArr(arr) {
    let copy = [...arr];
    console.log(arr);
    console.log(copy)
}

copyArr([1,2,3,4,5,6])