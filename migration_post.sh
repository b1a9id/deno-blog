#!/bin/zsh
unixtime=`date -j -f "%Y-%m-%d %H:%M:%S" "$1-$2-$3 10:00:00" +%s`
dirname=posts/$1/$2/$3

mkdir -p $dirname

cat - << EOS > $dirname/$unixtime.md
---
title: "title"
publish_date: $1-$2-$3
tags:
---
EOS
