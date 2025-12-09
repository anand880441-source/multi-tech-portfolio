// function pallindrome(str){
//     let str2 = reverse(str);
//     if(str==str2){
//         console.log("Pallindrome");
//     }
//     else{
//         console.log("Not Pallindrome");
//     }
// }

// function reverse(str){
//     let res="";
//     for (let i = str.length - 1; i >= 0; i--) {
//         res= res+str[i];
//     }
//     return res;
// }

// pallindrome("madam")




let str = "madam"
let j = str.length - 1;

let i = 0;

for (; i <= j;) {
    if (str[i] == str[j]) {
        console.log("String is pallindeome")
    }
    else {
        console.log("String is not pallindeome")
    }
    return;
    i++;
    j--;
}