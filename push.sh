#!/bin/bash

npm --prefix hgloves run test

if [ $? -ne 0 ]; then
    echo "ERROR: PUSH CANCELED - TEST NOT PASSED" >&2
fi

echo "SUCCESS: all test passed"

echo "running 'cp hgloves/coverage/lcov-report/index.html ./coverage.html"
cp hgloves/coverage/lcov-report/index.html ./coverage.html
if [ $? -ne 0 ]; then
    echo "ERROR: COPY ERROR" >&2
fi

echo "running 'git add coverage.html'"
git add coverage.html
if [ $? -ne 0 ]; then
    echo "ERROR: GIT ADD" >&2
fi


echo "running 'git commit -m \"feat(jenkins): automatic coverage.html push commit\"'"
git commit -m "feat(jenkins): automatic coverage.html push commit"
if [ $? -ne 0 ]; then
    echo "ERROR: GIT COMMIT" >&2
fi

echo "running 'git push $1'"
git push $1
if [ $? -ne 0 ]; then
    echo "ERROR: GIT PUSH" >&2
fi
