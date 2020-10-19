rows = int(input("Enter the number of rows : "));
columns = int(input("Enter the number of columns : "));

for i in range(0, rows):
  for j in range(0, columns):
    if (i==0 or j==0 or i==rows-1 or j==columns-1):
      print("*", end = "")
    else:
      print(" ", end = "")
  print()

