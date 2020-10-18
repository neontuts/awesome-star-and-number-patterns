import java.util.Scanner;

class printSolidRectangle {
  public static void main(String[] args) {
    java.util.Scanner sc = new Scanner(System.in);
    System.out.println("Enter the number of rows : ");
    int rows = sc.nextInt();
    System.out.println("Enter the number of columns : ");
    int columns = sc.nextInt();

    for (int i=0; i<rows; i++) {
      for (int j=0; j<columns; j++) {
        System.out.print("*");
      }
      System.out.print("\n");
    }

    sc.close();
  }
}

