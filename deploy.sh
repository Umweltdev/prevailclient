#!/bin/bash

# git add .

# git commit -m "second section fix"

# git push

# npm run build

# heroku create prevaildigitalmart

# rm -rf node_modules 

# rm -rf package-lock.json

heroku git:remote -a prevaildigitalmarketing

git add .

git commit -m "latest push"

git push heroku main


