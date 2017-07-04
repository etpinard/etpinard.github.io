#! /bin/bash -e

DATE=$(date)

git fetch origin master:master
git checkout master
git merge source --no-commit

git remote -vvvv

npm install
npm run build

git add --all
git commit -m "$DATE build"
git push origin master
