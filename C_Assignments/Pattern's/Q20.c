#include<stdio.h>
int main(){
  int n;
  printf("Enter Number : ");
  scanf("%d",&n);

  char cont =65;
  for(int i=65; i<=65+n; i++){
    for(int j=65; j<=i-1; j++){
        printf("%c ",cont);
        cont++;
    }
    printf("\n");
  }
    return 0;
}