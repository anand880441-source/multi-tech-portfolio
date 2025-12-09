// var marks = 8;
// var grade;

// switch(true){
//     case (marks>= 90 && marks<=100): grade = "A"
//     break;

//      case (marks>= 80 && marks<=89): grade = "B"
//     break;

//      case (marks>= 70 && marks<=79): grade = "C"
//     break;

//      case (marks>= 60 && marks<=69): grade = "D"
//     break;

//      case (marks>= 0 && marks<=59): grade = "F"
//     break;

//     default: grade = "Your number is incorrect";
// }

// console.log(grade);

var marks = 80;
grade = Math.floor(marks / 10);

switch (grade) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("F");
        break;

    case 6: console.log("D");
        break;
    case 7: console.log("C");
        break;

    case 8: console.log("B");
        break;

    case 9:
    case 10:
        console.log("A");
        break;

    default: console.log("Incorrect number");
}