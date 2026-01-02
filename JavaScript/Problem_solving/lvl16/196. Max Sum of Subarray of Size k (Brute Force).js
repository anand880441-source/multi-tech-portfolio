function maxSubarraySumBruteForce(arr, k) {
    let maxSum = -Infinity;
    for (let i = 0; i <= arr.length - k; i++) {
        let currentSum = 0;
        for (let j = i; j < i + k; j++) {
            currentSum = currentSum + arr[j];
        }
        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
    }
    return maxSum;
}

console.log(maxSubarraySumBruteForce([5, -1, 2, 3], 3));    
