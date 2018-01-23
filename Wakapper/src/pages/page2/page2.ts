import { Component, ViewChild} from '@angular/core';
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
  @ViewChild('content') content;
  text: string;
  showText: string;
  questions: any;
  Q: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public dataService: JsonData) {
    this.text = navParams.get("text");
    this.showText = this.text;
  }

  ionViewDidLoad() {
    var Url = document.location.search.substring(1);
    var urlParams = new URLSearchParams(Url, new QueryEncoder());
    this.Q = urlParams.get("q");

    if (this.Q == "subm") {
      this.getQuestion();
    }
  }

  getQuestion() {
    this.dataService.getData('../src/assets/data/data.json').subscribe(questions => {
      this.questions = questions.contribution;
    });
  }

  goToSubm() {
    this.navCtrl.push(SubmForm);
  }

  goToRegi() {
    this.navCtrl.push(RegiForm);
  }
}
