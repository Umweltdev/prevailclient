#!/bin/bash

git add .

git commit -m "svg fixed for landing page"

git push

npm run build
