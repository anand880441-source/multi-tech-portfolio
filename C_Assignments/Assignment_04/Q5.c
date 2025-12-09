// Write a program to input two floats representing coordinates (x, y) and determine the distance from origin:

// Distance <= 5: print "Close"
// Distance between 5 and 15: print "Medium"
// Else: print "Far" Use if–else–if (use sqrt() if available, or approximate with conditions).


#include <stdio.h>

int main() {
    float x, y, distance;

    printf("Enter x coordinate: ");
    scanf("%f", &x);
    printf("Enter y coordinate: ");
    scanf("%f", &y);

    distance = x * x + y * y;

    if (distance<= 25){
        printf("Close");
    } 
    else if (distance > 25 && distance <= 225) {  
        printf("Medium");
    } 
    else {
        printf("Far");
    }

    return 0;
}