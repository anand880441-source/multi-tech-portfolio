// function vowels(str) {
//     let str2 = "aeiouAEIOU";

//     let count = 0;

//     for (let i = 0; i < str.length; i++) {
//         if (str2.includes(str[i])) {
//             count++;
//         }
//     }
//     console.log(count)
// }

// vowels("javascript")


function vowels(str){
    let obj = {
        i:1,a:1,e:1,o:1,u:1,A:1,E:1,I:1,O:1,U:1
    }
    
    let count = 0;
    
    for(let char of str){
        if(obj[char] == 1){
            count++;
        }
    }
    console.log(count)
}

vowels("hello")