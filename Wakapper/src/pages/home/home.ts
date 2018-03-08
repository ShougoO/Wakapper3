import { Component } from '@angular/core';
import { URLSearchParams, QueryEncoder } from '@angular/http';
import { NavController } from 'ionic-angular';

import { DataService } from '../../app/data.service';
import { DataServiceSubm } from '../../app/data.service.subm';
import { MyApp } from '../../app/app.component';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    page: any;
    flag: string= 'logout';

    constructor(public navCtrl: NavController,
                private dataService: DataService,
                private dataServiceSubm: DataServiceSubm,) { }

    //画面表示後、掲示板の登録用のcgiから
    //パラメータが送られてきた場合(q = regi)
    //page2へ遷移する
    ionViewDidEnter() {
      var Url = document.location.search.substring(1);
      var urlParams = new URLSearchParams(Url, new QueryEncoder());
      var Q = urlParams.getAll("q");

      // 全パラメータの中の先頭で判断
      // "regi"(登録・ログイン),"login"(ログイン)したときdataserviceに送信
      if (Q[0] == "regi" || Q[0] == "login") {
        this.flag = 'login';
        this.sendToDataService();
        if(Q[1] == "subm"){;
          this.dataServiceSubm.sendSampleNum(1);
        }
      } else {
        this.flag= 'logout';
      }
    }
    
    sendToDataService(){
      this.dataService.sendSampleText("relo");
    }

    goToPage1() {
      MyApp.text = "Page1";
      this.dataService.sendSampleText("Page01");
    }

    goToPage2() {
      MyApp.text = "Page2";
      this.dataService.sendSampleText("Page02");
    }

    goToPage3() {
      MyApp.text = "Page3";
      this.dataService.sendSampleText("Page03");
    }

    goToPage4() {
      MyApp.text = "Page4";
      this.dataService.sendSampleText("Page04");
    }

    goToRegi() {
      MyApp.text = "Regi";
      this.flag= 'login';
      this.dataService.sendSampleText("Regi");
    }

    // ログアアウト
    logOut(){
      this.flag= 'logout';
      window.location.href = '../src/cgi/logout.cgi';
    }
}
