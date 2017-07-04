#! /bin/bash -e

git config --global user.email "travis@travis-ci.org"
git config --global user.name "Travis CI"

npm run build
git add --all
git commit -m "Travis build: $TRAVIS_BUILD_NUMBER"

git remote add origin-travis https://${GH_TOKEN}@github.com/etpinard/etpinard.github.io.git
git push origin-travis master
