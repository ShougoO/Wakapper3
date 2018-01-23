#!/bin/bash

# cgi-nameなどのスクリプトの
# 言語とパスの設定
LANG=js_JP.UTF-8
PATH=/usr/local/bin:$PATH

homd=/home/dshougo/Wakapper3/Wakapper/src
ased=$homd/assets/data
logd=$homd/log

tmp=$ased/tmp_$$

exec 2> $logd/LOG.$(basename $0).$(date +%Y%m%d)


dd bs=$CONTENT_LENGTH   |
cgi-name -i _ -d_       > $tmp-name

Title=$(nameread title $tmp-name)
Comments=$(nameread comments $tmp-name)
Num=$(nameread num $tmp-name)

var jNam=$Num


echo "{
  \"contribution\": [
    {
      \"title\": \"$Title\",
      \"comments\": \"$Comments\"
    }
  ]
}" > $ased/$jNam.json

echo "Location: $HTTP_REFERER?q=subm"
echo ""

rm -f $Title
rm -f $Comments
rm -f $Num
rm -f $jNam
rm -f $tmp-*
