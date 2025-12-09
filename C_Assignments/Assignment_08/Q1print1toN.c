#include<stdio.h>
void print1toN(int num){
    if (num==0)
    {
        return;
    }
    print1toN(num-1);
    printf("%d  ",num);
}
int main()
{
  print1toN(9);
    return 0;
}