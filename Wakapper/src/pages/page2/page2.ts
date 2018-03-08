import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { URLSearchParams, QueryEncoder } from '@angular/http';

import { JsonData } from '../../app/json-data';

import { RegiForm } from '../registration/registration';
import { SubmForm } from './submit/submit';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2{
  text: string;
  showText: string;

  datasNum: number;
  dataNames: any;
  contribution = [];

  login: string | null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: JsonData) {
    this.text = navParams.get("text");
    this.showText = this.text;
    this.datasNum = 0;
  }

  ionViewDidLoad() {
    var Url = document.location.search.substring(1);
    var urlParams = new URLSearchParams(Url, new QueryEncoder());
    var Q = urlParams.getAll("q");

    if (Q[0] == "regi" || Q[0] == "login") {         // "regi"(登録・ログイン)なら、表示を変更
      this.login = "ログイン中";
    }else{
      this.login = null;
    }
    
    this.getJsonDatas();
  }

  // json取得
  getJsonDatas() {
    console.log("reading datas");
    // コメントが書いてあるリストの読み込み
    this.dataService.getData('../src/assets/data/datas.json').subscribe(dataName => {//../assets/data/datas.json(local)
      this.dataNames = dataName.dataNames;
      
      // 各々のjsonを読み込みcontributionに格納 -> htmlで表示
      for(var i=0; this.dataNames[i]!=null;i++){
        console.log("reading data");
        this.dataService.getData('../src/assets/data/'+ this.dataNames[i]).subscribe(data => {//../assets/data/(local)
          this.contribution.push(data.contribution);
        });
        // 投稿数
        this.datasNum++;
      }
    });
    console.log("finished reading");
  }

  // ログアアウト
  logOut(){
    this.login = null;
    window.location.href = '../src/cgi/logout.cgi';
  }

  // 投稿ページへ
  goToSubm() {
    this.navCtrl.push(SubmForm, { num: String(this.datasNum+1) });
  }

  // 登録・ログインへ
  goToRegi() {
    this.navCtrl.push(RegiForm);
  }
}
