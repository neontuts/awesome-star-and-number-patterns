import java.util.Scanner;

public class oneZeroPattern {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter the value of n : ");
		int n = sc.nextInt();

		for (int i = 1; i <= n; i++) {
			for (int j = 1; j <= i; j++) {
				if ((i + j) % 2 == 0) {
					System.out.printf("%d ", 1);
				} else {
					System.out.printf("%d ", 0);
				}
			}
			System.out.print("\n");
		}

	}
}

