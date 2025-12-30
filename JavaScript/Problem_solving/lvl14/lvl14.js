function countSigns(arr) {
  let posi = 0;
  let neg = 0;
  let zero = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      posi++;
    } else if (arr[i] < 0) {
      neg++;
    } else {
      zero++;
    }
  }
  console.log(`Positive: ${posi}, Negative: ${neg}, Zero: ${zero}`);
}
countSigns([1, 2, 3, -2, 0, -4]);

function trippleNum(arr) {
  let arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    arr1.push(arr[i] * 3);
  }
  console.log(arr1);
}
trippleNum([1, 2, 3]);

function absoluteValues(arr) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      arr2.push(arr[i]);
    } else if (arr[i] < 0) {
      arr2.push(Math.abs(arr[i]));
    }
  }
  console.log(arr2);
}
absoluteValues([1, 2, -3]);

// function allEven(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 != 0) {
//     console.log("Odd");
//     return;
//     }
//   }
//   console.log("Even")
// }
// console.log(allEven([2, 2, 4]));

// function atLeastOneEven(arr){
//     for(let i = 0; i< arr.length; i++){
//         if(arr[i] > 0){
//             console.log("postive");
//             return;
//         }
//     }
//     console.log("Negative")
//     // return false
// }
// atLeastOneEven([2,-1])

function po(arr, k) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= k) {
      count++;
    }
  }
  console.log(count);
}
po([2, 10], 10);

function indexof(arr) {
  let max = -Infinity;
  let maxIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      arr[i] = max;
      maxIndex = i;
    }
  }
  console.log(maxIndex);
}
indexof([1, 2, 3]);

function indexof(arr) {
  let min = Infinity;
  let minIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > min) {
      arr[i] = min;
      minIndex = i;
    }
  }
  console.log(minIndex);
}
indexof([1, 2, 3]);

// function containsDuplicate(nums) {
//     const seen = new Set();
//     for (const num of nums) {
//         if (seen.has(num)) {
//             return true;
//         }
//         seen.add(num);
//     }
//     return false;
// };
// console.log(containsDuplicate([1,2,3]))

// function containsDuplicate(nums) {
//     nums.sort((a, b) => a - b);
//     for (let i = 0; i < nums.length - 1; i++) {
//         if (nums[i] === nums[i + 1]) return true;
//     }
//     return false;
// };

// console.log(containsDuplicate([1,2,3,4,5,5]))

function uniqueElements(arr) {
  let arr1 = [];
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      continue;
    } else {
      arr1.push(arr[i]);
    }
  }
  console.log(arr1);
}

containsDuplicate([1, 5, 2, 3, 3, 5, 4, 5, 5, 5, 6]);

function isStrictlyIncreasing(array) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] >= array[i + 1]) {
      return false;
    }
  }
  return true;
}
console.log(isStrictlyIncreasing([1, 2, 2, 3]));

// function negativeNumbersToFront(arr) {
//     const negatives = arr.filter(num => num < 0);
//     const positives = arr.filter(num => num >= 0);
//     return [...negatives, ...positives];
// }
// console.log(negativeNumbersToFront([1,2,3,-1,-2,-3]))

function negativeNumbersToFront(arr) {
  let result = [];
  let positive = [];
  for (let num of arr) {
    if (num < 0) {
      result.push(num);
    } else {
      positive.push(num);
    }
  }
  return result.concat(positive);
}

const example = [10, -5, 3, -2, -1, 8];
console.log(negativeNumbersToFront(example));

function maximumDifference(arr) {
  let max = -Infinity;
  let min = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  console.log(`Maximum Difference : ${max - min}`);
}
maximumDifference([1, 2, 3, 4, 5, 6]);

function elementsAtEvenIndices(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      result.push(arr[i]);
    }
  }
  console.log(result);
}
elementsAtEvenIndices([1, 2, 3, 4, 5]);

function elementsAtOddIndices(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 != 0) {
      result.push(arr[i]);
    }
  }
  console.log(result);
}
elementsAtEvenIndices([1, 2, 3, 4, 5]);

function stringLength3(arr) {
  let result = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string" && arr[i].length > 3) {
      result.push(arr[i]);
      count++;
    }
  }
  console.log(result);
  console.log(count);
}

const words = ["cat", "dog", "apple", "sky", "blue"];
stringLength3(words);

function firstChars(strArray) {
  return strArray.map((str) => str[0]);
}

console.log(firstChars(["apple", "banana", "cherry"]));

function removeEmptyStrings(arr) {
  let result = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (typeof arr[i] === "string" && arr[i] != "") {
  //       result.push(arr[i]);
  //     }
  //   }
  //   console.log(result);

  // let result = arr.filter((value) => {
  //     if(value != ""){
  //         return value
  //     }
  // })
  // console.log(result)

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "") {
      arr.splice(i, 1);
      i = i - 1;
    }
  }
  console.log(result);
}
removeEmptyStrings(["a", "", "b", "", "c"]);

function sumOfEven(arr) {
  // let sum = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] % 2 == 0) {
  //     sum = sum + arr[i];
  //   }
  // }
  // console.log(sum);

  const arr = [1, 2, 3, 4];
  const sum = 0;

  let res = arr.reduce((sum, num) => {
    if (num % 2 == 0) {
      return sum + num;
    } else {
      return sum;
    }
  }, 0);
  console.log(res);
}

sumOfEven([1, 2, 3, 4, 5]);
