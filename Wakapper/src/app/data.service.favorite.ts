import { Injectable } from '@angular/core';

@Injectable()
export class DataServiceFavo {
    mkFavo:Array<number> = [];
    flag: number = 0;

    constructor() { }

    sendSampleEvent(num: number) {
        if(num<0){
            num*=-1;
            if(num >= 555){
                num-=555;
                num/=1000;
            }else{
                num--;
            }
            
            return this.searchNum(num);
        } else if(num==999){
            this.flag = 1;
        } else if(num==666){
            return this.flag;
        } else {// num ≧ 0
            let x = this.searchNum(num);
            if(x!=0){
                x--;
                for(let i=0;this.mkFavo[i]!=null;i++){
                    if(i==x){
                        for(let j=i;this.mkFavo[j]!=null;j++){
                            this.mkFavo[j]=this.mkFavo[j+1];
                        }
                        this.mkFavo.pop();
                        break;
                    }
                }
                
                return 1;
            }
            this.mkFavo.push(num);
            
            return 0;
        }
    }

    searchNum(num){
        for(let i=0;this.mkFavo[i]!=null;i++){
            if(this.mkFavo[i]==num){
                return i+1;
            }
        }
        return 0;
    }

    getMKFavo(){
        let str: string;
        for(let i=0;;i++){
            if(this.mkFavo[0]==null) return '999';
            str+=this.mkFavo[i];
            if(this.mkFavo[i]==null) break;
            else str+=',';
        }
        return str;
    }
}
