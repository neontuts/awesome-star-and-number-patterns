import java.util.Scanner;

class halfNumberPyramid {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter the value of n : ");
    int n = sc.nextInt();

    for (int i=1; i<=n; i++) {
      for (int j=1; j<=n; j++) {
        if (j <= i) {
          System.out.print(i);
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

