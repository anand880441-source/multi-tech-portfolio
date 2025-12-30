function swapElements(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    return arr;
}
console.log(swapElements([1, 2, 3, 4], 1, 3));