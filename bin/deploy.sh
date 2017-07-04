#! /bin/bash -e

DATE=$(date)

git fetch master
git checkout master
git merge source
npm install
npm run build
git add build
git commit -m "$DATE build"
git push origin master
