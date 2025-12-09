#include <stdio.h>

int sumN(int n) {
    if (n == 1)
        return 1;

    return n + sumN(n - 1);
}

int main() {
    int n = 5;
    printf("%d", sumN(n));   // Output: 15
    return 0;
}
