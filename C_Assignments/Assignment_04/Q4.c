// Write a program to input an integer (assumed between 100 and 999) and check if the sum of its digits is divisible by the product of its digits. 
// Handle zero digits carefully to avoid division by zero.

#include <stdio.h>
int main(){
    int num,d1,d2,d3;
    printf("Enter number (assumed between 100 to 999) : ");
    scanf("%d",&num);
    int total;
    int product;

    d1 = num/100;
    d2 = (num/10)%10;
    d3 = num%10;

    total = d1 + d2 + d3;
    product  = d1*d2*d3;

    if(product == 0){
        printf("Division is not possible.\n");
    }

else{
    if(total%product == 0){
        printf("The sum of its digits is divisible by the product of its digits.\n");
    }
    else {
        printf("The sum of its digits is NOT divisible by the product of its digits.\n");
    }
    }
  
    return 0;
}