#!/bin/bash

indd=/home/dshougo/Wakapper/Wakapper/www
homd=/home/dshougo/Wakapper/Wakapper/src
logd=$homd/log

exec 2> $logd/LOG.$(basename $0).$(date +%Y%m%d)

dd bs=$CONTENT_LENGTH > $homd/input/hoge

# echo "Content-type: text/html"
# echo ""
# echo OK!!
echo "Location: $HTTP_REFERER?q=regi"
echo ""
