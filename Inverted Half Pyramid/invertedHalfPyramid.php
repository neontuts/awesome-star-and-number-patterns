<?php

$n = (int)readline("Enter the value of n : ");

for ($i=0; $i<$n; $i++) {
  for ($j=$i; $j<$n; $j++) {
    echo "*";
  }
  echo "\n";
}

