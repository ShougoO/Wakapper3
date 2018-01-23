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
  questions: any;

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
    this.getQuestion();
  }

  // ログアアウト
  logOut(){
    this.login = null;
    this.navCtrl.setRoot(Page2, "Page2");
  }

  // json取得
  getQuestion() {
    this.dataService.getData().subscribe(questions => {
      this.questions = questions.contribution;
    });
  }

  // 投稿ページへ
  goToSubm() {
    this.navCtrl.push(SubmForm);
  }

  // 登録・ログインへ
  goToRegi() {
    this.navCtrl.push(RegiForm);
  }
}
