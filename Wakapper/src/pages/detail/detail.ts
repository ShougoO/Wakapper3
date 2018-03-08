import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {JsonData} from '../../app/json-data';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  traffic: string = "boat";

  name:string;
  address:string;
  picURL:string;
  open:string;
  comment:Array<{title:string,comment:string}>;
  commentSize:number;

  //boat: string[];
  //train: string[];
  //bus: string[];

  //testJsonURL:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,getJson:JsonData) {
    /*
    this.testJsonURL = 'https://gist.githubusercontent.com/ueken0307/6d7205f2492a48cbc2c4bcdbeb2754b1/raw/d140717972a7efe8e0bbc04728e4356643ffae2e/station.json';

    getJson.getData(this.testJsonURL).subscribe(input=>{
      //渡船場データ取得
      this.boat = input.boat;
      //駅データ取得
      this.train = input.train;
      //バス停データ取得
      this.bus = input.bus;
    });
    */

    this.name = "マック 二島リバーウォーク店";
    this.address = "福岡県北九州市若松区二島  １－４－７";
    this.comment = [];

    this.comment.push({
      title: " かなしい",
      comment: "へいてんした"
    });

    this.comment.push({
      title: "たいとる",
      comment: "おーぷんした"
    });

    this.open = `営業時間
      平日:9:00~19:00
      土日祝日:10:00~19:00    
    `;

    this.commentSize = this.comment.length;
  }

}
