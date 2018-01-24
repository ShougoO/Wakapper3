import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {JsonData} from '../../app/json-data';

@IonicPage()
@Component({
  selector: 'page-time-table',
  templateUrl: 'time-table.html',
})
export class TimeTablePage {
  direction: string = "up";

  upTimeTable: string[];
  downTimeTable: string[];

  testJsonURL:string;

  selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,getJson:JsonData) {
    this.selectedItem = navParams.get('station');

    //時刻データ取得
    this.testJsonURL = 'https://gist.githubusercontent.com/ueken0307/5cdc99ceb8ca4324b3c82ceb2eecabeb/raw/41f716820176b8817796204be12eae93c0a8c67c/timeTable.json'
    getJson.getData(this.testJsonURL).subscribe(input=>{
      this.upTimeTable = input[this.selectedItem].up;
      this.downTimeTable = input[this.selectedItem].down;
    });

  }

}
