webpackJsonp([2],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = (function () {
    function DataService() {
        this.SampleText = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.Text$ = this.SampleText.asObservable();
    }
    DataService.prototype.sendSampleText = function (msg) {
        this.SampleText.next(msg);
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());

//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegiForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_data_service_num__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegiForm = (function () {
    function RegiForm(navCtrl, navParams, dataServiceNum) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataServiceNum = dataServiceNum;
        this.pageNum = this.dataServiceNum.sendSampleNum(6);
    }
    RegiForm.prototype.postURL = function (url) {
        //var Form = <HTMLFormElement>this.formElement.nativeElement;
        this.formElement.nativeElement.method = "POST";
        this.formElement.nativeElement.action = url;
        this.formElement.nativeElement.submit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('form'),
        __metadata("design:type", Object)
    ], RegiForm.prototype, "formElement", void 0);
    RegiForm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registration',template:/*ion-inline-start:"C:\Users\micro\Wakapper3\Wakapper\src\pages\registration\registration.html"*/'<ion-header>\n\n  <ion-navbar color="secondary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>アカウントの登録・ログイン</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content >\n\n  <form #form>\n\n    ID<br>\n\n    <input type="text" maxlength="12" name="id" id="content"/><br><br>\n\n    Pass<br>\n\n    <input type="password" maxlength="12" name="pass" id="content"/><br><br>\n\n    <input type="hidden" [(ngModel)]="this.pageNum" name="num" id="content" value="{{this.pageNum}}" readonly />\n\n\n\n    <input type="submit" value="登録する" (click)="postURL(\'../src/cgi/regi.cgi\')" />\n\n    <input type="submit" value="ログインする" (click)="postURL(\'../src/cgi/login.cgi\')" />\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\micro\Wakapper3\Wakapper\src\pages\registration\registration.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__app_data_service_num__["a" /* DataServiceNum */]])
    ], RegiForm);
    return RegiForm;
}());

//# sourceMappingURL=registration.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeTablePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_json_data__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TimeTablePage = (function () {
    function TimeTablePage(navCtrl, navParams, getJson) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.direction = "up";
        this.selectedItem = navParams.get('station');
        //時刻データ取得
        this.testJsonURL = 'https://gist.githubusercontent.com/ueken0307/5cdc99ceb8ca4324b3c82ceb2eecabeb/raw/41f716820176b8817796204be12eae93c0a8c67c/timeTable.json';
        getJson.getData(this.testJsonURL).subscribe(function (input) {
            _this.upTimeTable = input[_this.selectedItem].up;
            _this.downTimeTable = input[_this.selectedItem].down;
        });
    }
    TimeTablePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-time-table',template:/*ion-inline-start:"C:\Users\micro\Wakapper3\Wakapper\src\pages\time-table\time-table.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{this.selectedItem}}</ion-title>\n\n  </ion-navbar>\n\n\n\n  <ion-toolbar no-border-top>\n\n    <ion-segment [(ngModel)]="direction">\n\n      <ion-segment-button value="up">\n\n        上り\n\n\n\n      </ion-segment-button>\n\n      <ion-segment-button value="down">\n\n        下り\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n  <div [ngSwitch]="direction">\n\n\n\n    <ion-list *ngSwitchCase="\'up\'">\n\n      <ion-item *ngFor="let item of upTimeTable">\n\n        {{item}}\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n\n\n    <ion-list *ngSwitchCase="\'down\'">\n\n      <ion-item *ngFor="let item of downTimeTable">\n\n        {{item}}\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\micro\Wakapper3\Wakapper\src\pages\time-table\time-table.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_json_data__["a" /* JsonData */]])
    ], TimeTablePage);
    return TimeTablePage;
}());

//# sourceMappingURL=time-table.js.map

/***/ }),

/***/ 118:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/detail/detail.module": [
		288,
		1
	],
	"../pages/page3/page3.module": [
		161
	],
	"../pages/time-table/time-table.module": [
		289,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 160;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page3Module", function() { return Page3Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page3__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Page3Module = (function () {
    function Page3Module() {
    }
    Page3Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__page3__["a" /* Page3 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__page3__["a" /* Page3 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__page3__["a" /* Page3 */],
            ]
        })
    ], Page3Module);
    return Page3Module;
}());

//# sourceMappingURL=page3.module.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page3; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_calendar_calendar__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_json_data__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_data_service_num__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__detail_detail__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Page3 = (function () {
    function Page3(navCtrl, calendar, navParams, dataService, dataServiceNum) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.calendar = calendar;
        this.navParams = navParams;
        this.dataService = dataService;
        this.dataServiceNum = dataServiceNum;
        this.cal = [];
        this.current_calendar = [];
        this.wait = false;
        this.testDatas = [];
        this.text = navParams.get("text");
        this.showText = this.text;
        console.log(this.showText);
        var t = this.calendar.getToday(); // 今日の日付けを取得
        this.current_calendar = t;
        var l = this.calendar.lastMonth(t[0], t[1]); // 前月の年月を取得
        var n = this.calendar.nextMonth(t[0], t[1]); // 来月の年月を取得
        var now = this.calendar.getCalendarYM(t[0], t[1]); // 今月のカレンダー情報を作成
        var last = this.calendar.getCalendarYM(l[0], l[1]); // 前月のカレンダー情報を作成
        var next = this.calendar.getCalendarYM(n[0], n[1]); // 来月のカレンダー情報を作成
        this.cal = [last, now, next];
        this.dataService.getData('assets/data/event.json').subscribe(function (data) {
            _this.testEvents = data.events;
            for (var i = 0; _this.testEvents[i] != null; i++) {
                _this.testDatas.push(_this.testEvents[i]);
            }
        });
        this.dataServiceNum.sendSampleNum(3);
    }
    Page3.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SwipePage');
    };
    Page3.prototype.nextSlide = function () {
        console.log("next");
        if (this.wait == false) {
            this.wait = true;
            return;
        }
        var c = this.cal[2];
        this.current_calendar = [c.year, c.month];
        var ym = this.calendar.nextMonth(c.year, c.month);
        var n = this.calendar.getCalendarYM(ym[0], ym[1]);
        this.cal.push(n);
        this.cal.shift();
        this.slides.slideTo(1, 0, false);
    };
    Page3.prototype.beforeSlide = function () {
        console.log("before");
        var c = this.cal[0];
        this.current_calendar = [c.year, c.month];
        var ym = this.calendar.lastMonth(c.year, c.month);
        var n = this.calendar.getCalendarYM(ym[0], ym[1]);
        this.cal.unshift(n);
        this.cal.pop();
        this.slides.slideTo(1, 0, false);
    };
    Page3.prototype.showEventFlag = function (year, month, day, bool) {
        for (var i = 0; this.testDatas[i] != null; i++) {
            if (this.testDatas[i].date.year == year
                && this.testDatas[i].date.month == month
                && this.testDatas[i].date.day == day
                && bool != true) {
                return 1;
            }
        }
        return 0;
    };
    // text：全角文字９文字以内
    Page3.prototype.showEvent = function (year, month, day, bool) {
        var str = [""];
        for (var i = 0; this.testDatas[i] != null; i++) {
            if (this.testDatas[i].date.year == year
                && this.testDatas[i].date.month == month
                && this.testDatas[i].date.day == day
                && bool != true) {
                str.push(this.testDatas[i].text);
            }
        }
        str.shift();
        return str;
    };
    Page3.prototype.showThisMonthEvent = function (month) {
        var str = [];
        for (var i = 0; this.testDatas[i] != null; i++) {
            if (this.testDatas[i].date.month == month) {
                str.push(this.testDatas[i]);
            }
        }
        str.sort(function (a, b) {
            if (a.date.day < b.date.day)
                return -1;
            if (a.date.day > b.date.day)
                return 1;
            return 0;
        });
        return str;
    };
    Page3.prototype.goToDetail = function (event) {
        for (var i = 0; this.testDatas[i] != null; i++) {
            if (this.testDatas[i].text == event) {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__detail_detail__["a" /* DetailPage */], {
                    title: this.testDatas[i].text,
                    comment: this.testDatas[i].comment,
                    address: this.testDatas[i].address,
                    open: this.testDatas[i].open
                });
                return;
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("Slides"),
        __metadata("design:type", Object)
    ], Page3.prototype, "slides", void 0);
    Page3 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-page3',template:/*ion-inline-start:"C:\Users\micro\Wakapper3\Wakapper\src\pages\page3\page3.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>イベントカレンダー</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content no-bounce>\n\n  <ion-grid class="calendar-header" no-padding>\n\n    <ion-row>\n\n      <ion-col>\n\n        <button ion-button (click)="beforeSlide()">\n\n          ＜\n\n        </button>\n\n        <span class="title">\n\n          {{current_calendar[0]}}年{{current_calendar[1]}}月\n\n        </span>\n\n        <button ion-button (click)="nextSlide()">\n\n          ＞\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  \n\n  <ion-slides class="slide" #Slides (ionSlidePrevEnd)="beforeSlide()" (ionSlideNextEnd)="nextSlide()" initialSlide="1">\n\n    <ion-slide *ngFor="let c of cal; let idx = index;">\n\n      <table class="date-table">\n\n        <tbody class="date-body">\n\n          <tr class="weekday">\n\n            <td>日</td>\n\n            <td>月</td>\n\n            <td>火</td>\n\n            <td>水</td>\n\n            <td>木</td>\n\n            <td>金</td>\n\n            <td>土</td>\n\n          </tr>\n\n          <tr *ngFor="let week of c.week; let w = index;">\n\n            <td *ngFor="let day of week; let d = index;">\n\n              <div class="day">\n\n                <span [ngClass]="{\'other\':day.other}">\n\n                  {{day.day}}\n\n                </span>\n\n                <br>\n\n                <span *ngIf="showEventFlag(current_calendar[0], c.month, day.day, day.other)==1">\n\n                  <br>\n\n                  <section class="spanSection" *ngFor="let event of showEvent(current_calendar[0], c.month, day.day, day.other)">\n\n                    <ion-icon name="star" style="color : green;">\n\n                      <section class="spanText">\n\n                        <button clear (click)="goToDetail(event)" style="background-color:white; font-size: 1.5em;">\n\n                          {{event}}\n\n                        </button>\n\n                      </section>\n\n                    </ion-icon>\n\n                  </section>\n\n                </span>\n\n              </div>\n\n            </td>\n\n          </tr>\n\n        </tbody>\n\n      </table>\n\n      <!-- ウィンドウが小さくなったときに、表示されるリスト -->\n\n      <div class="spanEventDates" *ngFor="let event of showThisMonthEvent(c.month)">\n\n        <ion-card>\n\n          <ion-card-content>\n\n            <ion-icon name="star" style="color : green;">\n\n              <button clear (click)="goToDetail(event.text)" style="background-color:white; font-size: 1em;">\n\n                {{event.date.day}}日：{{event.text}}\n\n              </button>\n\n            </ion-icon>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </div>\n\n      <!-- ウィンドウが小さくなったときに、表示されるリスト -->\n\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\micro\Wakapper3\Wakapper\src\pages\page3\page3.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_calendar_calendar__["a" /* CalendarProvider */]],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_calendar_calendar__["a" /* CalendarProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_calendar_calendar__["a" /* CalendarProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__app_json_data__["a" /* JsonData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_json_data__["a" /* JsonData */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__app_data_service_num__["a" /* DataServiceNum */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__app_data_service_num__["a" /* DataServiceNum */]) === "function" && _e || Object])
    ], Page3);
    return Page3;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=page3.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CalendarProvider = (function () {
    function CalendarProvider() {
    }
    CalendarProvider.prototype.getCalendarYM = function (year, month) {
        var c = this.generateCalendar(year, month);
        return c;
    };
    CalendarProvider.prototype.generateCalendar = function (year, month) {
        var day = this.calc_day(year, month);
        var year_days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        var leap_year_days = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        day -= 1;
        if (day < 0) {
            day += 7;
        }
        var leap_year_flag = this.leap_year_judge(year);
        var result_month = [];
        if (leap_year_flag) {
            result_month = this.generateDate(year, leap_year_days, month, day);
        }
        else {
            result_month = this.generateDate(year, year_days, month, day);
        }
        var c = {
            year: year,
            month: month,
            week: result_month
        };
        return c;
    };
    CalendarProvider.prototype.calc_day = function (year, month, day) {
        if (day === void 0) { day = 1; }
        var startDate = new Date(year, month - 1, 1);
        return startDate.getDay() + 1;
    };
    CalendarProvider.prototype.leap_year_judge = function (year) {
        if ((year % 400) == 0) {
            return true;
        }
        else if ((year % 100) == 0) {
            return true;
        }
        else if ((year % 4) == 0) {
            return true;
        }
        else {
            return false;
        }
    };
    CalendarProvider.prototype.generateDate = function (year, year_date, month, first_day) {
        var cur_day = 1;
        var other_day = 1;
        var first_day_chk = false;
        var result_month = [];
        for (var w = 0; w < 6; w++) {
            var week = [];
            for (var i = 1; i <= 7; i++) {
                var day = {};
                day["day"] = "";
                if (i <= first_day && !first_day_chk) {
                    var last_m = this.lastMonth(year, month);
                    day["day"] = year_date[last_m[1]] - first_day + i;
                    day["other"] = true;
                }
                else {
                    if (!first_day_chk) {
                        first_day_chk = true;
                    }
                    if (cur_day <= year_date[month]) {
                        day["day"] = cur_day;
                    }
                    else {
                        day["day"] = other_day;
                        day["other"] = true;
                        other_day += 1;
                    }
                    cur_day += 1;
                }
                week.push(day);
            }
            result_month.push(week);
        }
        return result_month;
    };
    CalendarProvider.prototype.getToday = function () {
        var today = new Date();
        var year = today.getFullYear();
        var month = today.getMonth() + 1;
        var date = today.getDate();
        return [year, month, date];
    };
    CalendarProvider.prototype.nextMonth = function (year, month) {
        var next_year = year;
        var next_month = month + 1;
        if (13 <= next_month) {
            next_month = 1;
            next_year = next_year + 1;
        }
        return [next_year, next_month];
    };
    CalendarProvider.prototype.lastMonth = function (year, month) {
        var last_year = year;
        var last_month = month - 1;
        if (last_month <= 0) {
            last_month = 12;
            last_year = last_year - 1;
        }
        return [last_year, last_month];
    };
    CalendarProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CalendarProvider);
    return CalendarProvider;
}());

//# sourceMappingURL=calendar.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_page1_page1__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_page2_page2__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_page3_page3__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_page4_page4__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_registration_registration__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__data_service__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__data_service_num__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__data_service_favorite__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, dataService, dataServiceNum, dataServiceFavo) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.dataService = dataService;
        this.dataServiceNum = dataServiceNum;
        this.dataServiceFavo = dataServiceFavo;
        this.q = undefined;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.pagesNames = [
            'ホーム画面',
            '区内マップ',
            '掲示板',
            'イベントカレンダー',
            '運行表'
        ];
        this.pageReLo = {
            title: '登録・ログイン',
            component: __WEBPACK_IMPORTED_MODULE_9__pages_registration_registration__["a" /* RegiForm */],
            name: 'RegiForm'
        };
        this.initializeApp();
        // used for an example of ngFor and navigation
        // "ngIf" & "ngFor"用
        this.page1 = [
            { title: this.pagesNames[0], component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], name: 'HomePage' },
            { title: this.pagesNames[2], component: __WEBPACK_IMPORTED_MODULE_6__pages_page2_page2__["a" /* Page2 */], name: 'Page2' },
            { title: this.pagesNames[3], component: __WEBPACK_IMPORTED_MODULE_7__pages_page3_page3__["a" /* Page3 */], name: 'Page3' },
            { title: this.pagesNames[4], component: __WEBPACK_IMPORTED_MODULE_8__pages_page4_page4__["a" /* Page4 */], name: 'Page4' }
        ];
        this.page2 = [
            { title: this.pagesNames[0], component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], name: 'HomePage' },
            { title: this.pagesNames[1], component: __WEBPACK_IMPORTED_MODULE_5__pages_page1_page1__["a" /* Page1 */], name: 'Page1' },
            { title: this.pagesNames[3], component: __WEBPACK_IMPORTED_MODULE_7__pages_page3_page3__["a" /* Page3 */], name: 'Page3' },
            { title: this.pagesNames[4], component: __WEBPACK_IMPORTED_MODULE_8__pages_page4_page4__["a" /* Page4 */], name: 'Page4' }
        ];
        this.page3 = [
            { title: this.pagesNames[0], component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], name: 'HomePage' },
            { title: this.pagesNames[1], component: __WEBPACK_IMPORTED_MODULE_5__pages_page1_page1__["a" /* Page1 */], name: 'Page1' },
            { title: this.pagesNames[2], component: __WEBPACK_IMPORTED_MODULE_6__pages_page2_page2__["a" /* Page2 */], name: 'Page2' },
            { title: this.pagesNames[4], component: __WEBPACK_IMPORTED_MODULE_8__pages_page4_page4__["a" /* Page4 */], name: 'Page4' }
        ];
        this.page4 = [
            { title: this.pagesNames[0], component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], name: 'HomePage' },
            { title: this.pagesNames[1], component: __WEBPACK_IMPORTED_MODULE_5__pages_page1_page1__["a" /* Page1 */], name: 'Page1' },
            { title: this.pagesNames[2], component: __WEBPACK_IMPORTED_MODULE_6__pages_page2_page2__["a" /* Page2 */], name: 'Page2' },
            { title: this.pagesNames[3], component: __WEBPACK_IMPORTED_MODULE_7__pages_page3_page3__["a" /* Page3 */], name: 'Page3' }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            // Page1に移動する際は若松区の座標（緯度(lat),経度(lng)）を渡す
            _this.dataService.Text$.subscribe(function (text) {
                if (text == "Page01") {
                    _this.qNum = 1;
                    _this.showText = "Page1";
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_page1_page1__["a" /* Page1 */], { text: "Page1" });
                }
                else if (text == "Page02") {
                    _this.qNum = 2;
                    _this.showText = "Page2";
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_page2_page2__["a" /* Page2 */], { text: "Page2" });
                }
                else if (text == "Page03") {
                    _this.qNum = 3;
                    _this.showText = "Page3";
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_page3_page3__["a" /* Page3 */], { text: "Page3" });
                }
                else if (text == "Page04") {
                    _this.qNum = 4;
                    _this.showText = "Page4";
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_page4_page4__["a" /* Page4 */], { text: "Page4" });
                }
                else if (text == "Regi") {
                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_9__pages_registration_registration__["a" /* RegiForm */]);
                }
                else if (text == "relo") {
                    _this.q = text; // メニューに表示する時のflag
                }
                else {
                    if (text == "RegiForm") {
                        _this.nav.push(__WEBPACK_IMPORTED_MODULE_9__pages_registration_registration__["a" /* RegiForm */]);
                    }
                    else {
                        _this.showText = text;
                        if (text == "Page1") {
                            _this.qNum = 1;
                            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_page1_page1__["a" /* Page1 */], { text: "Page1" });
                        }
                        else {
                            var PN = ["Page1", "Page2", "Page3", "Page4"];
                            var flag = 0;
                            for (var i = 0; i < 4; i++) {
                                if (text == PN[i]) {
                                    _this.qNum = i;
                                    _this.nav.setRoot(_this.page.component, { text: text });
                                    flag = 1;
                                    break;
                                }
                            }
                            if (flag == 0) {
                                _this.nav.setRoot(_this.page.component, { text: text });
                            }
                        }
                    }
                }
            });
            _this.dataServiceNum.Num$.subscribe(function (num) {
                if (num == 0) {
                    console.log("num : " + num);
                    _this.qNum = 2;
                    _this.showText = "Page2";
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_page2_page2__["a" /* Page2 */], "Page2");
                }
                else if (num < 0) {
                    num *= -1;
                    _this.qNum = num;
                    num -= 1;
                    var P = [__WEBPACK_IMPORTED_MODULE_5__pages_page1_page1__["a" /* Page1 */], __WEBPACK_IMPORTED_MODULE_6__pages_page2_page2__["a" /* Page2 */], __WEBPACK_IMPORTED_MODULE_7__pages_page3_page3__["a" /* Page3 */], __WEBPACK_IMPORTED_MODULE_8__pages_page4_page4__["a" /* Page4 */]];
                    var PN = ["Page1", "Page2", "Page3", "Page4"];
                    _this.showText = PN[num];
                    _this.nav.setRoot(P[num], PN[num]);
                }
            });
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        //this.nav.setRoot(page.component);
        this.page = page;
        this.dataService.sendSampleText(page.name);
    };
    MyApp.prototype.logOut = function () {
        /*
        this.formElement.nativeElement.method = "POST";
        if(this.dataServiceFavo.getMKFavo()!='999'){
          this.formElement.nativeElement.action = '../src/cgi/logout.cgi'+'?'+this.dataServiceFavo.getMKFavo();
        }else{
          this.formElement.nativeElement.action = '../src/cgi/logout.cgi';
        }
        alert(this.formElement.nativeElement.action);
        this.formElement.nativeElement.submit();
        */
        if (this.dataServiceFavo.getMKFavo() != '-1') {
            window.location.href = '../src/cgi/logout.cgi?' + this.qNum + '+' + this.dataServiceFavo.getMKFavo();
        }
        else {
            window.location.href = '../src/cgi/logout.cgi?' + this.qNum;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('form'),
        __metadata("design:type", Object)
    ], MyApp.prototype, "formElement", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'sample-component',template:/*ion-inline-start:"C:\Users\micro\Wakapper3\Wakapper\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <section *ngIf="showText == \'Page1\'">\n\n        <button menuClose ion-item *ngFor="let p of page1" (click)="openPage(p)">\n\n          {{p.title}}\n\n        </button>\n\n      </section>\n\n      <section *ngIf="showText == \'Page2\'">\n\n        <button menuClose ion-item *ngFor="let p of page2" (click)="openPage(p)">\n\n          {{p.title}}\n\n        </button>\n\n      </section>\n\n      <section *ngIf="showText == \'Page3\'">\n\n        <button menuClose ion-item *ngFor="let p of page3" (click)="openPage(p)">\n\n          {{p.title}}\n\n        </button>\n\n      </section>\n\n      <section *ngIf="showText == \'Page4\'">\n\n        <button menuClose ion-item *ngFor="let p of page4" (click)="openPage(p)">\n\n          {{p.title}}\n\n        </button>\n\n      </section>\n\n      <section *ngIf="q == undefined">\n\n        <button menuClose ion-item (click)="openPage(pageReLo)" color="secondary">\n\n          {{pageReLo.title}}\n\n        </button>\n\n      </section>\n\n      <section *ngIf="q != undefined">\n\n        <button menuClose ion-item (click)="logOut()" color="danger">\n\n          ログアウトする\n\n        </button>\n\n      </section>\n\n    </ion-list>\n\n  </ion-content>\n\n  <!--\n\n  <form #form>\n\n    <input type="hidden" [(ngModel)]="this.qNum" name="num" id="content" value="{{this.qNum}}" readonly />\n\n  </form>\n\n  -->\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\micro\Wakapper3\Wakapper\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_10__data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_11__data_service_num__["a" /* DataServiceNum */],
            __WEBPACK_IMPORTED_MODULE_12__data_service_favorite__["a" /* DataServiceFavo */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_data_service__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_data_service_num__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_data_service_favorite__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_app_component__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = (function () {
    function HomePage(navCtrl, navParams, dataService, dataServiceNum, dataServiceFavo) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataService = dataService;
        this.dataServiceNum = dataServiceNum;
        this.dataServiceFavo = dataServiceFavo;
        this.flag = 'logout';
        this.text = navParams.get("text");
        this.showText = this.text;
        console.log(this.showText);
    }
    //画面表示後、掲示板の登録用のcgiから
    //パラメータが送られてきた場合(q = regi)
    //page2へ遷移する
    HomePage.prototype.ionViewDidEnter = function () {
        var Url = document.location.search.substring(1);
        var urlParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */](Url, new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* QueryEncoder */]());
        var Q = urlParams.getAll("q");
        if (Q[2] == "subm") {
            console.log("Q[2] : " + Q[2]);
            this.dataServiceNum.sendSampleNum(0);
        }
        console.log("Q[0] : " + Q[0]);
        switch (Q[0]) {
            case '1':
                this.dataServiceNum.sendSampleNum(-1);
                break;
            case '2':
                this.dataServiceNum.sendSampleNum(-2);
                break;
            case '3':
                this.dataServiceNum.sendSampleNum(-3);
                break;
            case '4':
                this.dataServiceNum.sendSampleNum(-4);
                break;
        }
        if (Q[1] == "regi" || Q[1] == "login") {
            this.flag = 'login';
            this.dataServiceFavo.sendSampleEvent('', 999);
            this.sendToDataService();
        }
        else {
            this.flag = 'logout';
        }
        this.dataServiceNum.sendSampleNum(5);
    };
    HomePage.prototype.sendToDataService = function () {
        this.dataService.sendSampleText("relo");
    };
    HomePage.prototype.goToPage1 = function () {
        __WEBPACK_IMPORTED_MODULE_6__app_app_component__["a" /* MyApp */].text = "Page1";
        this.dataService.sendSampleText("Page01");
    };
    HomePage.prototype.goToPage2 = function () {
        __WEBPACK_IMPORTED_MODULE_6__app_app_component__["a" /* MyApp */].text = "Page2";
        this.dataService.sendSampleText("Page02");
    };
    HomePage.prototype.goToPage3 = function () {
        __WEBPACK_IMPORTED_MODULE_6__app_app_component__["a" /* MyApp */].text = "Page3";
        this.dataService.sendSampleText("Page03");
    };
    HomePage.prototype.goToPage4 = function () {
        __WEBPACK_IMPORTED_MODULE_6__app_app_component__["a" /* MyApp */].text = "Page4";
        this.dataService.sendSampleText("Page04");
    };
    HomePage.prototype.goToRegi = function () {
        __WEBPACK_IMPORTED_MODULE_6__app_app_component__["a" /* MyApp */].text = "Regi";
        this.flag = 'login';
        this.dataService.sendSampleText("Regi");
    };
    // ログアアウト
    HomePage.prototype.logOut = function () {
        this.flag = 'logout';
        /*
        this.formElement.nativeElement.method = "POST";
        if(this.dataServiceFavo.getMKFavo()!='999'){
          this.formElement.nativeElement.action = '../src/cgi/logout.cgi'+'?5,'+this.dataServiceFavo.getMKFavo();
        }else{
          this.formElement.nativeElement.action = '../src/cgi/logout.cgi';
        }
        alert(this.formElement.nativeElement.action);
        this.formElement.nativeElement.submit();
        */
        if (this.dataServiceFavo.getMKFavo() != '-1') {
            window.location.href = '../src/cgi/logout.cgi?5+' + this.dataServiceFavo.getMKFavo();
        }
        else {
            window.location.href = '../src/cgi/logout.cgi?5';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('form'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "formElement", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\micro\Wakapper3\Wakapper\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>Wakapper</ion-title>\n\n    <button *ngIf="flag==\'logout\'" ion-button (click)="goToRegi()" color="secondary">\n\n      アカウント登録・ログイン\n\n    </button>\n\n    <button *ngIf="flag==\'login\'" ion-button (click)="logOut()" color="danger">\n\n      ログアウト\n\n    </button>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="links">\n\n  <button ion-button (click)="goToPage1()">\n\n    <ion-icon name="map">\n\n      <p>マップ</p>\n\n    </ion-icon>\n\n  </button>\n\n  <button ion-button (click)="goToPage2()">\n\n    <ion-icon name="chatbubbles">\n\n      <p>掲示板</p>\n\n    </ion-icon>\n\n  </button>\n\n  <button ion-button (click)="goToPage3()">\n\n    <ion-icon name="paper">\n\n      <p>カレンダー</p>\n\n    </ion-icon>\n\n  </button>\n\n  <button ion-button (click)="goToPage4()">\n\n    <ion-icon name="subway">\n\n      <p>運行表</p>\n\n    </ion-icon>\n\n  </button>\n\n  <!--\n\n  <form #form>\n\n    <input type="hidden" name="num" id="content" value="5" readonly />\n\n  </form>\n\n  -->\n\n</ion-content>'/*ion-inline-end:"C:\Users\micro\Wakapper3\Wakapper\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__app_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_4__app_data_service_num__["a" /* DataServiceNum */],
            __WEBPACK_IMPORTED_MODULE_5__app_data_service_favorite__["a" /* DataServiceFavo */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_json_data__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_data_service_num__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_data_service_favorite__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__detail_detail__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_maps__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// GoogleMap を使用する時、 @ionic-native/core が必要(npm install)

var Page1 = (function () {
    function Page1(navCtrl, navParams, googleMaps, dataService, dataServiceNum, dataServiceFavo) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.googleMaps = googleMaps;
        this.dataService = dataService;
        this.dataServiceNum = dataServiceNum;
        this.dataServiceFavo = dataServiceFavo;
        this.snippet = "hoge";
        this.text = navParams.get("text");
        this.showText = this.text;
        console.log(this.showText);
        // 読み込み時に受け取った緯度と経度の位置に Marker を設置
        this.lat = 33.9144938;
        this.lng = 130.7528295;
        this.mkState = 'マーカーを非表示にする';
        this.dataServiceNum.sendSampleNum(1);
    }
    Page1.prototype.ionViewDidLoad = function () {
        this.mapInit();
    };
    Page1.prototype.mapInit = function () {
        var _this = this;
        // json取得
        this.dataService.getData('assets/data/mkData.json').subscribe(function (data) {
            _this.mkData = data.mkData;
            _this.loadMap();
        });
    };
    // 画面が読み込まれた時のみ実行
    Page1.prototype.loadMap = function () {
        var _this = this;
        // map表示範囲設定
        var southwest = new google.maps.LatLng(33.7, 130.7);
        var northeast = new google.maps.LatLng(34.0, 130.8);
        var bounds = new google.maps.LatLngBounds(southwest, northeast);
        /* 2018/02/28記述
           移動範囲の制限を上記の"bounds"に設けたが、
           mapへは未実装
        */
        // GoogleMapの構築
        this.map = new google.maps.Map(this.mapChild.nativeElement, {
            zoom: 13,
            center: { lat: this.lat, lng: this.lng },
            minZoom: 12,
            maxZoom: 17
        });
        // Markerの設置
        this.marker = [];
        var _loop_1 = function (i) {
            this_1.marker[i] = new google.maps.Marker({
                position: { lat: this_1.mkData[i].lat, lng: this_1.mkData[i].lng },
                map: this_1.map,
                title: this_1.mkData[i].title,
                snippet: this_1.mkData[i].snippet,
                icon: {
                    url: 'assets/img/' + this_1.mkData[i].icon + '.png',
                    scaledSize: new google.maps.Size(this_1.mkData[i].width, this_1.mkData[i].height)
                },
                address: this_1.mkData[i].address,
                open: this_1.mkData[i].open
            });
            // 情報ウィンドウの設定
            var infoWindowContent = '<div id="content"><h1 id="firstHeading" class="firstHeading">'
                + this_1.marker[i].title
                + '</h1></div>'
                + this_1.marker[i].snippet;
            var infoWindow = new google.maps.InfoWindow({
                content: infoWindowContent
            });
            // カーソルが乗るたびに情報表示
            google.maps.event.addListener(this_1.marker[i], 'mouseover', function () {
                infoWindow.open(_this.map, _this.marker[i]);
            });
            google.maps.event.addListener(this_1.marker[i], 'mouseout', function () {
                infoWindow.close(_this.map, _this.marker[i]);
            });
            // クリックしたら、詳細ページへ
            google.maps.event.addListener(this_1.marker[i], 'click', function () {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__detail_detail__["a" /* DetailPage */], {
                    title: _this.marker[i].title,
                    comment: _this.marker[i].snippet,
                    address: _this.marker[i].address,
                    open: _this.marker[i].open,
                    num: i,
                    flag: _this.dataServiceFavo.sendSampleEvent('', 666)
                });
            });
        };
        var this_1 = this;
        for (var i = 0; i < 3; i++) {
            _loop_1(i);
        }
    };
    Page1.prototype.markerVisible = function () {
        if (this.mkState == 'マーカーを表示する') {
            this.mkState = 'マーカーを非表示にする';
            this.setBool(true);
        }
        else if (this.mkState == 'マーカーを非表示にする') {
            this.mkState = 'マーカーを表示する';
            this.setBool(false);
        }
    };
    Page1.prototype.setBool = function (bool) {
        for (var i = 0; i < 3; i++) {
            if (this.dataServiceFavo.sendSampleEvent(this.marker[i].title, -1 * (i + 1)) == 0) {
                this.marker[i].setVisible(bool);
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("map"),
        __metadata("design:type", Object)
    ], Page1.prototype, "mapChild", void 0);
    Page1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-page1',template:/*ion-inline-start:"C:\Users\micro\Wakapper3\Wakapper\src\pages\page1\page1.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>区内マップ</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <button ion-button (click)="markerVisible()">{{mkState}}</button>\n\n  <div #map id="map"></div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\micro\Wakapper3\Wakapper\src\pages\page1\page1.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_maps__["a" /* GoogleMaps */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_maps__["a" /* GoogleMaps */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__app_json_data__["a" /* JsonData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_json_data__["a" /* JsonData */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__app_data_service_num__["a" /* DataServiceNum */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_data_service_num__["a" /* DataServiceNum */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__app_data_service_favorite__["a" /* DataServiceFavo */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__app_data_service_favorite__["a" /* DataServiceFavo */]) === "function" && _f || Object])
    ], Page1);
    return Page1;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=page1.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_json_data__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_data_service_favorite__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__registration_registration__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__submit_submit__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_data_service_num__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var Page2 = (function () {
    function Page2(navCtrl, navParams, dataService, dataServiceNum, dataServiceFavo) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataService = dataService;
        this.dataServiceNum = dataServiceNum;
        this.dataServiceFavo = dataServiceFavo;
        this.contribution = [];
        this.text = navParams.get("text");
        this.showText = this.text;
        console.log(this.showText);
        this.datasNum = 0;
        this.dataServiceNum.sendSampleNum(2);
    }
    Page2.prototype.ionViewDidLoad = function () {
        var Url = document.location.search.substring(1);
        var urlParams = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* URLSearchParams */](Url, new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* QueryEncoder */]());
        var Q = urlParams.getAll("q");
        if (Q[1] == "regi" || Q[1] == "login") {
            this.login = "ログイン中";
        }
        else {
            this.login = null;
        }
        this.getJsonDatas();
    };
    // json取得
    Page2.prototype.getJsonDatas = function () {
        var _this = this;
        console.log("reading datas");
        // コメントが書いてあるリストの読み込み
        this.dataService.getData('assets/data/datas.json').subscribe(function (dataName) {
            _this.dataNames = dataName.dataNames;
            // 各々のjsonを読み込みcontributionに格納 -> htmlで表示
            for (var i = 0; _this.dataNames[i] != null; i++) {
                console.log("reading data");
                _this.dataService.getData('assets/data/' + _this.dataNames[i]).subscribe(function (data) {
                    _this.contribution.push(data.contribution);
                });
                // 投稿数
                _this.datasNum++;
            }
        });
        console.log("finished reading");
    };
    // ログアアウト
    Page2.prototype.logOut = function () {
        this.login = null;
        /*
        this.formElement.nativeElement.method = "POST";
        if(this.dataServiceFavo.getMKFavo()!='999'){
          this.formElement.nativeElement.action = '../src/cgi/logout.cgi'+'?'+this.dataServiceFavo.getMKFavo();
        }else{
          this.formElement.nativeElement.action = '../src/cgi/logout.cgi';
        }
        alert(this.formElement.nativeElement.action);
        this.formElement.nativeElement.submit();
        */
        if (this.dataServiceFavo.getMKFavo() != '-1') {
            window.location.href = '../src/cgi/logout.cgi?2+' + this.dataServiceFavo.getMKFavo();
        }
        else {
            window.location.href = '../src/cgi/logout.cgi?2';
        }
    };
    // 投稿ページへ
    Page2.prototype.goToSubm = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__submit_submit__["a" /* SubmForm */], { num: String(this.datasNum + 1) });
    };
    // 登録・ログインへ
    Page2.prototype.goToRegi = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__registration_registration__["a" /* RegiForm */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('form'),
        __metadata("design:type", Object)
    ], Page2.prototype, "formElement", void 0);
    Page2 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-page2',template:/*ion-inline-start:"C:\Users\micro\Wakapper3\Wakapper\src\pages\page2\page2.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>掲示板</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div id="topContent">\n\n    <button ion-button id="Registration" *ngIf="!login" (click)="goToRegi()" color="secondary">アカウントの登録・ログイン</button>\n\n    \n\n    <button ion-button id="Submit" *ngIf="login!=null" (click)="goToSubm()">コメントの投稿</button>\n\n    <button ion-button id="Registration" *ngIf="login!=null" (click)="logOut()" color="danger">ログアウト</button>\n\n  </div>\n\n\n\n  <div style="text-align: center;">\n\n      総投稿数：{{datasNum}}\n\n  </div><br>\n\n  <div *ngFor="let cont of contribution">\n\n    <ion-card>\n\n      <ion-card-header>\n\n        {{cont[0].title}}\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        {{cont[0].comments}}\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </div>\n\n  <!--\n\n  <form #form>\n\n    <input type="hidden" name="num" id="content" value="2" readonly />\n\n  </form>\n\n  -->\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\micro\Wakapper3\Wakapper\src\pages\page2\page2.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__app_json_data__["a" /* JsonData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_json_data__["a" /* JsonData */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__app_data_service_num__["a" /* DataServiceNum */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__app_data_service_num__["a" /* DataServiceNum */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__app_data_service_favorite__["a" /* DataServiceFavo */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__app_data_service_favorite__["a" /* DataServiceFavo */]) === "function" && _e || Object])
    ], Page2);
    return Page2;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=page2.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubmForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SubmForm = (function () {
    function SubmForm(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // 投稿数
        this.num = navParams.get("num");
    }
    SubmForm.prototype.postURL = function (url) {
        //var Form = <HTMLFormElement>this.formElement.nativeElement;
        this.formElement.nativeElement.method = "POST";
        this.formElement.nativeElement.action = url;
        this.formElement.nativeElement.submit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('comments'),
        __metadata("design:type", Object)
    ], SubmForm.prototype, "formElement", void 0);
    SubmForm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-submit',template:/*ion-inline-start:"C:\Users\micro\Wakapper3\Wakapper\src\pages\page2\submit\submit.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>掲示板:コメントの投稿</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <form #comments class="test_form">\n\n    投稿タイトル :<br>\n\n    <input type="text" id="content" name="title" /><br>\n\n    投稿コメント :<br>\n\n    <input type="text" id="content" name="comments" /><br><br>\n\n    <input type="hidden" [(ngModel)]="this.num" id="num" name="num" value="{{this.num}}" readonly />\n\n\n\n    <input type="submit" (click)="postURL(\'../src/cgi/subm.cgi\')" />\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\micro\Wakapper3\Wakapper\src\pages\page2\submit\submit.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SubmForm);
    return SubmForm;
}());

//# sourceMappingURL=submit.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page4; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__time_table_time_table__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_json_data__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_data_service_num__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Page4 = (function () {
    function Page4(navCtrl, navParams, getJson, dataServiceNum) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataServiceNum = dataServiceNum;
        this.traffic = "boat";
        this.text = navParams.get("text");
        this.showText = this.text;
        console.log(this.showText);
        this.testJsonURL = 'https://gist.githubusercontent.com/ueken0307/6d7205f2492a48cbc2c4bcdbeb2754b1/raw/d140717972a7efe8e0bbc04728e4356643ffae2e/station.json';
        getJson.getData(this.testJsonURL).subscribe(function (input) {
            //渡船場データ取得
            _this.boat = input.boat;
            //駅データ取得
            _this.train = input.train;
            //バス停データ取得
            _this.bus = input.bus;
        });
        this.dataServiceNum.sendSampleNum(4);
    }
    Page4.prototype.itemTapped = function (event, item, flag) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__time_table_time_table__["a" /* TimeTablePage */], { station: item });
    };
    Page4 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-page4',template:/*ion-inline-start:"C:\Users\micro\Wakapper3\Wakapper\src\pages\page4\page4.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>運行表</ion-title>\n\n  </ion-navbar>\n\n\n\n  <ion-toolbar no-border-top>\n\n    <ion-segment [(ngModel)]="traffic">\n\n      <ion-segment-button value="boat">\n\n        船\n\n      </ion-segment-button>\n\n      <ion-segment-button value="train">\n\n        電車\n\n      </ion-segment-button>\n\n      <ion-segment-button value="bus">\n\n        バス\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div [ngSwitch]="traffic">\n\n\n\n    <ion-list *ngSwitchCase="\'boat\'">\n\n      <button ion-item *ngFor="let item of boat" (click)="itemTapped($event, item)">\n\n        {{item}}\n\n      </button>\n\n    </ion-list>\n\n\n\n\n\n    <ion-list *ngSwitchCase="\'train\'">\n\n      <button ion-item *ngFor="let item of train" (click)="itemTapped($event, item)">\n\n        {{item}}\n\n      </button>\n\n    </ion-list>\n\n\n\n\n\n    <ion-list *ngSwitchCase="\'bus\'">\n\n      <button ion-item *ngFor="let item of bus" (click)="itemTapped($event, item)">\n\n        {{item}}\n\n      </button>\n\n    </ion-list>\n\n\n\n  </div>\n\n \n\n</ion-content>'/*ion-inline-end:"C:\Users\micro\Wakapper3\Wakapper\src\pages\page4\page4.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__app_json_data__["a" /* JsonData */],
            __WEBPACK_IMPORTED_MODULE_4__app_data_service_num__["a" /* DataServiceNum */]])
    ], Page4);
    return Page4;
}());

//# sourceMappingURL=page4.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(238);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_page1_page1__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_page2_page2__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_page2_submit_submit__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_page3_page3_module__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_page4_page4__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_time_table_time_table__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_detail_detail__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_registration_registration__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_calendar_calendar__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__data_service__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__data_service_num__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__data_service_favorite__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__json_data__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_google_maps__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_page1_page1__["a" /* Page1 */],
                __WEBPACK_IMPORTED_MODULE_9__pages_page2_page2__["a" /* Page2 */],
                __WEBPACK_IMPORTED_MODULE_15__pages_registration_registration__["a" /* RegiForm */],
                __WEBPACK_IMPORTED_MODULE_10__pages_page2_submit_submit__["a" /* SubmForm */],
                __WEBPACK_IMPORTED_MODULE_12__pages_page4_page4__["a" /* Page4 */],
                __WEBPACK_IMPORTED_MODULE_13__pages_time_table_time_table__["a" /* TimeTablePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_detail_detail__["a" /* DetailPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/detail/detail.module#DetailPageModule', name: 'DetailPage', segment: 'detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/page3/page3.module#Page3Module', name: 'Page3', segment: 'page3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/time-table/time-table.module#TimeTablePageModule', name: 'TimeTablePage', segment: 'time-table', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_11__pages_page3_page3_module__["Page3Module"]
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_page1_page1__["a" /* Page1 */],
                __WEBPACK_IMPORTED_MODULE_9__pages_page2_page2__["a" /* Page2 */],
                __WEBPACK_IMPORTED_MODULE_15__pages_registration_registration__["a" /* RegiForm */],
                __WEBPACK_IMPORTED_MODULE_10__pages_page2_submit_submit__["a" /* SubmForm */],
                __WEBPACK_IMPORTED_MODULE_12__pages_page4_page4__["a" /* Page4 */],
                __WEBPACK_IMPORTED_MODULE_13__pages_time_table_time_table__["a" /* TimeTablePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_detail_detail__["a" /* DetailPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_google_maps__["a" /* GoogleMaps */],
                __WEBPACK_IMPORTED_MODULE_17__data_service__["a" /* DataService */],
                __WEBPACK_IMPORTED_MODULE_18__data_service_num__["a" /* DataServiceNum */],
                __WEBPACK_IMPORTED_MODULE_19__data_service_favorite__["a" /* DataServiceFavo */],
                __WEBPACK_IMPORTED_MODULE_20__json_data__["a" /* JsonData */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__providers_calendar_calendar__["a" /* CalendarProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsonData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JsonData = (function () {
    function JsonData(http) {
        this.http = http;
    }
    JsonData.prototype.getData = function (path) {
        return this.http.get(path)
            .map(function (res) { return res.json(); });
    };
    ;
    JsonData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], JsonData);
    return JsonData;
}());

//# sourceMappingURL=json-data.js.map

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataServiceNum; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataServiceNum = (function () {
    function DataServiceNum() {
        this.submFlag = 0;
        this.SampleNum = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.Num$ = this.SampleNum.asObservable();
    }
    DataServiceNum.prototype.getSubmFlag = function () {
        return this.submFlag;
    };
    DataServiceNum.prototype.sendSampleNum = function (num) {
        // numリスト
        // 0 : page2に遷移するか : submFlagが0なら遷移
        // 1 : page1にいる(いた)
        // 2 : page2にいる(いた)
        // 3 : page3にいる(いた)
        // 4 : page4にいる(いた)
        // 5 : homepにいる(いた)
        // 6 : さっきまでどのページにいたかを返す
        if (num <= 0) {
            console.log("num : " + num);
            if (num == 0) {
                this.SampleNum.next(this.submFlag);
            }
            else if (num < 0 && this.submFlag == 0) {
                this.SampleNum.next(num);
            }
            if (this.submFlag == 0) {
                this.submFlag = 1;
            }
        }
        else if (1 <= num && num <= 5) {
            console.log("num : " + num);
            this.tracks = num;
        }
        else if (num == 6) {
            console.log("num : " + num);
            return this.tracks;
        }
    };
    DataServiceNum = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DataServiceNum);
    return DataServiceNum;
}());

//# sourceMappingURL=data.service.num.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataServiceFavo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__json_data__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataServiceFavo = (function () {
    function DataServiceFavo(dataService) {
        this.dataService = dataService;
        this.mkFavo = [];
        this.flag = 0;
    }
    DataServiceFavo.prototype.loaMKdData = function () {
        var _this = this;
        this.dataService.getData('assets/data/logout.json').subscribe(function (data) {
            _this.data = data.data;
            for (var i = 0; _this.data[i] != null; i++) {
                _this.mkFavo.push(_this.data[i]);
            }
            console.log("this.mkFavo");
            console.log(_this.mkFavo);
        });
        console.log("this.mkFavo");
        console.log(this.mkFavo);
    };
    DataServiceFavo.prototype.sendSampleEvent = function (str, num) {
        if (num == 999 && this.flag != 1) {
            this.flag = 1;
            this.loaMKdData();
        }
        else if (num == 666) {
            return this.flag; // num = 666 : ログイン状態を返す
        }
        else {
            if (0 <= num) {
                var x = this.searchNum(str);
                console.log("ここ大事");
                if (x == 0) {
                    // mkFavo内に無い
                    this.mkFavo.push(str);
                    console.log("this.mkFavo");
                    console.log(this.mkFavo);
                    return 0;
                }
                else {
                    x--;
                    //mkFavoのx番目にある
                    for (var i = 0; this.mkFavo[i] != null; i++) {
                        if (i == x) {
                            for (var j = i; this.mkFavo[j] != null; j++) {
                                this.mkFavo[j] = this.mkFavo[j + 1];
                            }
                            this.mkFavo.pop();
                            console.log("this.mkFavo");
                            console.log(this.mkFavo);
                            break;
                        }
                    }
                    return 1;
                }
            }
            else if (num < 0) {
                var x = this.searchNum(str);
                if (x == 0) {
                    // mkFavo内に無い
                    return 0;
                }
                else {
                    //mkFavoのx番目にある
                    return 1;
                }
            }
        }
    };
    // mkFavoの中に探してる文字列がないなら「0」, あれば「番号+1」を返す
    DataServiceFavo.prototype.searchNum = function (str) {
        for (var i = 0; this.mkFavo[i] != null; i++) {
            if (this.mkFavo[i] == str) {
                return i + 1;
            }
        }
        return 0;
    };
    // url用にmkFavoの中身全てを結合して返す
    DataServiceFavo.prototype.getMKFavo = function () {
        var str = "";
        for (var i = 0;; i++) {
            if (this.mkFavo[0] == null)
                return '-1'; // nkFavoが空の時
            str += this.mkFavo[i];
            if (this.mkFavo[i + 1] == null)
                break; // 最後に来たら終了
            else
                str += ',';
        }
        return str;
    };
    DataServiceFavo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__json_data__["a" /* JsonData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__json_data__["a" /* JsonData */]) === "function" && _a || Object])
    ], DataServiceFavo);
    return DataServiceFavo;
    var _a;
}());

//# sourceMappingURL=data.service.favorite.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_json_data__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_data_service_favorite__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetailPage = (function () {
    function DetailPage(navCtrl, navParams, getJson, dataServiceFavo) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataServiceFavo = dataServiceFavo;
        this.traffic = "boat";
        this.showFlag = 0; // 1 ⇒ 解除と表示, 0 ⇒ 登録と表示
        this.name = navParams.get('title');
        this.address = navParams.get('address');
        this.comment = navParams.get('comment');
        this.open = navParams.get('open');
        this.num = navParams.get('num');
        this.flag = navParams.get('flag');
    }
    DetailPage.prototype.ionViewDidLoad = function () {
        this.showFlag = this.dataServiceFavo.sendSampleEvent(this.name, -1 * (this.num + 1));
    };
    DetailPage.prototype.setFavo = function () {
        if (this.flag == 1) {
            var x = this.dataServiceFavo.sendSampleEvent(this.name, this.num);
            if (x == 1) {
                alert("お気に入り解除しました");
            }
            else {
                alert("お気に入り登録しました");
            }
            this.showFlag = this.dataServiceFavo.sendSampleEvent(this.name, -1 * (this.num + 1));
        }
        else if (this.flag != 1) {
            alert("ログインしてください");
        }
    };
    DetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail',template:/*ion-inline-start:"C:\Users\micro\Wakapper3\Wakapper\src\pages\detail\detail.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>{{name}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content >\n\n  <ion-card>\n\n    <img src="http://3.bp.blogspot.com/-jHdA_6VWQFw/WYAxqtZz54I/AAAAAAABFuk/rDsnpKBPpsQ1gMDDrJYRjh5IVdUBkd30QCLcBGAs/s800/building_fastfood.png"/>\n\n    \n\n    <ion-card-title>\n\n        {{name}}\n\n    </ion-card-title>\n\n    \n\n    <ion-card-content>\n\n      <p>場所：{{address}}</p>\n\n      \n\n      <p>営業時間：{{open}}</p>\n\n    </ion-card-content>\n\n    \n\n    <ion-row>\n\n      <ion-col>\n\n        <button *ngIf="showFlag==0" ion-button icon-left clear small (click)="setFavo()">\n\n          <ion-icon name="star"></ion-icon>\n\n          <div>お気に入り登録</div>\n\n        </button>\n\n        <button *ngIf="showFlag!=0" ion-button icon-left clear small (click)="setFavo()">\n\n          <ion-icon name="star"></ion-icon>\n\n          <div>お気に入り解除</div>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n    \n\n  </ion-card>\n\n\n\n  <ion-card> \n\n    <ion-card-title>\n\n      コメント\n\n    </ion-card-title>\n\n    <ion-card-content>\n\n      {{comment}}\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <!--\n\n  <ion-card *ngFor="let item of comment"> \n\n    <ion-card-title>\n\n      {{item.title}}\n\n    </ion-card-title>\n\n    \n\n    <ion-card-content>\n\n      {{item.comment}}\n\n    </ion-card-content>\n\n  </ion-card>\n\n  -->\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\micro\Wakapper3\Wakapper\src\pages\detail\detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__app_json_data__["a" /* JsonData */],
            __WEBPACK_IMPORTED_MODULE_3__app_data_service_favorite__["a" /* DataServiceFavo */]])
    ], DetailPage);
    return DetailPage;
}());

//# sourceMappingURL=detail.js.map

/***/ })

},[214]);
//# sourceMappingURL=main.js.map