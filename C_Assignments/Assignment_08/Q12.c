#include <stdio.h>

void printTable(int n, int i) {
    if (i > 10)
        return;

    printf("%d × %d = %d\n", n, i, n * i);

    printTable(n, i + 1);
}

int main() {
    printTable(8, 1);   // Change 8 to any number you want
    return 0;
}
