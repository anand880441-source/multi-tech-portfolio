function multipleOf10(num) {
  if (num % 10 == 0) return true;
  else return false;
}
console.log(multipleOf10(10));

function minimumNumber2(num1, num2) {
  if (num1 > num2) return num2;
  else return num1;
}
console.log(minimumNumber2(10, 2));

function minimumNumber3(num1, num2, num3) {
  if (num1 < num2 && num1 < num3) return num1;
  if (num2 < num1 && num2 < num3) return num2;
  else return num3;
}
console.log(minimumNumber3(10, 1, 5));

// function reverseNumberUpto1(num){
//     if(num < 1){
//         return
//     }
//     console.log(num);
//     reverseNumberUpto1(num-1)
// }

// reverseNumberUpto1(5)

function sumOfEven(num) {
  let k = Math.floor(num / 2);
  return k * (k + 1);
}
console.log(sumOfEven(6));

function sumOfOdd(num) {
  let n = Math.floor((num + 1) / 2);
  return n * n;
}
console.log(sumOfOdd(5));

function numDivBy2or3(num) {
  let count = 0;
  for (let i = num; i >= 1; i--) {
    if (i % 2 === 0 || i % 3 === 0) {
      count++;
      // console.log(i)
    }
  }
  console.log(count);
}
numDivBy2or3(10);

function numDivBy2and5(num) {
  let count = 0;
  for (let i = num; i >= 1; i--) {
    if (i % 2 === 0 && i % 5 === 0) {
      count++;
      // console.log(i)
    }
  }
  console.log(count);
}
numDivBy2and5(10);



function perfectNum(num) {
  for (let i = 0; i <= num; i++) {
    var sum = 0;
    if (num % i == 0) {
      sum = sum + i;
    }
  }
  if (num == sum) {
    return true;
  } else {
    return false;
  }
}
console.log(perfectNum(10));


function coPrimeNum(n1, n2){
  let range = Math.min(n1,n2);
  let GCD;
  for(let i = range; i >= 1; i--){
    if(n1%i == 0 && n2%i == 0){
      GCD = i;
      break;
    }
  }
  console.log(GCD == 1)
}
coPrimeNum(8,15)


// function largestDigitNumber(num){
//   let numArr = num.split("")
//   let maxD = numArr[0];

//   for(let i = 0; i < numArr.length; i++){
//     if(numArr[i] > maxD){
//       maxD = numArr[i];
//     }
//     console.log(maxD)
//   }
// }
// largestDigitNumber(7879)

function largest(n){
  let max = 0;
  while(n > 0){
    max = Math.max(max,n%10);
    n = Math.floor(n/10)
  }
  console.log(max)
}
largest(785)


function smallest(n){
  let min = 9;
  while(n > 0){
    min = Math.min(min,n%10);
    n = Math.floor(n/10)
  }
  console.log(min)
}
smallest(785)


function  countEven(num){
  let count = 0;
  while(num > 0){
    if(num%2 == 0){
      count++
    }
    num = Math.floor(num/10)
  }
  console.log(count)
}
countEven(292)



function  countOdd(num){
  let count = 0;
  while(num > 0){
    if(num%2 != 0){
      count++
    }
    num = Math.floor(num/10)
  }
  console.log(count)
}
countOdd(292)



function absoluteDiff(num1, num2){
  return Math.abs(num1 - num2)
}
console.log(absoluteDiff(-5, 5))



function threeDigitNum(num){
  let count = 0;
  while(num > 0){
    count++;
    num = Math.floor(num/10);
  }
  console.log(count == 3)
}
threeDigitNum(123)


function sumOfSquare(num){
  let sum =0
  for(let i = 1; i<=num; i++){
    sum = sum + i**2
  }
  console.log(sum)
}
sumOfSquare(4)



function sumOfCubes(num){
  let sum =0
  for(let i = 1; i<=num; i++){
    sum = sum + i**3
  }
  console.log(sum)
}
sumOfCubes(2)


function harshadNumber(num){
  let sum = 0;
  let temp = num;
  while(num > 0){
    sum = sum + temp%10;
    temp = Math.floor(temp/10)
  }
  console.log(num % sum == 0)
}
harshadNumber(12)