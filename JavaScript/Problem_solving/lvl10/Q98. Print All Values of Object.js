let marks = { marks2: 80, marks1: 90 };
let res = []

for (let mark in marks) {
    res.push(marks[mark])
}
console.log(res)