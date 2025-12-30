function kthMaxWithInsertionSort(arr, k) {
    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] < arr[i+1]){
            for(let j = i+1; j > 0; j--){
                if(arr[j] < arr[j-1]){
                    [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
                } else {
                    break;
                }
            }
        }
    }
    
    return arr[k - 1];
}

console.log(kthMaxWithInsertionSort([7, 10, 4, 3, 20, 15], 3));