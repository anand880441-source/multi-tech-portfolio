// function longestString(arr) {
//     if (arr.length === 0) return null;

//     return arr.reduce((longest, current) => {
//         return current.length > longest.length ? current : longest;
//     });
// }

// console.log(longestString(["hi", "hello", "a"]));      


function length(str){
    let count = 0;
    let i = 0;
    while(str[i]){
        count++
        i++
    }
    return count;
}

function main(arr){
    let n = length(arr)
    let result = "";
    let maxLength = 0;
    for(let i = 0; i < n; i++){
        let currentLength = length(arr[i]);
        if(currentLength>maxLength){
            maxLength = currentLength;
            result = arr[i]
        }
    }
    return result;
}
console.log(main(["anand", "kishan", "arvind"]))