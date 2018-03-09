import { Component, ViewChild } from '@angular/core';
import { URLSearchParams, QueryEncoder } from '@angular/http';
import { NavController, NavParams } from 'ionic-angular';

import { DataService } from '../../app/data.service';
import { DataServiceNum } from '../../app/data.service.num';
import { DataServiceFavo } from '../../app/data.service.favorite';
import { MyApp } from '../../app/app.component';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    @ViewChild('form') formElement;

    page: any;
    flag: string= 'logout';

    text: string;
    showText: string;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private dataService: DataService,
                private dataServiceNum: DataServiceNum,
                private dataServiceFavo: DataServiceFavo) {
      this.text = navParams.get("text");
      this.showText = this.text;
      console.log(this.showText);
    }

    //画面表示後、掲示板の登録用のcgiから
    //パラメータが送られてきた場合(q = regi)
    //page2へ遷移する
    ionViewDidEnter() {
      var Url = document.location.search.substring(1);
      var urlParams = new URLSearchParams(Url, new QueryEncoder());
      var Q = urlParams.getAll("q");

      if(Q[2] == "subm"){
        console.log("Q[2] : "+Q[2]);
        this.dataServiceNum.sendSampleNum(0);
      }

      console.log("Q[0] : "+Q[0]);
      switch(Q[0]){
        case '1' :
                  this.dataServiceNum.sendSampleNum(-1);
                  break;
        case '2' :
                  this.dataServiceNum.sendSampleNum(-2);
                  break;
        case '3' :
                  this.dataServiceNum.sendSampleNum(-3);
                  break;
        case '4' :
                  this.dataServiceNum.sendSampleNum(-4);
                  break;
      }

      if (Q[1] == "regi" || Q[1] == "login") {
        this.flag = 'login';
        this.dataServiceFavo.sendSampleEvent(999);
        this.sendToDataService();
      } else {
        this.flag= 'logout';
      }

      this.dataServiceNum.sendSampleNum(5);
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
      
      /*
      this.formElement.nativeElement.method = "POST";
      if(this.dataServiceFavo.getMKFavo()!='999'){
        this.formElement.nativeElement.action = '../src/cgi/logout.cgi'+'?5,'+this.dataServiceFavo.getMKFavo();
      }else{
        this.formElement.nativeElement.action = '../src/cgi/logout.cgi';
      }
      alert(this.formElement.nativeElement.action);
      this.formElement.nativeElement.submit();
      */
      if(this.dataServiceFavo.getMKFavo()!='999'){
        window.location.href = '../src/cgi/logout.cgi?5+'+this.dataServiceFavo.getMKFavo();
      }else{
        window.location.href = '../src/cgi/logout.cgi?5';
      }
    }
}
