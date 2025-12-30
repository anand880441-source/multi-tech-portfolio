// function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         let key = arr[i];
//         let j = i - 1;

//         while (j >= 0 && arr[j] > key) {
//             arr[j + 1] = arr[j];
//             j = j - 1;
//         }
//         arr[j + 1] = key;
//     }
//     console.log(arr)
// }

// insertionSort([12, 11, 13, 5, 6]);



// function insertionSort(arr){
//     for(let i = 1; i < arr.length; i++){
//         let current = arr[i];

//         let j;
//         for(j = i - 1; j >= 0 && arr[j] > current; j--){
//             arr[j + 1] = arr[j];
//         }
//         arr[j + 1] = current;
//     }
//     console.log(arr)
// }
// insertionSort([12, 11, 13, 5, 6])


function insertionSort(arr){
    for(let i = 0; i < arr.length-1; i++){
        if(arr[i]>arr[i+1]){
            for(let j = i+1; j >0; j--){
                if(arr[j]<arr[j-1]){
                    [arr[j], arr[j-1]]=[arr[j-1], arr[j]]
                }
                else{
                    break;
                }
            }
        }
    }
    console.log(arr)
}
insertionSort([12,11,25,23,1,2,54,1])