function removeConsecutiveDuplicateCharacters(arr){
    let arr2 = []
    for(let i = 0; i<arr.length; i++){
        if(arr[i] === arr[i+1]){
            continue;
        }
        else{
            arr2.push(arr[i])
        }
    }
    console.log(arr2.join(""))
}
removeConsecutiveDuplicateCharacters([1,2,3,4,5,6,1,1,1,1])