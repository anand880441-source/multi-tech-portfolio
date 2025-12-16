let obj = { apple: 50, banana: 20, mango: 30 }
let sum = 0;

for (let value in obj) {
    sum = sum + obj[value]
}
console.log(sum)