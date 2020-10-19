<?php

$rows = (int)readline("Enter the number of rows : ");
$columns = (int)readline("Enter the number of columns : ");

for ($i=0; $i<$rows; $i++) {
  for ($j=0; $j<$columns; $j++) {
    if ($i==0 || $j==0 || $i==$rows-1 || $j==$columns-1) {
      echo "*";
    } else {
      echo " ";
    }
  }
  echo "\n";
}

