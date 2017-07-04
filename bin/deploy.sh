#! /bin/bash -e

DATE=$(date)

git checkout master
git merge source
npm install
npm run build
git add --all
git commit -m "$DATE build"
git push origin master
