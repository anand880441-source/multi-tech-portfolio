// Q9. Write a program using a for loop to print all multiples of 5 between 1 and 50.

#include <stdio.h>
int main(){
    for(int a = 1;a<=50;a++){
        if(a%5 == 0){
            printf("%d\n",a);
        }
    }

    return 0;
}