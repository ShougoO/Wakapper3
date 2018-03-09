import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DataServiceNum } from '../../app/data.service.num';

@Component({
    selector: 'page-registration',
    templateUrl: 'registration.html'
})
export class RegiForm {
  @ViewChild('form') formElement;

  pageNum: number;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private dataServiceNum: DataServiceNum
  ) {
    this.pageNum = this.dataServiceNum.sendSampleNum(6);
  }

  postURL(url) {
    //var Form = <HTMLFormElement>this.formElement.nativeElement;

    this.formElement.nativeElement.method = "POST";
    this.formElement.nativeElement.action = url;
    this.formElement.nativeElement.submit();
  }
}
