// var arr = [1, 2, 3, 4, 5, 6, 4, 7, 8]
// var arr1 = []

// for (var i = 0; i < arr.length; i++){
//     if (arr[i]%2 != 0) {
//         arr1.push(arr[i])
//     }
// }
// console.log(arr1)



// var arr = [1, 2, 3, 4, 5, 6, 4, 7, 8]

// var arr1 = arr.filter(data => {
//     if (data % 2 != 0) {
//         return data
//     }
// })

// console.log(arr1)



var arr = [1, 2, 3, 4, 5, 6, 4, 7, 8]

for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 == 0) {
        arr.splice(i, 1)
        i=i-1
    }
}

console.log(arr)