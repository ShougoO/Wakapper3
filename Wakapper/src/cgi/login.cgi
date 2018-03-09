#!/bin/bash -vx
#
# login.cgi
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
NUM=$(nameread num $tmp-name)
ERROR_CHECK

################################################
# usrの情報と合っているか
var=4
count=0
array=()

while :
do
  com=$(awk -F"\"" -v "num=$var" '{print $num}' $inpd/regiData.json)

  sub=("$com")

  if [ "$sub" == "" ]; then
    break
  fi
  array+=($sub)
  let count++

  var=$(( var+2 ))
done

for var in "${array[@]}"
do
  id=("$(awk -F"\"" -v "num=4" '{print $num}' $inpd/$var)")
  pa=("$(awk -F"\"" -v "num=8" '{print $num}' $inpd/$var)")

  if [ "$id" == "$ID" -a "$pa" == "$PASS" ]; then
    str="Login"

    echo $var > $inpd/name.txt
    com2=$(awk -F"\"" -v "num=1" '{print $num}' $inpd/name.txt)
    NAME=$com2
    break
  fi
  str="Login not"
done
ERROR_CHECK

################################################
# 出力
if [ "$str" == "Login" ]; then
  url=$HTTP_REFERER
  echo $url > $inpd/url.txt
  aaa=$(awk -F"?" -v "num=1" '{print $num}' $inpd/url.txt)
  echo "Location: $aaa?q=$NUM&q=$NAME"
  echo ""
else
  echo "Content-type: text/html"
  echo ""
  echo "$str Success."
fi

################################################
# 終了処理
rm -f $tmp-*
rm -f $var
rm -f $count
rm -f $array
rm -f $sub
rm -f $com
rm -f $id
rm -f $pa
rm -f $str
rm -f $ID
rm -f $PASS
rm -f $url
rm -f $inpd/url.txt
rm -f $aaa
exit 0
