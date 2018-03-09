import { Injectable } from '@angular/core';

import { JsonData } from './json-data';

@Injectable()
export class DataServiceFavo {
    data: any;
    mkFavo:Array<string> = [];
    flag: number = 0;

    constructor(public dataService: JsonData) { }

    loaMKdData(){
        this.dataService.getData('../src/assets/data/logout.json').subscribe(data => {
            this.data = data.data;
            for(let i=0;this.data[i]!=null;i++){
                this.mkFavo.push(this.data[i]);
            }
            console.log("this.mkFavo");
            console.log(this.mkFavo);
        });
        
        console.log("this.mkFavo");
        console.log(this.mkFavo);
    }

    sendSampleEvent(str: string, num: number){
        if(num==999&&this.flag!=1){           // num = 999 : ログインしたことを保存
            this.flag=1;
            this.loaMKdData();
        }else if(num==666){
            return this.flag;   // num = 666 : ログイン状態を返す
        } else {
            if(0<=num){         // num ≧ 0 : mkFavoに追加・取り出し
                let x = this.searchNum(str);
                console.log("ここ大事");
                if(x==0){
                    // mkFavo内に無い
                    this.mkFavo.push(str);
                    console.log("this.mkFavo");
                    console.log(this.mkFavo);

                    return 0;
                }else{
                    x--;
                    //mkFavoのx番目にある
                    for(let i=0;this.mkFavo[i]!=null;i++){
                        if(i==x){
                            for(let j=i;this.mkFavo[j]!=null;j++){
                                this.mkFavo[j]=this.mkFavo[j+1];
                            }
                            this.mkFavo.pop();
                            console.log("this.mkFavo");
                            console.log(this.mkFavo);
                            break;
                        }
                    }

                    return 1;
                }
            }else if(num<0){    // num < 0 : mkFavoにあるか否か
                let x = this.searchNum(str);
                if(x==0){
                    // mkFavo内に無い
                    return 0;
                }else{
                    //mkFavoのx番目にある
                    return 1;
                }
            }
        }
    }

    // mkFavoの中に探してる文字列がないなら「0」, あれば「番号+1」を返す
    searchNum(str){
        for(let i=0;this.mkFavo[i]!=null;i++){
            if(this.mkFavo[i]==str){
                return i+1;
            }
        }
        return 0;
    }

    // url用にmkFavoの中身全てを結合して返す
    getMKFavo(){
        let str: string = "";
        for(let i in this.mkFavo){
            if(i==null) return '-1'; // nkFavoが空の時
            str+=i+',';
        }
        return str;
    }
}
