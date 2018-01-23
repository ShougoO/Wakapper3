import { Component/*, ViewChild*/} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { URLSearchParams, QueryEncoder } from '@angular/http';

import { JsonData } from '../../app/json-data';

import { RegiForm } from './registration/registration';
import { SubmForm } from './submit/submit';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2{
  //@ViewChild('content') content;
  text: string;
  showText: string;


  datasNum: number;
  dataNames: any;
  contribution = [];

  login: string | null;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public dataService: JsonData) {
    this.text = navParams.get("text");
    this.showText = this.text;
  }

  ionViewDidLoad() {
    var Url = document.location.search.substring(1);
    var urlParams = new URLSearchParams(Url, new QueryEncoder());
    var Q = urlParams.getAll("q");

    /*
    if (Q[0] == "regi") {         // "regi"(登録・ログイン)なら、表示を変更
      this.login = "ログイン中";
    }else{
      this.login = null;
    }
    */
    this.getJsonDatas();
  }

  // ログアアウト
  logOut(){
    this.login = null;
    this.navCtrl.setRoot(Page2, "Page2");
  }

  // json取得
  getJsonDatas() {
    this.dataService.getData('../assets/data/datas.json').subscribe(dataName => {
      this.dataNames = dataName.dataNames;
      
      this.datasNum = 0;
      for(var i=0; this.dataNames[i]!=null;i++){
        this.dataService.getData('../assets/data/'+ this.dataNames[i]).subscribe(data => {
          this.contribution.push(data.contribution);
        });
        this.datasNum++;
      }
    });
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
