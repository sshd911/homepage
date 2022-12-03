#!/usr/bin/env sh

set -e
npm run build
cd dist
# Jekyll の処理をバイパスするために .nojekyll を配置
echo > .nojekyll
git add .
git commit -m 'prod'
git push -f git@github.com:sshd911/homepage.git master:gh-pages
cd -
