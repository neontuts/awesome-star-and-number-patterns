<?php

$rows = (int)readline("Enter the number of rows : ");
$columns = (int)readline("Enter the number of columns : ");

for ($i=0; $i<$rows; $i++) {
  for ($j=0; $j<$columns; $j++) {
    echo "*";
  }
  echo "\n";
}

