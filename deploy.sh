# !/usr/bin/env sh

set -e
npm run build
cd dist
echo > .nojekyll
branch=${product}
existed_in_local=$(git branch --list ${branch})
if [[ -z ${existed_in_local} ]]; then
  git branch -D product
  git checkout -b product
else
  git checkout -b product
fi
git add -A
git commit -m 'deploy'
git push -f git@github.com:sshd911/homepage.git product
git checkout master
cd -
