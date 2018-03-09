import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {TimeTablePage} from '../time-table/time-table';
import {JsonData} from '../../app/json-data';
import { DataServiceNum } from '../../app/data.service.num';

@Component({
  selector: 'page-page4',
  templateUrl: 'page4.html'
})

export class Page4 {
  traffic: string = "boat";

  boat: string[];
  train: string[];
  bus: string[];

  testJsonURL:string;

  text: string;
  showText: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              getJson:JsonData,
              private dataServiceNum: DataServiceNum) {
    this.text = navParams.get("text");
    this.showText = this.text;
    console.log(this.showText);
    
    this.testJsonURL = 'https://gist.githubusercontent.com/ueken0307/6d7205f2492a48cbc2c4bcdbeb2754b1/raw/d140717972a7efe8e0bbc04728e4356643ffae2e/station.json';

    getJson.getData(this.testJsonURL).subscribe(input=>{
      //渡船場データ取得
      this.boat = input.boat;
      //駅データ取得
      this.train = input.train;
      //バス停データ取得
      this.bus = input.bus;
    });
    
    this.dataServiceNum.sendSampleNum(4);
  }

  itemTapped(event, item, flag) {
    this.navCtrl.push(TimeTablePage, {station:item});
  }
}
