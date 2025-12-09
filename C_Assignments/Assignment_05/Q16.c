// Q16. Write a program using a while loop to calculate the sum of numbers from 1 to 50.

#include <stdio.h>
int main(){
    int a = 1;
    int num = 0;
    while(a<=50){
        num = num + a;   
        a++;
    }
    printf("%d\n",num);
    return 0;
}