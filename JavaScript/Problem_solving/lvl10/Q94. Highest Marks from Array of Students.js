let arr = [{ name: "A", marks: 500 }, { name: "B", marks: 80 }, { name: "C", marks: 7 }]

let name1 = "";
let maxMarks = 0;

for (let obj of arr) {
    if (obj["marks"] > maxMarks) {
        name1 = obj["name"]
        maxMarks = obj["marks"]
    }
}
console.log(name1)