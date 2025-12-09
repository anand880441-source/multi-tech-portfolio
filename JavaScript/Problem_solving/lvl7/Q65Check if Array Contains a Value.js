function findValue(arr) {
    let value = 2;

    for (let i = 0; i < arr.length; i++){
        if (arr[i] == value) {
            console.log("True")
        }
    }
}

findValue([1,2,5,6])