#!/bin/bash

git add .

git commit -m "service desc | mpd description"

git push

npm run build
