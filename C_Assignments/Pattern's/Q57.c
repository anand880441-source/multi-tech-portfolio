#include <stdio.h>
int main() {
    int n;
    printf("Enter Number: ");
    scanf("%d", &n);

    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n; j++) {
            int left = j-1;
            int right = n-j;
            int top = i-1;
            int bottom = n-i;
            
            if(left<=right && left<=top && left<=bottom){
                printf("%d",left+1);
            }
            else if(right<=left && right<=top && right<=bottom){
                printf("%d",right+1);
            }
            else if(top<=left && top<=right && top<=bottom){
                printf("%d",top+1);
            }
            else{
                printf("%d",bottom+1);
            }
        }
        printf("\n");
    }
    return 0;
}