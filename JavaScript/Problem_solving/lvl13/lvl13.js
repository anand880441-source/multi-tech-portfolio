function middleChar(str) {
  let length = str.length;
  let middle = Math.floor(length / 2);
  let result = "";
  if (length % 2 == 0) {
    result = result + str[middle - 1] + str[middle];
  } else {
    result = result + str[middle];
  }
  console.log(result);
}
middleChar("abcd");

function startWithAora(str) {
  if (str[0] == "a" || str[0] == "A") return true;

  return false;
}
console.log(startWithAora("nan"));

function endsWithexcla(str) {
  if (str[str.length - 1] == "!" || str[str.lengthm - 1] == "!") return true;

  return false;
}
console.log(endsWithexcla("spino!"));

function spaces(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      count++;
    }
  }
  console.log(count);
}
spaces("anand sj");

function removeLeading(str) {
  let newStr = str.trim();
  console.log(newStr);
}
removeLeading("   Hello  ");

function replaceAll(str) {
  const originalString = "Hello??? World?";
  const newString = originalString.split("?").join("!");
  console.log(newString);
}
replaceAll("?");

function conStr(str1, str2) {
  console.log(str1, str2);
  console.log(str1 + " " + str2);
}
conStr("Hello", "world");

function firstWord(str) {
  let firstWord = str.trim().split(" ")[0];
  console.log(firstWord);
}

firstWord("  hello my name is spino");

function lastWord(str) {
  const words = str.trim().split(" ");
  const length = words.length;
  const lastWord = words[length - 1];
  console.log(lastWord);
}
lastWord(" hello my name is Spino ");

function longestSent(sentence) {
  let words = sentence.split(" ");
  let longestWord = "";
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > count) {
      count = words[i].length;
      longestWord = words[i];
    }
  }

  console.log(longestWord);
  // console.log(count);
} 
longestSent("true dkdk dkmkd kmdlc kmdc ");

function smallestSent(sentence) {
  let words = sentence.split(" ");
  let smallestWord = "";
  let count;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length != 0) {
      if (count == undefined) {
        count = words[i].length;
        smallestWord = words[i];
      } else if (count > words[i].length) {
        count = words[i].length;
        smallestWord = words[i];
      }
    }
  }

  console.log(smallestWord);
  console.log(count);
}
smallestSent("   m    ynamei      sspin      ");

function countThe(str) {
  let arr = str.split(" ");
  // console.log(arr)
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "the" || arr[i] === "THE") {
      count++;
    }
  }
  console.log(count);
}
countThe("the cat the dog");

// console.log("hello".search(/[aeiou]/))

function containsVowel(str) {
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] == "a" ||
      arr[i] == "e" ||
      arr[i] == "i" ||
      arr[i] == "o" ||
      arr[i] == "u"
    ) {
      return true;
    }
  }
  return false;
}
console.log(containsVowel("hll"));

function containsVowel(str) {
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= "0" && arr[i] <= "9") {
      return false;
    }
  }
  return true;
}
console.log(containsVowel("hll1"));

function containsVowel(str) {
    for (let i = 0; i < str.length; i++){
        if (!((str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) || (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122))) {
            return false
        }
    }return true
    
}
console.log(containsVowel("hello1"))

function containsNum(str) {
    for (let i = 0; i < str.length; i++){
        if (!((str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) || (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122))) {
            return true
        }
    }return false
    
}
console.log(containsNum("hello1"))


function pangram(str) {
    let arr = str.toLowerCase().split("").sort();
    let ascii = 97;

    for (let i = 0; i < arr.length; i++){
        let check = arr[i].charCodeAt()
        if (check === ascii) {
            ascii++
        }
    }
    console.log(ascii >= 123 ? true : false);
}
pangram("The quick brown fox jumps over a lazy dog")

