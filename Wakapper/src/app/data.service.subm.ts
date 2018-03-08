import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DataServiceSubm {
    submFlag: number = 0;

    constructor() { }

    private SampleNum = new Subject<number>();

    public Num$ = this.SampleNum.asObservable();

    sendSampleNum(num: number) {
        this.SampleNum.next(this.submFlag);
        if(this.submFlag == 0){
            this.submFlag = 1;
        }
    }
}
