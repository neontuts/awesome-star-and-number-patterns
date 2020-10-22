<?php

$n = (int)readline("Enter the value of n : ");
$count = 1;

for ($i=1; $i<=$n; $i++) {
  for ($j=1; $j<=$n; $j++) {
    if ($j <= $i) {
      if ($count < 10) {
        echo $count . "  ";
      }
      else {
        echo $count . " ";
      }
      $count++;
    }
    else {
      echo " ";
    }
  }
  echo "\n";
}

