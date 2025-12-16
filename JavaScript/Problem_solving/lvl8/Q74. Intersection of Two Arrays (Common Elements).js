function intersection2(arr1, arr2) {
    let res = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] == arr2[j]) {
            res.push(arr1[i]);
            i++;
            j++;
        } else if (arr1[i] > arr2[j]) {
            i++;
        } else {
            j++;
        }
    }
    return res;
}

let arr1 = [1, 2, 3, 4, 5, 6, 7]
let arr2 = [3, 4, 5, 6, 7, 8, 9, 1, 2, 3]

console.log(intersection2(arr1,arr2))
