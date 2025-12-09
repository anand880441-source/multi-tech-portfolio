// Write a program to input three integers and check if their product is divisible by 3 but not by 9. If yes, print "Special", else print "Normal".
#include <stdio.h>
int main(){
    int num1,num2,num3;
    printf("Enter 1st number : ");
    scanf("%d",&num1);
    printf("Enter 2nd number : ");
    scanf("%d",&num2);
    printf("Enter 3rd number : ");
    scanf("%d",&num3);
    
    int total = num1 + num2 + num3;
    if(total%3 == 0){
        if(total%9 !=0){
            printf("Special");
        }
        else {
        printf("Normal");
    }
}
    return 0;
}