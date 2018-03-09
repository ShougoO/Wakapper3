import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DataServiceFavo } from '../../../app/data.service.favorite';

@Component({
    selector: 'page-submit',
    templateUrl: 'submit.html'
})
export class SubmForm {
  @ViewChild('form') formElement;
  @ViewChild('title') titleElement;
  @ViewChild('comment') commentElement;
  num: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataServiceFavo: DataServiceFavo) {
    // 投稿数
    this.num = navParams.get("num");
  }

  postURL(url) {
    var Form = <HTMLFormElement>this.formElement.nativeElement;
 
    window.location.href = url+'?'+Form.elements['titleID'].value
                           +"+"+Form.elements['commentID'].value
                           +"+"+this.num
  }
}
