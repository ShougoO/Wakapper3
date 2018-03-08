import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Page3 } from './page3';

@NgModule({
  declarations: [
    Page3,
  ],
  imports: [
    IonicPageModule.forChild(Page3),
  ],
  exports: [
    Page3,
  ]
})
export class Page3Module {}
