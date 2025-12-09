var arr = [-1, -2, -3];
var min = arr[0];

for (let i = 0; i < arr.length; i++){
    if (arr[i] < min) {
        min = arr[i];
   }
}
console.log(min)