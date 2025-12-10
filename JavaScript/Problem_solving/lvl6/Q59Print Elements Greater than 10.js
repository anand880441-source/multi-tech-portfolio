// var arr = [1, 2, 3, -40, 12, 15];


// for (let i = 0; i < arr.length; i++){
//     if (arr[i] > 10 ) {
//         console.log(arr[i])
//     }
// }



function printGreaterThan10Filter(arr) {
    arr.filter(num => num > 10)
        .forEach(num => console.log(num));
}

printGreaterThan10Filter([1,2,2,4,4,5,47,4,1])