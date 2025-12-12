function secondLargest(arr) {
    let largest = arr[0];
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] < largest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest;
}

console.log(secondLargest([10, 5, 8, 20]));  



// let arr = [90,1, 2, 3, 4, 5, 65, 50]
// arr.sort((a,b)=>a-b)
// console.log(arr[arr.length-2])