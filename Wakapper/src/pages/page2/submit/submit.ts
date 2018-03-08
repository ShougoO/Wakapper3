import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-submit',
    templateUrl: 'submit.html'
})
export class SubmForm {
  @ViewChild('comments') formElement;
  num: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // 投稿数
    this.num = navParams.get("num");
  }

  postURL(url) {
    //var Form = <HTMLFormElement>this.formElement.nativeElement;
    
    this.formElement.nativeElement.method = "POST";
    this.formElement.nativeElement.action = url;
    this.formElement.nativeElement.submit();
  }
}
