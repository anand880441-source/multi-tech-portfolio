// var arr = [1, 2, 3, 4];
// var count = 0;

// for (let i = 0; i < arr.length; i++){
//     if (arr[i] % 2 != 0) {
//         count++;
//     }
// }
// console.log(count)




function countEvenWithFilter(arr) {
    return arr.filter(num => num % 2 === 1).length;
}

console.log(countEvenWithFilter([2,4,6,9,8,1,5]))
