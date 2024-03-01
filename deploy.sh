#!/bin/bash

git add .

git commit -m "blog | blurbs page update"

git push

npm run build
