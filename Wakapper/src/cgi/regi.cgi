#!/bin/bash -vx
#
# regi.cgi
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
# POSTデータの受け取り
if [ ! -z "$CONTENT_LENGTH" ] ; then
        dd bs=$CONTENT_LENGTH   |
        cgi-name -i _ -d_       > $tmp-name
        ERROR_CHECK
else
        # POSTデータがなければ空のnameファイルを作成
        touch $tmp-name
        ERROR_CHECK
fi

################################################
# 入力値チェック
cat << FIN > $tmp-check
id x12
pass x12
FIN
ERROR_CHECK

# 正しく遷移が行われていれば、ここで入力チェックエラーとなることはない
check_attr_name $tmp-check $tmp-name > $tmp-result
ERROR_CHECK

################################################
# 登録データの保存(ID, PASS)
ID=$(nameread id $tmp-name)
PASS=$(nameread pass $tmp-name)
ERROR_CHECK

################################################
# 「usr"x"」を「regiData.json」に追加
var=4
count=0
array=()

while :
do
  com=$(awk -F"\"" -v "num=$var" '{print $num}' $inpd/regiData.json)

  sub=("\"$com\",")

  if [ "$sub" == "\"\"," ]; then
    let count++
    break
  fi
  array+=$sub
  let count++

  var=$(( var+2 ))
done

array+=("\"usr$count.json\"")

echo "{\"data\":["${array[*]}"]}" > $inpd/regiData.json
ERROR_CHECK

################################################
# json形式で保存(usr"x".json)
echo "{\"id\":\"$ID\",\"pass\":\"$PASS\"}" > $inpd/usr$count.json
ERROR_CHECK

################################################
# 出力
# echo "Content-type: text/html"
# echo ""
# echo Registration Successful.
echo "Location: $HTTP_REFERER?q=regi"
echo ""

################################################
# 終了処理
rm -f $tmp-*
rm -f $var
rm -f $count
rm -f $array
rm -f $sub
rm -f $com
exit 0
