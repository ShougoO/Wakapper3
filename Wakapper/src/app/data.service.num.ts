import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DataServiceNum {
    submFlag: number = 0;
    static tracks: number;

    constructor() { }

    private SampleNum = new Subject<number>();

    public Num$ = this.SampleNum.asObservable();

    sendSampleNum(num: number) {
        // numリスト
        // 0 : page2に遷移するか : submFlagが0なら遷移
        // 1 : page1にいる(いた)
        // 2 : page2にいる(いた)
        // 3 : page3にいる(いた)
        // 4 : page4にいる(いた)
        // 5 : homeにいる(いた)
        // 6 : どこにいたか(tracks)取得

        if(num==0){
            this.SampleNum.next(this.submFlag);
            if(this.submFlag == 0){
                this.submFlag = 1;
            }
        } else if(1<=num && num<=5){
            DataServiceNum.tracks = num;
        } else if(num==6){
            this.SampleNum.next(DataServiceNum.tracks);
        }
        console.log(DataServiceNum.tracks);
    }
}
