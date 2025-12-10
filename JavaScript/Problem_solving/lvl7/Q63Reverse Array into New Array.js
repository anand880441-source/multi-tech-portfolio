function reverseArray(arr) {
    const reversed = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }

    return reversed;
}

console.log(reverseArray([1, 2, 3, 4]));



// var arr = [1, 2, 3, 4, 5, 6, 7]
//let rev = new Array(...arr);
// console.log(rev.reverse())


let arr = [1,2,3,4,5,6]

let i =0;
let j = arr.length-1;

while(i<=j){
    [arr[i],arr[j] = arr[j],arr[i]];
    i++;
    j--;
}
console.log(arr)