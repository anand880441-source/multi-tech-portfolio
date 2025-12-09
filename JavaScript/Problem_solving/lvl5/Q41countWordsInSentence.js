var str = "Hello     world   this   is   a   test";
var result = str.split(" ");
var count = 0;

for (var i = 0; i < result.length; i++) {
    if (result[i].length > 0) { 
        count++;
    }
}

console.log(count);