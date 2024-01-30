#!/bin/bash

git add .

git commit -m "Deploy changes"

git push

npm run build
