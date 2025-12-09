#include <stdio.h>

void fibo(int a, int b, int n)
{
    if (n == 0)
        return;

    printf("%d ", a);

    fibo(b, a + b, n - 1);
}

int main()
{
    fibo(0, 1, 5);
    return 0;
}



// #include<stdio.h>

// int factorial(int num , int fact){
//     if(num == 0 || num == 1){
//         printf("%d \n",fact);
//         return 0;
//     }
    
//     fact = fact*num;
//     factorial(num-1 , fact);
    
//     return 0;
// }

// int main(){
//     factorial(5, 1);
//     return 0;
// }
