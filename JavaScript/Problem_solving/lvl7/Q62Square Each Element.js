function squElement(arr) {

    var arr2 = [];
    for (var i = 0; i < arr.length; i++) {
        arr2.push(arr[i] * arr[i]);
    }
    console.log(arr2);
}

doubleElement([1, 2, 3, 4, 5, 6]);