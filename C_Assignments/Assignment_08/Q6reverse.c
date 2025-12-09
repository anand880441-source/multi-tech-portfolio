#include <stdio.h>

int reverse(int n, int rev)
{
    if (n == 0)
        return rev;

    rev = rev * 10 + (n % 10);
    return reverse(n / 10, rev);
}

int main()
{
    int n = 543;
    printf("%d", reverse(n, 0));
    return 0;
}
