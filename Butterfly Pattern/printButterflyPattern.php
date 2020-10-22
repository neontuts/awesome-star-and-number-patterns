<?php

$n = (int)readline("Enter the value of n : ");

for ($i=1; $i<=$n; $i++) {
  for ($j=1; $j<=$i; $j++) {
    echo "*";
  }
  $spaces = 2*$n - 2*$i;
  for ($j=1; $j<=$spaces; $j++) {
    echo " ";
  }
  for ($j=1; $j<=$i; $j++) {
    echo "*";
  }
  echo "\n";
}

for ($i=$n; $i>=1; $i--) {
  for ($j=1; $j<=$i; $j++) {
    echo "*";
  }
  $spaces = 2*$n - 2*$i;
  for ($j=1; $j<=$spaces; $j++) {
    echo " ";
  }
  for ($j=1; $j<=$i; $j++) {
    echo "*";
  }
  echo "\n";
}

