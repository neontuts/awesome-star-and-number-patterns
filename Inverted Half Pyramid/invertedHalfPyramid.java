import java.util.Scanner;

class invertedHalfPyramid {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter the value of n : ");
    int n = sc.nextInt();

    for (int i=0; i<n; i++) {
      for (int j=i; j<n; j++) {
        System.out.print("*");
      }
      System.out.print("\n");
    }

    sc.close();
  }
}

