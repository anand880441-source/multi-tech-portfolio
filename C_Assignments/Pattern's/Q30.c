#include<stdio.h>
int main(){
    int n;
    printf("Enter Number : ");
    scanf("%d",&n);
 
    for(int i=1; i<=n; i++){
        for(int j=n-i; j>=1; j--){
            printf(" "); 
        }
        for(int k=1; k<=2*i-1; k++){
            printf("%c",'A'+k-1);
        }
        printf("\n");
    }
     for(int i=n-1; i>=1; i--){
        for(int j=n-i; j>=1; j--){
            printf(" "); 
        }
        for(int k=1; k<=2*i-1; k++){
            printf("%c",'A'+k-1);
        }
        printf("\n");
    }
    return 0;
}