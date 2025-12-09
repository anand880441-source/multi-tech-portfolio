// #include<stdio.h>
// int main(){
//     int n;
//     scanf("%d",&n);
//     for(int i=66; i<=65+n; i++){
//         for(int j=1; j<=n-i+65; j++){
//             printf(" ");
            
//         }
//         for(int k=65; k<=i-1; k++){
//             printf("%c",k);
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
                printf("%c",'A' + num-1);
                num++;
            }
        }
        printf("\n");
    }
    return 0;
}