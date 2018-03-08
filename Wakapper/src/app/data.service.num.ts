import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DataServiceNum {
    submFlag: number = 0;

    constructor() { }

    private SampleNum = new Subject<number>();

    public Num$ = this.SampleNum.asObservable();

    sendSampleNum(num: number) {
        // numリスト
        // 1 : page2に遷移するか : submFlagが0なら遷移
        // 2 : 登録・ログインがpage2から行われたかどうか : page2からなら1を渡す
        
        if(num==1){
            this.SampleNum.next(this.submFlag);
            if(this.submFlag == 0){
                this.submFlag = 1;
            }
        } else if(num==2){
            this.SampleNum.next(1);
        }
    }
}
