function binarySearch(arr, target) {
    let i = 0;
    let j = arr.length - 1;

    while (i <= j) {
        let mid = Math.floor((i + j) / 2);
        if (arr[mid] === target) {
            return mid; 
        } else if (arr[mid] < target) {
            i = mid + 1;  
        } else {
            j = mid - 1;  
        }
    }
    return -1;  
}

console.log(binarySearch([1, 3, 5, 7, 9], 5)); 