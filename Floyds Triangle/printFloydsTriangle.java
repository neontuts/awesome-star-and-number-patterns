import java.util.Scanner;

class printFloydsTriangle {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter the value of n : ");
    int n = sc.nextInt();
    int count = 1;

    for (int i=1; i<=n; i++) {
      for (int j=1; j<=n; j++) {
        if (j <= i) {
          if (count < 10) {
            System.out.print(count + "  ");
          }
          else {
            System.out.print(count + " ");
          }
          count++;
        }
        else {
          System.out.print(" ");
        }
      }
      System.out.print("\n");
    }

    sc.close();
  }
}

