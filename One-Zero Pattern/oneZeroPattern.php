<?php

$n = (int)readline("Enter the value of n : ");

for ($i=1; $i<=$n; $i++) {
  for ($j=1; $j<=$i; $j++) {
  	if (($i + $j) % 2 == 0) {
  		echo 1 . " ";
  	}
  	else {
  		echo 0 . " ";
  	}
  }
  echo "\n";
}

