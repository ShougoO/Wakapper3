import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {JsonData} from '../../app/json-data';
import { DataServiceFavo } from '../../app/data.service.favorite';

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  traffic: string = "boat";

  name: string;
  address: string;
  picURL: string;
  open: string;
  comment: string;

  num: number;
  flag: number;
  showFlag: number = 0;// 1 ⇒ 解除と表示, 0 ⇒ 登録と表示

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              getJson:JsonData,
              private dataServiceFavo: DataServiceFavo) {
    this.name = navParams.get('title');
    this.address = navParams.get('address');
    this.comment = navParams.get('comment');
    this.open = navParams.get('open');
    this.num = navParams.get('num');
    this.flag = navParams.get('flag');
  }

  ionViewDidLoad(){
    this.showFlag = this.dataServiceFavo.sendSampleEvent(this.name, -1*(this.num+1));
  }

  setFavo(){
    if(this.flag==1){
      let x = this.dataServiceFavo.sendSampleEvent(this.name, this.num);
      if(x==1){
        alert("お気に入り解除しました");
      }else{
        alert("お気に入り登録しました");
      }
      
      this.showFlag = this.dataServiceFavo.sendSampleEvent(this.name, -1*(this.num+1));
    }else if(this.flag!=1){
      alert("ログインしてください");
    }
  }
}
