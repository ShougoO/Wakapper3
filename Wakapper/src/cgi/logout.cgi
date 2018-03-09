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
DATA=$2
ERROR_CHECK

################################################
# 出力
url=$HTTP_REFERER
echo $url > $inpd/url.txt
# aaa : www.~~~
aaa=$(awk -F"?" -v "num=1" '{print $num}' $inpd/url.txt)
echo $DATA > $inpd/ddd.txt
bbb=$(awk -F"\\" -v "num=2" '{print $num}' $inpd/ddd.txt)
echo $bbb > $inpd/ddd.txt
ccc=$(awk -F"\"" -v "num=2" '{print $num}' $inpd/ddd.txt)

echo "{\"data\": [\"$ccc\"]}" > $assd/logout.json

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
rm -f $aaa
exit 0
