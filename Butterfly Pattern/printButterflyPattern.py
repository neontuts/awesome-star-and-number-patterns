n = int(input("Enter the value of n : "))

for i in range(1, n+1):
  for j in range(1, i+1):
    print("*", end = "")
  spaces = 2*n - 2*i;
  for j in range(1, spaces+1):
    print(" ", end = "")
  for j in range(1, i+1):
    print("*", end = "")
  print()

for i in range(n, 0, -1):
  for j in range(1, i+1):
    print("*", end = "")
  spaces = 2*n - 2*i;
  for j in range(1, spaces+1):
    print(" ", end = "")
  for j in range(1, i+1):
    print("*", end = "")
  print()

