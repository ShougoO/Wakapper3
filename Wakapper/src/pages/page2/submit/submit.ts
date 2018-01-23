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
    this.num = navParams.get("num");
  }

  postURL(url) {
    //var Form = <HTMLFormElement>this.formElement.nativeElement;
    var ele = document.createElement('input');
    // データを設定
    ele.setAttribute('num', this.num);
    // 要素を追加
    this.formElement.nativeElement.appendChild(ele);

    this.formElement.nativeElement.method = "POST";
    this.formElement.nativeElement.action = url;
    this.formElement.nativeElement.submit();
  }
}
