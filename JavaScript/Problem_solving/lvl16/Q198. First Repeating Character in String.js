// function firstNonRepeatingCharacter(str) {
//     for (let i = 0; i < str.length; i++) { 
//         if (i !== str.lastIndexOf(str[i])) { 
//             return str[i];
//         }
//     }
//     return null;
// }
// console.log(firstNonRepeatingCharacter("pwisps"))

function firstRepeatingCharacter(str){
    for(let i = 0; i < str.length; i++){
        let present = false;
        for(let j = 0; j < str.length; j++){
            if(i == j){
                continue;
            }
            else if (str[i] == str[j]) {
                present = true;
                console.log(str[i])
                return;
            }
        }
        if (!present) {
            console.log(str[i]);
            return;
        }
    }
    console.log("Every element is repeating")
}
firstRepeatingCharacter("swissi")
