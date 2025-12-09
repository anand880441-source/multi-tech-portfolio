// Q10. Write a program using a for loop to print the cube of numbers from 1 to 5.

#include <stdio.h>
int main(){

    int num;
    for(int a = 1;a<=5;a++){
        num = a*a*a;
        printf("%d\n",&num);
    }
    return 0;
}