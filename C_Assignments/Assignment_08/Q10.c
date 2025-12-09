#include <stdio.h>
#include <string.h>

int isPalindrome(char str[], int start, int end) {
    if (start >= end)
        return 1;   // Reached middle → valid palindrome

    if (str[start] != str[end])
        return 0;   // Mismatch → not a palindrome

    return isPalindrome(str, start + 1, end - 1);
}

int main() {
    char str[] = "RADAR";

    if (isPalindrome(str, 0, strlen(str) - 1))
        printf("Palindrome");
    else
        printf("Not Palindrome");

    return 0;
}
