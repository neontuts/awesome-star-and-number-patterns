<?php

$n = (int)readline("Enter the value of n : ");

for ($i=1; $i<=$n; $i++) {
  for ($j=1; $j<=$n+1-$i; $j++) {
    echo $j;
  }
  echo "\n";
}

