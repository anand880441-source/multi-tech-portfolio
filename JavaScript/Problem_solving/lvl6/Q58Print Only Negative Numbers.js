// var arr = [1, 2, 3, -4];


// for (let i = 0; i < arr.length; i++){
//     if (arr[i] < 0) {
//         console.log(arr[i])
//     }
// }



function countEvenWithFilter(arr) {
    return arr.filter(num => num<0).length;
}

console.log(countEvenWithFilter([2,4,-6,-9,8,1,-5]))
