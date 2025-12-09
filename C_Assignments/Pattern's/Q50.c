#include<stdio.h>
int main(){
    int n;
    printf("Enter Number: ");
    scanf("%d",&n);
    
    int count=15;
    
    for(int i=1; i<=n; i++){
        for(int j=1; j<=i; j++){
            printf("%-3d",count);
            count--;
        }
        printf("\n");
    }
    return 0;
}