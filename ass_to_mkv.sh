#!/bin/bash

DIR=$(pwd)

LENGTH="00:00:09"
BLACK="black.png"
FORCE=""

if [ ! -d "$DIR/mkv" ]; then
	mkdir "$DIR/mkv"
fi


if [ $1 == "force" ]; then
	FORCE="-y"
fi
for i in "$DIR/"*.ass; do

	ffmpeg $FORCE -loop 1 -i $BLACK -r 25 -vf "ass=$i" -c:v libx264 -pix_fmt yuv444p -preset ultrafast -level 5.2 -crf 10 -t $LENGTH "$DIR/mkv/$(basename $i).mkv"

done
