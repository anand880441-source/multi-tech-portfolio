#include<stdio.h>
int main(){
    int p,q;
    printf("Enter Number Row's: ");
    scanf("%d",&p);
    printf("Enter Number Column's: ");
    scanf("%d",&q);
    
    for(int i=1; i<=p; i++){
        for(int j=1; j<=q; j++){
            if(i==1 || j==1 || j==q || i==p){
                printf("%d",j);
            }else{
                printf(" ");
            }
        }
        printf("\n");
    }
    return 0;
}