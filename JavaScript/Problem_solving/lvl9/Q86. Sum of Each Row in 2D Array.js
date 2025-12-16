function sum(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++){
        let sum = 0;
        for (let j = 0; j < arr[i].length; j++){
            sum = sum + arr[i][j];
        }
        result.push(sum);
    }
    console.log(result)
}

sum([[1,2,3,4,5,5],[4,5,6,7,8]])