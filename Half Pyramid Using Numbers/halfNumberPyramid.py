n = int(input("Enter the value of n : "))

for i in range(1, n+1):
  for j in range(1, n+1):
    if j <= i:
      print(i, end = "")
    else:
      print(" ", end = "")
  print()

