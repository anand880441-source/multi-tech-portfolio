function secondSmallest(arr) {
    let largest = arr[0];
    let secondSmallest = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < largest) {
            secondSmallest = largest;
            largest = arr[i];
        } else if (arr[i] < secondSmallest && arr[i] > largest) {
            secondSmallest = arr[i];
        }
    }

    return secondSmallest;
}

console.log(secondSmallest([10, 5, 8, 20]));  