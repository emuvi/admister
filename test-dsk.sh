#!/bin/bash
bash -v build.sh
browserify build/index.js --debug -o public/index.js
rm -rf ../qinpel-dsk/run/app/admister
mkdir ../qinpel-dsk/run/app/admister
cd public
cp -r * ../../qinpel-dsk/run/app/admister
cd ..
