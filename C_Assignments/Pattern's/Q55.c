#include <stdio.h>
int main() {
    int n;
    printf("Enter number : ");
    scanf("%d", &n);

    for (int i = 1; i <= n; i++){
        for (int k = 1; k <= n - i; k++){
            printf("  "); 
        }
        for (int j = 1; j <= i; j++){
            printf("%d ", j);
        }
        for (int j = i - 1; j >= 1; j--){
            printf("%d ", j);
        }
        printf("\n");
    }

    for (int i = n - 1; i >= 1; i--){
        for (int k = 1; k <= n - i; k++){
            printf("  ");
        }
        for (int j = 1; j <= i; j++){
            printf("%d ", j);
        }
        for (int j = i - 1; j >= 1; j--){
            printf("%d ", j);
        }
        printf("\n");
    }

    return 0;
}