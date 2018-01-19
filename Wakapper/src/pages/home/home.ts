import { Component } from '@angular/core';
import { URLSearchParams, QueryEncoder } from '@angular/http';
import { NavController } from 'ionic-angular';

import { DataService } from '../../app/data.service';
import { MyApp } from '../../app/app.component';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    page: any;

    constructor(public navCtrl: NavController, private dataService: DataService) { }

    //画面表示後、掲示板の登録用のcgiから
    //パラメータが送られてきた場合(q = regi)
    //page2へ遷移する
    ionViewDidEnter() {
      var Url = document.location.search.substring(1);
      var urlParams = new URLSearchParams(Url, new QueryEncoder());
      var Q = urlParams.get("q");
      if (Q == "regi" || Q == "subm") {
        this.goToPage2();
      }
    }
    
    /* URL先へ遷移する
    onLink(url: string) {
        window.open(url);
    }
    */
    
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
}
