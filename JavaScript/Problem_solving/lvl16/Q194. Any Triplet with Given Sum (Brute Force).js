function twoSum(arr, sum){
    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j<arr.length; j++){
            for(let k = j+1; k<arr.length; k++){
                if(arr[i]+arr[j]+arr[k] == sum){
                console.log(true);
                return;
            }
            }
        }
    }
console.log(false);
}
twoSum([1, 2, 3, 4, 5],9)
