import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {JsonData} from '../../app/json-data';

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  traffic: string = "boat";

  name:string;
  address:string;
  picURL:string;
  open:string;
  comment: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,getJson:JsonData) {
    this.name = navParams.get('title');
    this.address = navParams.get('address');
    this.comment = navParams.get('comment');
    this.open = navParams.get('open');
  }
}
