#!/bin/bash
dir="./3x2_alpha_3"
file="*.svg"
for file in `cd ${dir};ls -1 ${file}` ;do
   png=$(echo "$file" | sed "s/svg/png/")
   echo $file
   echo $png
   convert -size 128x84 $file $png
   rm $file
done 