// #include<stdio.h>
// int fact(int num){
//     int factorial=1;
//     if(num==0){
//         return 1;
//     }
//     return num*fact(num-1);
// }
// int main()
// {
//     printf("%d",fact(5));
//     return 0;
// }



#include <stdio.h>

int factorial(int num, int fact){

    if(num == 1){
        printf("%d",fact);
        return 0;
    }
    fact = fact*num;
    factorial(num-1, fact);
    return 0;
    
}

int main() {
    int num = 4;
    int fact = 1;

    factorial(num, fact);
    
    return 0;
}




// #include <stdio.h>

// int main() {
//     int num = 4;
//     //4*3*2*1
    
//     int fact = 1;
//     while(num >= 1){
//         fact = fact*num;
//         num--;
//     }
//     printf("%d",fact);
    
    
//     return 0;
// }