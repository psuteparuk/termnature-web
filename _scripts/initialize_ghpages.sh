#!/bin/sh

# WARNING: Run this script only once to initialize the gh-pages branch

DIR=$(dirname "$0")

cd $DIR/..

if [[ $(git status -s) ]]
then
    echo "The working directory is dirty. Please commit any pending changes."
    exit 1;
fi

echo "Create the local gh-pages branch as an orphan"
git checkout --orphan gh-pages

echo "Reset any changes and initialize an empty commit"
git reset --hard
git commit --allow-empty -m "Initializing gh-pages branch"

echo "Push to the remote repository"
git push origin gh-pages

echo "Back to the master branch"
git checkout master
