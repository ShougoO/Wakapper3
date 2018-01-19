import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DataService {
    constructor() { }

    private SampleText = new Subject<string>();

    public Text$ = this.SampleText.asObservable();

    sendSampleText(msg: string) {
        this.SampleText.next(msg);
    }
}
