// Q7. Write a program using a for loop to print the sum of numbers from 1 to 50.

#include <stdio.h>
int main(){
   int num = 0;
   for(int a = 1; a<=50 ; a++){
        num = num + a;
   }
   printf("%d",num);
    return 0;
}