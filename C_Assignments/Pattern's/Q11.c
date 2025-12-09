// #include<stdio.h>
// int main(){
//     int n;
//     scanf("%d",&n);
//     for(int i=1; i<=n; i++){
//         for(int j=1; j<=n-i; j++){
//             printf(" ");
            
//         }
//         for(int k=1; k<=i; k++){
//             printf("%d",k);
//         }
//         printf("\n");
//     }
//     return 0;
// }

#include <stdio.h>
int main() {
    int n;
    printf("Enter Number: ");
    scanf("%d", &n);

    for (int i = 1; i <= n; i++) {
        int num=1;
        for (int k = 1; k <= n; k++) {
            if (k <= n - i) {  
                printf(" ");
            } else {         
                printf("%d",num);
                num++;
            }
        }
        printf("\n");
    }
    return 0;
}