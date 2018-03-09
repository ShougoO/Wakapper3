import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DataServiceNum {
    submFlag: number = 0;
    tracks: number;

    constructor() { }

    private SampleNum = new Subject<number>();

    public Num$ = this.SampleNum.asObservable();

    sendSampleNum(num: number) {
        // numリスト
        // 0 : page2に遷移するか : submFlagが0なら遷移
        // 1 : page1
        // 2 : page2
        // 3 : page3
        // 4 : page4
        // 5 : homep

        if(num<=0){
            console.log("num : "+num);
            if(num==0){
                this.SampleNum.next(this.submFlag);
            }else if(num<0){
                this.SampleNum.next(num);
            }
            
            if(this.submFlag == 0){
                this.submFlag = 1;
            }
        } else if(1<=num&&num<=5){
            console.log("num : "+num);
            this.tracks = num;
        } else if(num==6){
            console.log("num : "+num);
            return this.tracks;
        }
    }
}
