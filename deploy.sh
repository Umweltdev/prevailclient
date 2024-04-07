#!/bin/bash

# git add .

# git commit -m "second section fix"

# git push

# npm run build

heroku create prevaildigitalmart

rm -rf node_modules 

rm -rf package-lock.json

heroku git:remote -a prevaildigitalmart

npm install

git push heroku main

