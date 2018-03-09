#!/bin/bash -vx
#
# logout.cgi
#

# cgi-nameなどのスクリプトの
# 言語とパスの設定
LANG=js_JP.UTF-8
PATH=/usr/local/bin:$PATH

homd=/home/dshougo/Wakapper3/Wakapper/src
logd=$homd/log
inpd=$homd/input
assd=$homd/assets/data

tmp=$inpd/tmp_$$

exec 2> $logd/LOG.$(basename $0).$(date +%Y%m%d).$$

################################################
# エラーハンドラ
ERROR_CHECK(){
        [ $(plus ${PIPESTATUS[@]}) -eq 0 ] && return

        echo "Content-type: text/html"
        echo ""
        echo System ERR

        exit 1
}
################################################
# データの保存(NUM)
NUM=$1
USNA=$2
DATA=$3
ERROR_CHECK

################################################
# 出力
url=$HTTP_REFERER
echo $url > $inpd/url.txt
aaa=$(awk -F"?" -v "num=1" '{print $num}' $inpd/url.txt)

echo $DATA > $inpd/eee.txt
var=1
array=()
while :
do
  com=$(awk -F"," -v "num=$var" '{print $num}' $inpd/eee.txt)
  sub=("\"$com\"")

  if [ "$sub" == "\"\"" ]; then
    break;
  fi

  if [ "$var" != "1" ]; then
    array+=","
  fi
  array+=$sub
  let var++
done

echo "{\"data\": [${array[*]}]}" > $assd/$USNA.json

if [ "$NUM" != "null" ]; then
  echo "Location: $aaa?q=$NUM"
  echo ""
else
  echo "Location: $aaa"
  echo ""
fi

################################################
# 終了処理
rm -f $tmp-*
rm -f $url
rm -f $inpd/url.txt
rm -f $inpd/eee.txt
rm -f $aaa
exit 0
