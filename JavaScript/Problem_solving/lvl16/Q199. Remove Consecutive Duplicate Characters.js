function removeConsecutiveDuplicateCharacters(str){
    let arr = str.split("")
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
removeConsecutiveDuplicateCharacters("aaggffdsdbbcc")