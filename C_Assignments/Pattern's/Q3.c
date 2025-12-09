#include<stdio.h>
int main(){
    int u;
    scanf("%d",&u);
   
    for(int i=0; i<=u; i++){
        printf("%c",'A' + i);
    }
    return 0;
}