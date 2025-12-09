#include<stdio.h>
int main(){
   int n =65; 
   int u;
   scanf("%d",&u);

   for(int i=n; i<=n+u-1; i++){
    for(int j=n; j<=n+u-1; j++){
        printf("%c",j);
    }
    printf("\n");
   }
    return 0;
}