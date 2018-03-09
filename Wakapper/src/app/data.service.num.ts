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
        // 0 : page2に遷移するか : submFlagが0なら遷移

        if(num==0){
            console.log("num : "+num);
            this.SampleNum.next(this.submFlag);
            if(this.submFlag == 0){
                this.submFlag = 1;
            }
        }
    }
}
