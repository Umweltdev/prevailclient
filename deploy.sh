#!/bin/bash

git add .

git commit -m "netlify error page fail"

git push

npm run build
