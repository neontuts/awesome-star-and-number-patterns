#include <stdio.h>

int main() {
  int n;
  int count = 1;
  printf("Enter the number of n : ");
  scanf("%d", &n);

  for (int i=1; i<=n; i++) {
    for (int j=1; j<=n; j++) {
      if (j <= i) {
        if (count < 10) {
          printf("%d  ", count);
        }
        else {
          printf("%d ", count);
        }
        count++;
      }
      else {
        printf(" ");
      }
    }
    printf("\n");
  }

  return 0;
}

