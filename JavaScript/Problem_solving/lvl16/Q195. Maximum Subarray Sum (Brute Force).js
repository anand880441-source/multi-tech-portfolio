function twoSum(arr){
    let max = -Infinity;
    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j<arr.length; j++){
            if(arr[i]+arr[j]>max){
                max = arr[i]+arr[j]
            }
        }
    }
    
    console.log(max)
}
twoSum([1,2,3,4,5])