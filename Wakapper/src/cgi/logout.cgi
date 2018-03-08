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
# 出力
url=$HTTP_REFERER
echo $url > $inpd/url.txt
aaa=$(awk -F"?" -v "num=1" '{print $num}' $inpd/url.txt)
echo "Location: $aaa"
echo ""

################################################
# 終了処理
rm -f $tmp-*
rm -f $url
rm -f $inpd/url.txt
rm -f $aaa
exit 0