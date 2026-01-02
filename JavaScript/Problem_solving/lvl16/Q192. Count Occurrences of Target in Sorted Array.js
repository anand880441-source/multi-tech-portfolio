function countOccurrences(arr, target) {
    function findFirst() {
        let left = 0, right = arr.length - 1;
        let first = -1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (arr[mid] === target) {
                first = mid;
                right = mid - 1;
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
            
        }
        console.log("FIRST " + first);
        return first;
    }

    function findLast() {
        let left = 0, right = arr.length - 1;
        let last = -1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (arr[mid] === target) {
                last = mid;
                left = mid + 1;
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        console.log("LAST " + last)
        return last;
    }

    const firstIndex = findFirst();
    if (firstIndex === -1) return 0;

    const lastIndex = findLast();
    return lastIndex - firstIndex + 1;
}

console.log(countOccurrences([0, 0, 0, 0, 3], 2));



// function occurences(arr, target) {
//   let left = 0,
//     right = arr.length - 1;
//   let first = -1;

//   while (left <= right) {
//     if (arr[left] === target) {
//       // console.log(left)
//       first = left;
//       break;
//     } else {
//       left++;
//     }
//   }
//   let last = -1;
//   while (left <= right) {
//     if (arr[right] === target) {
//       // console.log(right)
//       last = right;
//       break;
//     } else {
//       right--;
//     }
//   }

//   console.log(last - first + 1);
// }

// occurences([4, 2, 2, 2, 3], 2);
