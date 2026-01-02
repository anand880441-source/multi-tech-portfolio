// function binarySearch(arr, left, right, target) {
//     while (left <= right) {    
//         let mid = Math.floor((left + right) / 2);

//         if (arr[mid] === target) 
//             return true;
//         if (arr[mid] < target) 
//             left = mid + 1;
//         else
//             right = mid - 1; 
//     }
//     return false;
// }

// function twoSum(arr, target) { 
//     arr.sort((a, b) => a - b);  

//     for (let i = 0; i < arr.length; i++) {
//         let complement = target - arr[i];  

//         if (binarySearch(arr, i + 1, 
//                     arr.length - 1, complement))  
//             return true;
//     }
//     return false;
// }


// if (twoSum([0, -1, 2, -3, 1], -2) === true) {
//     console.log("true");
// } else {
//     console.log("false");
// }


function twoSum(arr, sum){
    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j<arr.length; j++){
            if(arr[i]+arr[j] == sum){
                console.log(true);
                return;
            }
        }
    }
    
console.log(false);
}
twoSum([1,2,3,4,5],5)