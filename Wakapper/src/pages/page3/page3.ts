import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html'
})
export class Page3 {
  @ViewChild('month') monthElement;
  @ViewChild('content') calendarElement;

  text: string;
  showText: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.text = navParams.get("text");
    this.showText = this.text;
  }
}

  /*
  import { CalendarComponent } from 'ionic2-calendar/calendar';
  
  @ViewChild(CalendarComponent) myCalendar: CalendarComponent;

  eventSource;
  viewTitle;
  isToday: boolean;
  calendar = {
    mode: 'month',
    currentDate: new Date()
  };

  loadEvents() {
    this.eventSource = this.createRandomEvents();
  }
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }
  onEventSelected(event) {
    console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
  }
  changeMode(mode) {
    this.calendar.mode = mode;
  }
  today() {
    this.calendar.currentDate = new Date();
  }
  onTimeSelected(ev) {
    console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
      (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
  }
  onCurrentDateChanged(event: Date) {
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    event.setHours(0, 0, 0, 0);
    this.isToday = today.getTime() === event.getTime();
  }
  createRandomEvents() {
    var events = [];
    for (var i = 0; i < 50; i += 1) {
      var date = new Date();
      var eventType = Math.floor(Math.random() * 2);
      var startDay = Math.floor(Math.random() * 90) - 45;
      var endDay = Math.floor(Math.random() * 2) + startDay;
      var startTime;
      var endTime;
      if (eventType === 0) {
        startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + startDay));
        if (endDay === startDay) {
          endDay += 1;
        }
        endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + endDay));
        events.push({
          title: 'All Day - ' + i,
          startTime: startTime,
          endTime: endTime,
          allDay: true
        });
      } else {
        var startMinute = Math.floor(Math.random() * 24 * 60);
        var endMinute = Math.floor(Math.random() * 180) + startMinute;
        startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + startDay, 0, date.getMinutes() + startMinute);
        endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + endDay, 0, date.getMinutes() + endMinute);
        events.push({
          title: 'Event - ' + i,
          startTime: startTime,
          endTime: endTime,
          allDay: false
        });
      }
    }
    return events;
  }
  onRangeChanged(ev) {
    console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
  }
  markDisabled = (date: Date) => {
    var current = new Date();
    current.setHours(0, 0, 0);
    return date < current;
  };
  */
  /*
  ionViewDidLoad() {
    // 現在日を取得し、当月1日の曜日と末日を求めます。
    var now: Date = new Date();
    var prePad: number = new Date(now.getFullYear(), now.getMonth(), 1).getDay();
    var lastDay: number = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();

    // カレンダーの月を表示
    var mo = this.monthElement.nativeElement;

    // now.getMonth() : 1月～12月 ⇒ 0　～ 11 の数値で表される
    mo.innerHTML += now.getMonth() + 1 + "月";

    // TABLE用のstyle
    var sty = "style=\"width: 80%; margin: 5%;\"";

    // カレンダーを出力します。
    var el = this.calendarElement.nativeElement;
    var TABLE = "<TABLE border=\"1\"" + sty + ">";
    var TR = "<TR>";
    var TD1 = "<TD>";
    var TD2 = "</TR>";
    var TABLEEND = "</TABLE>";
    var msg = "";
    //var el = document.getElementById('content');
    //el.innerHTML += "<TABLE border=\"0\" cellspacing=\"0\" cellpadding=\"0\" align=\"left\">";
    //el.innerHTML += "<TR><TD bgcolor=\"#0000ff\" width= \"1\" colspan= \"7\" > </TD></TR>";
    msg += TABLE;

    msg += TR + TD1 + "&nbsp;" + "日</TD>" + TD1 + "&nbsp;" + "月</TD>" + TD1 + "&nbsp;" + "火</TD>"
      + TD1 + "&nbsp;" + "水</TD>" + TD1 + "&nbsp;" + "木</TD>"
      + TD1 + "&nbsp;" + "金</TD>" + TD1 + "&nbsp;" + "土</TD>" + TD2;
    for (var curDay: number = -prePad + 1; curDay <= lastDay; curDay++) {
      if ((prePad + curDay) % 7 == 1) {
        msg += TR;
      }
      // 半角スペース1つ出力します。curDayが負の時はさらに2つ出力します。
      msg += TD1 + "&nbsp;" + (curDay < 1 ? "&nbsp;&nbsp;" :
        // curDayが正の時です。1桁なら半角スペースを1つ出力します。そして日付を出力します。
        (curDay < 10 ? "&nbsp;" : "") + curDay.toString() + "</TD>" +
        // 土曜日を出力したら、改行タグを入れます。
        //(((prePad + curDay) % 7 == 0) ? "<br/>" : ""));
        (((prePad + curDay) % 7 == 0) ? TD2 : ""));
    }
    msg += TD2 + TABLEEND;
    el.innerHTML += msg;
  }
  */