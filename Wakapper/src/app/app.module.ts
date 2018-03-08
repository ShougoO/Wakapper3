import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { SubmForm } from '../pages/page2/submit/submit';
import { Page3Module } from '../pages/page3/page3.module';
import { Page4 } from '../pages/page4/page4';
<<<<<<< HEAD
import {TimeTablePage} from '../pages/time-table/time-table'
import {DetailPage} from '../pages/detail/detail';

=======
import { RegiForm } from '../pages/registration/registration';

import { CalendarProvider } from '../providers/calendar/calendar';
>>>>>>> 1c740043cb543370ac4ec91e501140e0f8d1f75e
import { DataService } from './data.service';
import { JsonData } from './json-data';

import { GoogleMaps } from '@ionic-native/google-maps';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Page1,
    Page2,
    RegiForm,
    SubmForm,
<<<<<<< HEAD
    Page3,
    Page4,
    TimeTablePage,
    DetailPage
=======
    Page4
>>>>>>> 1c740043cb543370ac4ec91e501140e0f8d1f75e
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    BrowserModule,
    HttpModule,
    Page3Module
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Page1,
    Page2,
    RegiForm,
    SubmForm,
<<<<<<< HEAD
    Page3,
    Page4,
    TimeTablePage,
    DetailPage
=======
    Page4
>>>>>>> 1c740043cb543370ac4ec91e501140e0f8d1f75e
  ],
  providers: [
    GoogleMaps,
    DataService,
    JsonData,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    CalendarProvider
  ]
})
export class AppModule {}
