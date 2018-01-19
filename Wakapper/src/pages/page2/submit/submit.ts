import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-submit',
    templateUrl: 'submit.html'
})
export class SubmForm {
  @ViewChild('comments') formElement;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  postURL(url) {
    //var Form = <HTMLFormElement>this.formElement.nativeElement;
    this.formElement.nativeElement.method = "POST";
    this.formElement.nativeElement.action = url;
    this.formElement.nativeElement.submit();
  }
}
