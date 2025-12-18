function automorphicNum(num){
  let length = String(num).length;
  let square = num*num

  if(square%10**length ==num){
    return true
  }
  return false
}
console.log(automorphicNum(25))