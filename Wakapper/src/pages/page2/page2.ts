import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { URLSearchParams, QueryEncoder } from '@angular/http';

import { JsonData } from '../../app/json-data';
import { DataServiceFavo } from '../../app/data.service.favorite';

import { RegiForm } from '../registration/registration';
import { SubmForm } from './submit/submit';

import { DataServiceNum } from '../../app/data.service.num';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2{
  @ViewChild('form') formElement;
  text: string;
  showText: string;

  datasNum: number;
  dataNames: any;
  contribution = [];

  login: string | null;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public dataService: JsonData,
              private dataServiceNum: DataServiceNum,
              private dataServiceFavo: DataServiceFavo) {
    this.text = navParams.get("text");
    this.showText = this.text;
    console.log(this.showText);
    this.datasNum = 0;

    this.dataServiceNum.sendSampleNum(2);
  }

  ionViewDidLoad() {
    var Url = document.location.search.substring(1);
    var urlParams = new URLSearchParams(Url, new QueryEncoder());
    var Q = urlParams.getAll("q");

    if (Q[1] == "regi" || this.dataServiceFavo.confiOfq1(Q[1]) == 1) {
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
    this.dataService.getData('../src/assets/data/datas.json').subscribe(dataName => {
      this.dataNames = dataName.dataNames;
      
      // 各々のjsonを読み込みcontributionに格納 -> htmlで表示
      for(var i=0; this.dataNames[i]!=null;i++){
        console.log("reading data");
        this.dataService.getData('../src/assets/data/'+ this.dataNames[i]).subscribe(data => {
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
    /*
    this.formElement.nativeElement.method = "POST";
    if(this.dataServiceFavo.getMKFavo()!='999'){
      this.formElement.nativeElement.action = '../src/cgi/logout.cgi'+'?'+this.dataServiceFavo.getMKFavo();
    }else{
      this.formElement.nativeElement.action = '../src/cgi/logout.cgi';
    }
    alert(this.formElement.nativeElement.action);
    this.formElement.nativeElement.submit();
    */
    if(this.dataServiceFavo.getMKFavo()!='-1'){
      window.location.href = '../src/cgi/logout.cgi?2+'
                              +this.dataServiceFavo.getUsrName()
                              +"+"+this.dataServiceFavo.getMKFavo();
      window.location.href = '../src/cgi/logout.cgi?2';
    }
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
