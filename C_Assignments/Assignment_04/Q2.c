// Write a program to input a float representing the pH value (0 to 14) and categorize it:

// Acidic if < 7
// Neutral if == 7
// Basic if > 7 but <= 10
// Strongly basic if > 10 Use if and else–if statements.



#include <stdio.h>
int main(){
    float ph;
    printf("Enter PH value (0 to 14) : ");
    scanf("%f",&ph);
    
if(ph<7){
     printf("Acidic.");
}
else if(ph == 7){
     printf("Neutral.");
}
else if(ph > 7 && ph <= 10){
     printf("Basic.");
}
else if(ph > 10 && ph <= 14){
     printf("Strongly Basic.");
}
else {
    printf("Enter PH value in the range of 0 to 14.");
}
    return 0;
}