// Q5. Write a program using a for loop to print the multiplication table of a given number.

#include <stdio.h>
int main(){
    int num;
    printf("Enter Number : ");
    scanf("%d",&num);
    int table;
     for(int a=1;a<=10;a++){
        table = a*num;
        printf("%d\n",table);
        
    }

    return 0;
}