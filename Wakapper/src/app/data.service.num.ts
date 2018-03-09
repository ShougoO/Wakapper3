import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class DataServiceNum {
    submFlag: number = 0;
    tracks: number;

    constructor() { }

    private SampleNum = new Subject<number>();

    public Num$ = this.SampleNum.asObservable();

    getSubmFlag(){
        return this.submFlag;
    }

    sendSampleNum(num: number) {
        // numリスト
        // 0 : page2に遷移するか : submFlagが0なら遷移
        // 1 : page1にいる(いた)
        // 2 : page2にいる(いた)
        // 3 : page3にいる(いた)
        // 4 : page4にいる(いた)
        // 5 : homepにいる(いた)
        // 6 : さっきまでどのページにいたかを返す

        if(num<=0){
            if(num==0){
                this.SampleNum.next(this.submFlag);
            }else if(num<0&&this.submFlag==0){
                this.SampleNum.next(num);
            }

            if(this.submFlag == 0){
                this.submFlag = 1;
            }
        } else if(1<=num&&num<=5){
            this.tracks = num;
        } else if(num==6){
            return this.tracks;
        }
    }
}
