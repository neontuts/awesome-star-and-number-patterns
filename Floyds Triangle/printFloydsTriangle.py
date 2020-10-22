n = int(input("Enter the value of n : "))
count = 1

for i in range(1, n+1):
  for j in range(1, n+1):
    if j <= i:
      if count < 10:
        print(str(count) + "  ", end = "")
      else:
        print(str(count) + " ", end = "")
      count += 1
    else:
      print(" ", end = "")
  print()

