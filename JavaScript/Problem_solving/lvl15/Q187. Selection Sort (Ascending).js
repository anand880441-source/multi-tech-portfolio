// function selectionSort(arr){
//     for(let i=0; i<arguments.length; i++){
//         let max = -Infinity
//         let index = 0;
//         for(let j = 0; j<arr.length-1; j++){
//             if(max<arr[j]){
//                 max=arr[j]
//                 index = j;
//             }
//         }
//         [arr[index], arr[arr.length-1-i]] = [arr[arr.length-1-i],arr[index]]
//     }
//     console.log(arr)
// }

// selectionSort([3,1,4,2])


function selectionSort(arr){
    for(let i = 0;i<arr.length;i++){
        let tab=i
        for(let j=i;j<arr.length;j++){
            // if(arr[j]>arr[tab]){
            //     tab=j
            // }
            if(arr[j]<arr[tab]){
                tab=j
            }
        }
        if(tab!=i)[arr[i],arr[tab]]=[arr[tab],arr[i]]
    }
    console.log(arr);
}
selectionSort([2,4,3,1,5,7,2,4232,1,35,543,623,2,31,52,5,234,23,52,3245,3242,5])