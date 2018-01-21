import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {TimeTablePage} from '../time-table/time-table'

@Component({
  selector: 'page-page4',
  templateUrl: 'page4.html'
})

export class Page4 {
  traffic: string = "boat";

  boat: string[];
  train: string[];
  bus: string[];


  selectedItem: any;
  data: Array<{ traffic: Number, place: Number }>;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem = navParams.get('item');

    //渡船場データ取得
    this.boat = ['若松渡場', '戸畑渡場'];

    //駅データ取得
    this.train = ['若松駅', '奥洞海駅', '藤ノ木駅', '二島駅'];

    //バス停データ取得
    this.bus = ['バス停1', 'バス停2', 'バス停3', 'バス停4'];


  }


  itemTapped(event, item, flag) {
    this.navCtrl.push(TimeTablePage, {station:item});
  }
}
