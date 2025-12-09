#include <stdio.h>

struct Book {
    int id;
    char title[50];
    float price;
};

void findLowestPrice(struct Book books[]) {
    int lowestPriceIndex = 0;
    for (int i = 1; i < 5; i++) {
        if (books[i].price < books[lowestPriceIndex].price) {
            lowestPriceIndex = i;
        }
    }
    printf("Book with the lowest price:\n");
    printf("ID: %d, Title: %s, Price: %.2f\n\n",
           books[lowestPriceIndex].id,
           books[lowestPriceIndex].title,
           books[lowestPriceIndex].price);
}

void printAboveAverage(struct Book books[]) {
    float total = 0;
    for (int i = 0; i < 5; i++) {
        total += books[i].price;
    }
    float average = total / 5;

    printf("Books with price above average (%.2f):\n", average);
    for (int i = 0; i < 5; i++) {
        if (books[i].price > average) {
            printf("ID: %d, Title: %s, Price: %.2f\n",
                   books[i].id,
                   books[i].title,
                   books[i].price);
        }
    }
}

int main() {
    struct Book library[5] = {
        {101, "The C Programming Language", 52.50},
        {102, "Effective C++", 32.03},
        {103, "Learning Python", 84.25},
        {104, "Data Structures in C", 55.01},
        {105, "Clean Code", 60.75}
    };

    findLowestPrice(library);
    printAboveAverage(library);

    return 0;
}
