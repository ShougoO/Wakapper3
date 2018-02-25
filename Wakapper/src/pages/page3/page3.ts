import { ViewChild,Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {CalendarProvider} from "../../providers/calendar/calendar";


@IonicPage()
@Component({
    selector: 'page-page3',
    templateUrl: 'page3.html',
    providers: [CalendarProvider],
})
export class Page3 {
    @ViewChild("Slides") slides;
    cal:any = [];
    current_calendar:any = [];
    wait:boolean = false;

    /*****/
    testEvents = [
        {
            'date': {year: 2018, month: 2, day: 20},
            'text': 'ああああああああああ'
        },
        {
            'date': {year: 2018, month: 2, day: 10},
            'text': 'いいいいいいいいいい'
        },
        {
            'date': {year: 2018, month: 2, day: 11},
            'text': 'いいいいいいいいいい'
        },
        {
            'date': {year: 2018, month: 2, day: 12},
            'text': 'いいいいいいいいいい'
        },
        {
            'date': {year: 2018, month: 2, day: 13},
            'text': 'いいいいいいいいいい'
        }
    ];

    constructor(
        public navCtrl: NavController, 
        public calendar: CalendarProvider,
        public navParams: NavParams
    ) {
        let t = this.calendar.getToday(); // 今日の日付けを取得
        this.current_calendar = t;
        let l = this.calendar.lastMonth(t[0], t[1]); // 前月の年月を取得
        let n = this.calendar.nextMonth(t[0], t[1]); // 来月の年月を取得

        let now = this.calendar.getCalendarYM(t[0], t[1]); // 今月のカレンダー情報を作成
        let last = this.calendar.getCalendarYM(l[0], l[1]);// 前月のカレンダー情報を作成
        let next = this.calendar.getCalendarYM(n[0], n[1]);// 来月のカレンダー情報を作成
        this.cal = [last, now, next];
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SwipePage');
    }

    nextSlide(){
        console.log("next");
        if(this.wait == false){
            this.wait = true;
            return;
        }
        let c = this.cal[2];
        this.current_calendar = [c.year, c.month];
        let ym = this.calendar.nextMonth(c.year, c.month);

        let n = this.calendar.getCalendarYM(ym[0], ym[1]);
        this.cal.push(n);
        this.cal.shift();
        this.slides.slideTo(1, 0, false);
    }

    beforeSlide(){
        console.log("before");
        let c = this.cal[0];
        this.current_calendar = [c.year, c.month];
        let ym = this.calendar.lastMonth(c.year, c.month);

        let n = this.calendar.getCalendarYM(ym[0], ym[1]);
        this.cal.unshift(n);
        this.cal.pop();
        this.slides.slideTo(1, 0, false);
    }

    /*****/
    showEvent(year, month, day, bool){
        for(let i=0;this.testEvents[i]!=null;i++){
            if(this.testEvents[i].date.year==year
                && this.testEvents[i].date.month==month
                && this.testEvents[i].date.day==day
                && bool!=true){
                return this.testEvents[i].text;
            }
        }
    }
}
