<?php

$n = (int)readline("Enter the value of n : ");

for ($i=1; $i<=$n; $i++) {
  for ($j=1; $j<=$n; $j++) {
    if ($j <= $i) {
      echo $i;
    }
    else {
      echo " ";
    }
  }
  echo "\n";
}

