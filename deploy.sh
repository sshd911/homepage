#!/usr/bin/env sh

set -e
npm run build
cd dist
git init
git checkout -B prod
git add -A
git commit -m 'deploy'
git push -f git@github.com:sshd911/homepage.git master:gh-pages
cd -
