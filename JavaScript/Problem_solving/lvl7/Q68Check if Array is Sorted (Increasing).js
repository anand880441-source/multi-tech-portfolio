function checkSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}

console.log(checkSorted([1, 2, 3, 4]));
console.log(checkSorted([1, 5, 3, 4]));
