#include<stdio.h>
int main(){

    int n;
    printf("Enter Number : ");
    scanf("%d",&n);

    for(int i=1; i<=n; i++){
        for(int j=1; j<=i; j++){
            printf("%c ", 'A' + j -1);
        }
        for(int k=i-1; k>=1; k--){
            printf("%c ", 'A' + k -1);
        }
        printf("\n");
    }
    return 0;
}