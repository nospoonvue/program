#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
#echo 'www.purposefullearninglabs.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
 #git push -f git@github.com:frankleafy/dl58.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
 git push -f git@github.com:nospoonvue/program.git master:gh-pages

cd -
