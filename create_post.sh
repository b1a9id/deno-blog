#!/bin/bash
unixtime=`date +%s`
today=`date '+%Y-%m-%d'`
dirname=posts/`date +%Y/%m/%d`

mkdir -p $dirname

cat - << EOS > $dirname/$unixtime.md
---
title: "$today"
publish_date: $today
---
EOS
