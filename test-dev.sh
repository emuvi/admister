#!/bin/bash
bash -v build.sh
browserify build/index.js --debug -o public/index.js
rm -rf ~/Devs/run/app/admister
mkdir ~/Devs/run/app/admister
cd public
cp -r * ~/Devs/run/app/admister
cd ..
