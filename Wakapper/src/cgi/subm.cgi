#!/bin/bash

# cgi-nameなどのスクリプトの
# 言語とパスの設定
LANG=js_JP.UTF-8
PATH=/usr/local/bin:$PATH

homd=/home/dshougo/Wakapper3/Wakapper/src
ased=$homd/assets/data
logd=$homd/log

tmp=$ased/tmp_$$
var=4
array=()


exec 2> $logd/LOG.$(basename $0).$(date +%Y%m%d)


dd bs=$CONTENT_LENGTH   |
cgi-name -i _ -d_       > $tmp-name

Title=$(nameread title $tmp-name)
Comments=$(nameread comments $tmp-name)
Num=$(nameread num $tmp-name)


echo "{
  \"contribution\": [
    {
      \"title\": \"$Title\",
      \"comments\": \"$Comments\"
    }
  ]
}" > $ased/cont$Num.json


lim=$((Num*2+2))

while :
do
  if [ "$var" == "$lim" ]; then
    break
  fi

  com=$(awk -F"\"" -v "num=$var" '{print $num}' $ased/datas.json)
  array+=("\"$com\",")

  var=$(( var + 2 ))
done

array+=("\"cont$Num.json\"")

echo "{\"dataNames\":["${array[*]}"]}" > $ased/datasN.json

cat $ased/datasN.json > $ased/datas.json

echo "Location: $HTTP_REFERER&q=subm"
echo ""

rm -f $Title
rm -f $Comments
rm -f $Num
rm -f $lim
rm -f $tmp-*
rm -f $array
rm -f $com
rm -f $ased/datasN.json
