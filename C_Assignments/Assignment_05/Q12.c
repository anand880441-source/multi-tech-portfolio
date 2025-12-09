// Q12. Write a program using a for loop to calculate the factorial of a given number.

#include <stdio.h>
int main(){
    int num,factorial = 1;
    for(int a = 1;a<=num;a++){
        factorial = factorial*a;
      }
   printf("%d",factorial);
    return 0;
}