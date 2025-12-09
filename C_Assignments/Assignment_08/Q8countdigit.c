#include <stdio.h>

int countDigits(int n)
{
    if (n < 10)
        return 1;

    return 1 + countDigits(n / 10);
}

int main()
{
    int n = 10020;
    printf("%d", countDigits(n));
    return 0;
}
