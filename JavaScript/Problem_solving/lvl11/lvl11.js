function square(num){
    squ = num*num
    console.log(squ)
}
square(12)


function sum(num1, num2){
    sum = num1 + num2
    console.log(sum)
}
sum(12,12)



function greet(str){
    console.log(`Hello ${str}!`)
}
greet("Spino")



function even(num){
    return num%2 == 0
}
console.log(even(12))



function odd(num){
    return num%2 != 0
}
console.log(odd(12))



function btn1to100(num){
    return num>1 && num<=100
}
console.log(btn1to100(14))



function greater(num1, num2){
    return num1 > num2
}
console.log(greater(12,30))



// function strLength(str){
//     let count = 0;
//     while(str[count]){
//         count++
//     }

//     return arr.length >= 5
// }
// console.log(strLength("pin0"))



function firstChar(str){
    return str[0]
}
console.log(firstChar("spino"))


function lastChar(str){
    return str[str.length - 1]
}
console.log(lastChar("spinod"))


function longerStr(str1,str2){
    if(str1.length > str2.length){
        console.log(str1)
    }
    else if (str1.length == str2.length){
        console.log(str1)
        console.log(str2)
    }
    else{
        console.log(str2)
    }
}
longerStr("anand","and")


function avg(num1,num2,num3){
    return (num1 + num2 + num3)/3
}
console.log(avg(3,6,9))


function signAsText(num){
    if(num > 0) console.log("positive")
    else if(num == 0) console.log("zero")
    else console.log("negative")
}
signAsText(0)



function eligibleVote(age){
    if(age >= 18) return true
    else return  false
}
console.log(eligibleVote(18))



function hourToMinutes(hr){
    return hr*60
}
console.log(hourToMinutes(2.5))


function minutesToseconds(min){
    return min*60
}
console.log(minutesToseconds(2.5))


function celsiusToFahrenheit(temp1){
    return (temp1 * 9/5) + 32
}
console.log(celsiusToFahrenheit(100))


function fahrenheitToCelsius(temp2){
    return (temp2 - 32) * 5/9
}
console.log(fahrenheitToCelsius(32))



function areaOfTringle(base, height){
    return 0.5*base*height
}
console.log(areaOfTringle(10,5))


function areaOfCircle(radius){
    return 3.14 * radius*radius
}
console.log(areaOfCircle(1))

