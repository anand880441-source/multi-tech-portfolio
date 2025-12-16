let arr = [{ name: "A", age: 17 }, { name: "B", age: 20 }, { name: "C", age: 18 }]

let result = arr.filter((value) => {
    if (value.age > 18) {
        return value
    }
})

console.log(result)
