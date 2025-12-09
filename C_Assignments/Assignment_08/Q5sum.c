#include <stdio.h>

int sumDigits(int n) // 55 //5 0
{
    if (n == 0) // false false true //recursion ends
        return 0;

    return (n % 10) + sumDigits(n / 10); // 5+sd(5) 5+5+sd(0)
}

int main()
{
    printf("Sum = %d\n", sumDigits(-567));

    return 0;
}
