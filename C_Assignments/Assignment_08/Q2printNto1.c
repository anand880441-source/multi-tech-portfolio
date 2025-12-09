#include<stdio.h>
void printNto1(int num){
    if(num==0){
        return;
    }
    printf("%d ",num);
    printNto1(num-1);
    
}
int main()
{
    printNto1(9);
    return 0;
}