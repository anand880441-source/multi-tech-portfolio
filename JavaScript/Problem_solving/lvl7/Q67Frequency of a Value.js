// function frequencyCount(arr) {

//     let obj = {};
//     for (let i = 0; i < arr.length; i++) {
//         if (obj[arr[i]]) {
//             obj[arr[i]]++;
//         }
//         else {
//             obj[arr[i]] = 1
//         }
//     }
//     for (let char in obj) {
//         console.log(`${ char }: ${ obj[char]}`)
//     }
// }
// frequencyCount(["a","a","b","f","y","p"]);



// function frequencyCount(arr,value) {

//     var count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == value) {
//             count++;
//         }
//     }
//     console.log(count)
// }
// frequencyCount(["a", "a", "b", "f", "y", "p"], "a");




function frequencyCount(arr,value) {

    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]]++;
        }
        else {
            obj[arr[i]] = 1
        }
    }
    if (obj[value]) {
        return obj[value]
    }
    else {
        return -1
    }
}
console.log(frequencyCount(["a","a","b","f","y","p"], "a"));