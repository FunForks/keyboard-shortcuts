#!/bin/bash

if [ ! -d .git ]; then
  echo "not a git repository"
  exit
fi

input=".git/config"

# Don't use IFS= , so leading and trailing space will be trimmed
# while IFS= read -r line
while read -r line
do
  # Find [remote "origin"]
  if [[ "$line" =~ ^\[remote\ \"origin\"\]$ ]]; then
    # Read the url from the next line
    read -r line
    if [[ "$line" =~ ^url[[:space:]]*=[[:space:]]*(.*) ]]; then
      url="${BASH_REMATCH[1]}"
      break
    fi
  fi
done < "$input"

# Check that $url is not empty before continuing
if [ -z "$url" ]; then
  echo "No url for origin found in $input"
  exit
fi

fun=`echo "$url" | sed 's/dciforks/FunForks/i'`;
if [ "$url" != "$fun" ]; then
  echo "origin WAS:"
  echo "$url"

  seturl() {
    git remote set-url origin $fun
  }

  seturl

  echo "IS NOW:";
else
  echo "UNCHANGED:"
fi

git remote -v
echo ""
