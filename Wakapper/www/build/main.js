webpackJsonp([0],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(31);
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

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsonData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(283);
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
    JsonData.prototype.getData = function (string) {
        return this.http.get(string)
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

/***/ 113:
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
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/page3/page3.module": [
		156
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
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page3Module", function() { return Page3Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page3__ = __webpack_require__(157);
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

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page3; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_calendar_calendar__ = __webpack_require__(158);
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
    function Page3(navCtrl, calendar, navParams) {
        this.navCtrl = navCtrl;
        this.calendar = calendar;
        this.navParams = navParams;
        this.cal = [];
        this.current_calendar = [];
        this.wait = false;
        var t = this.calendar.getToday(); // 今日の日付けを取得
        this.current_calendar = t;
        var l = this.calendar.lastMonth(t[0], t[1]); // 前月の年月を取得
        var n = this.calendar.nextMonth(t[0], t[1]); // 来月の年月を取得
        var now = this.calendar.getCalendarYM(t[0], t[1]); // 今月のカレンダー情報を作成
        var last = this.calendar.getCalendarYM(l[0], l[1]); // 前月のカレンダー情報を作成
        var next = this.calendar.getCalendarYM(n[0], n[1]); // 来月のカレンダー情報を作成
        this.cal = [last, now, next];
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("Slides"),
        __metadata("design:type", Object)
    ], Page3.prototype, "slides", void 0);
    Page3 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-page3',template:/*ion-inline-start:"C:\Users\micro\workspace\newWorkspace\Wakapper\src\pages\page3\page3.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>イベントカレンダー</ion-title>\n  </ion-navbar>\n  <ion-grid class="calendar-header" no-padding>\n    <ion-row>\n      <ion-col>\n        <span class="title">\n          {{current_calendar[0]}}年{{current_calendar[1]}}月\n        </span>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-header>\n<ion-content no-bounce>\n  <ion-slides #Slides (ionSlidePrevEnd)="beforeSlide()" (ionSlideNextEnd)="nextSlide()" initialSlide="1">\n    <ion-slide *ngFor="let c of cal; let idx = index;">\n      <table class="date-table">\n        <tbody class="date-body">\n          <tr class="weekday">\n            <td>日</td>\n            <td>月</td>\n            <td>火</td>\n            <td>水</td>\n            <td>木</td>\n            <td>金</td>\n            <td>土</td>\n          </tr>\n          <tr *ngFor="let week of c.week; let w = index;">\n            <td *ngFor="let day of week; let d = index;">\n              <div class="day">\n                <span [ngClass]="{\'other\':day.other}">{{day.day}}</span>\n              </div>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"C:\Users\micro\workspace\newWorkspace\Wakapper\src\pages\page3\page3.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_calendar_calendar__["a" /* CalendarProvider */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_calendar_calendar__["a" /* CalendarProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], Page3);
    return Page3;
}());

//# sourceMappingURL=page3.js.map

/***/ }),

/***/ 158:
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

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_page1_page1__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_page2_page2__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_page3_page3__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_page4_page4__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__data_service__ = __webpack_require__(101);
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
    function MyApp(platform, statusBar, splashScreen, dataService) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.dataService = dataService;
        this.position = { lat: 33.9144938, lng: 130.7528295 };
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.pagesNames = [
            'ホーム画面',
            '区内マップ',
            '掲示板',
            'イベントカレンダー',
            '運行表'
        ];
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
                    _this.showText = "Page1";
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_page1_page1__["a" /* Page1 */], _this.position);
                }
                else if (text == "Page02") {
                    _this.showText = "Page2";
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_page2_page2__["a" /* Page2 */], "Page2");
                }
                else if (text == "Page03") {
                    _this.showText = "Page3";
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_page3_page3__["a" /* Page3 */], "Page3");
                }
                else if (text == "Page04") {
                    _this.showText = "Page4";
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_page4_page4__["a" /* Page4 */], "Page4");
                }
                else {
                    _this.showText = text;
                    if (text == "Page1") {
                        _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_page1_page1__["a" /* Page1 */], _this.position);
                    }
                    else {
                        _this.nav.setRoot(_this.page.component, { text: text });
                    }
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'sample-component',template:/*ion-inline-start:"C:\Users\micro\workspace\newWorkspace\Wakapper\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <p *ngIf="showText == \'Page1\'">\n\n        <button menuClose ion-item *ngFor="let p of page1" (click)="openPage(p)">\n\n          {{p.title}}\n\n        </button>\n\n      </p>\n\n      <p *ngIf="showText == \'Page2\'">\n\n        <button menuClose ion-item *ngFor="let p of page2" (click)="openPage(p)">\n\n          {{p.title}}\n\n        </button>\n\n      </p>\n\n      <p *ngIf="showText == \'Page3\'">\n\n        <button menuClose ion-item *ngFor="let p of page3" (click)="openPage(p)">\n\n          {{p.title}}\n\n        </button>\n\n      </p>\n\n      <p *ngIf="showText == \'Page4\'">\n\n        <button menuClose ion-item *ngFor="let p of page4" (click)="openPage(p)">\n\n          {{p.title}}\n\n        </button>\n\n      </p>\n\n    </ion-list>\n\n\n\n    <button (click)="loadShowText()">表示されない時</button>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\micro\workspace\newWorkspace\Wakapper\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_9__data_service__["a" /* DataService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_data_service__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_component__ = __webpack_require__(202);
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
    function HomePage(navCtrl, dataService) {
        this.navCtrl = navCtrl;
        this.dataService = dataService;
    }
    //画面表示後、掲示板の登録用のcgiから
    //パラメータが送られてきた場合(q = regi)
    //page2へ遷移する
    HomePage.prototype.ionViewDidEnter = function () {
        var Url = document.location.search.substring(1);
        var urlParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */](Url, new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* QueryEncoder */]());
        var Q = urlParams.getAll("q");
        // 全パラメータの中の先頭で判断
        // "regi"(登録・ログイン),"subm"(投稿)したとき、page2に移動
        if (Q[0] == "regi" || Q[0] == "subm") {
            this.goToPage2();
        }
    };
    /* URL先へ遷移する
    onLink(url: string) {
        window.open(url);
    }
    */
    HomePage.prototype.goToPage1 = function () {
        __WEBPACK_IMPORTED_MODULE_4__app_app_component__["a" /* MyApp */].text = "Page1";
        this.dataService.sendSampleText("Page01");
    };
    HomePage.prototype.goToPage2 = function () {
        __WEBPACK_IMPORTED_MODULE_4__app_app_component__["a" /* MyApp */].text = "Page2";
        this.dataService.sendSampleText("Page02");
    };
    HomePage.prototype.goToPage3 = function () {
        __WEBPACK_IMPORTED_MODULE_4__app_app_component__["a" /* MyApp */].text = "Page3";
        this.dataService.sendSampleText("Page03");
    };
    HomePage.prototype.goToPage4 = function () {
        __WEBPACK_IMPORTED_MODULE_4__app_app_component__["a" /* MyApp */].text = "Page4";
        this.dataService.sendSampleText("Page04");
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\micro\workspace\newWorkspace\Wakapper\src\pages\home\home.html"*/'<!--\n\n  各ページの担当(敬称略)\n\n\n\n  Page1:福井・太田\n\n  Page2:太田\n\n  Page3:片岡\n\n  Page4:上田\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>Wakapper</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <button ion-button (click)="goToPage1()">区内マップ</button>\n\n  <button ion-button (click)="goToPage2()">掲示板</button>\n\n  <button ion-button (click)="goToPage3()">イベントカレンダー</button>\n\n  <button ion-button (click)="goToPage4()">運行表</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\micro\workspace\newWorkspace\Wakapper\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__app_data_service__["a" /* DataService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_json_data__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__ = __webpack_require__(205);
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
    function Page1(navCtrl, navParams, googleMaps, dataService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.googleMaps = googleMaps;
        this.dataService = dataService;
        this.text = navParams.get("text");
        this.showText = this.text;
        // 読み込み時に受け取った緯度と経度の位置に Marker を設置
        this.lat = navParams.get("lat");
        this.lng = navParams.get("lng");
    }
    Page1.prototype.ionViewDidLoad = function () {
        this.mapInit();
    };
    Page1.prototype.mapInit = function () {
        var _this = this;
        // json取得
        this.dataService.getData('../assets/data/mkData.json').subscribe(function (data) {
            _this.mkData = data.mkData;
            _this.loadMap();
        });
    };
    // 画面が読み込まれた時のみ実行
    Page1.prototype.loadMap = function () {
        var _this = this;
        // GoogleMapの構築
        this.map = new google.maps.Map(this.mapChild.nativeElement, {
            zoom: 12,
            center: { lat: this.lat, lng: this.lng }
        });
        // Markerの設置
        this.mkStatus = '非表示にする';
        this.marker = [];
        this.clickStatus = [];
        var _loop_1 = function (i) {
            this_1.marker[i] = new google.maps.Marker({
                position: { lat: this_1.mkData[i].lat, lng: this_1.mkData[i].lng },
                map: this_1.map,
                title: 'Bus Stop(Test)',
                icon: {
                    url: '../../assets/img/bus.png',
                    size: {
                        width: this_1.mkData[i].width,
                        height: this_1.mkData[i].height
                    }
                }
            });
            this_1.clickStatus[i] = 1;
            google.maps.event.addListener(this_1.marker[i], 'click', function () {
                if (_this.clickStatus[i]) {
                    alert("お気に入り登録しました。");
                    _this.clickStatus[i] = 0;
                }
                else {
                    alert("お気に入り解除しました。");
                    _this.clickStatus[i] = 1;
                }
            });
        };
        var this_1 = this;
        for (var i = 0; i < 3; i++) {
            _loop_1(i);
        }
    };
    Page1.prototype.mkVisible = function () {
        if (this.mkStatus == '非表示にする') {
            this.mkStatus = '表示する';
            this.mkSetVisible(false);
        }
        else if (this.mkStatus == '表示する') {
            this.mkStatus = '非表示にする';
            this.mkSetVisible(true);
        }
    };
    Page1.prototype.mkSetVisible = function (bool) {
        for (var i = 0; i < 3; i++) {
            if (this.clickStatus[i]) {
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
            selector: 'page-page1',template:/*ion-inline-start:"C:\Users\micro\workspace\newWorkspace\Wakapper\src\pages\page1\page1.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>区内マップ</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <button ion-button style="width: 50%;" (click)="mkVisible()">{{mkStatus}}</button>\n\n  <div #map id="map"></div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\micro\workspace\newWorkspace\Wakapper\src\pages\page1\page1.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__["a" /* GoogleMaps */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__["a" /* GoogleMaps */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__app_json_data__["a" /* JsonData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_json_data__["a" /* JsonData */]) === "function" && _d || Object])
    ], Page1);
    return Page1;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=page1.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_json_data__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__registration_registration__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__submit_submit__ = __webpack_require__(208);
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
    function Page2(navCtrl, navParams, dataService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataService = dataService;
        this.contribution = [];
        this.text = navParams.get("text");
        this.showText = this.text;
        this.datasNum = 0;
    }
    Page2_1 = Page2;
    Page2.prototype.ionViewDidLoad = function () {
        var Url = document.location.search.substring(1);
        var urlParams = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* URLSearchParams */](Url, new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* QueryEncoder */]());
        var Q = urlParams.getAll("q");
        if (Q[0] == "regi") {
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
        // コメントが書いてあるリストの読み込み
        this.dataService.getData('../assets/data/datas.json').subscribe(function (dataName) {
            _this.dataNames = dataName.dataNames;
            // 各々のjsonを読み込みcontributionに格納 -> htmlで表示
            for (var i = 0; _this.dataNames[i] != null; i++) {
                _this.dataService.getData('../assets/data/' + _this.dataNames[i]).subscribe(function (data) {
                    _this.contribution.push(data.contribution);
                });
                // 投稿数
                _this.datasNum++;
            }
        });
    };
    // ログアアウト
    Page2.prototype.logOut = function () {
        this.login = null;
        this.navCtrl.setRoot(Page2_1, "Page2");
    };
    // 投稿ページへ
    Page2.prototype.goToSubm = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__submit_submit__["a" /* SubmForm */], { num: String(this.datasNum + 1) });
    };
    // 登録・ログインへ
    Page2.prototype.goToRegi = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__registration_registration__["a" /* RegiForm */]);
    };
    Page2 = Page2_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-page2',template:/*ion-inline-start:"C:\Users\micro\workspace\newWorkspace\Wakapper\src\pages\page2\page2.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>掲示板</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div id="topContent">\n\n    <button ion-button id="Registration" *ngIf="!login" (click)="goToRegi()">アカウントの登録</button>\n\n    \n\n    <button ion-button id="Submit" *ngIf="login!=null" (click)="goToSubm()">コメントの投稿</button>\n\n    <button ion-button id="Registration" *ngIf="login!=null" (click)="logOut()" color="danger">ログアウト</button>\n\n  </div>\n\n\n\n  <div style="text-align: center;">\n\n      総投稿数：{{datasNum}}\n\n  </div><br>\n\n  <div *ngFor="let cont of contribution">\n\n    <ion-card>\n\n      <ion-card-header>\n\n        {{cont[0].title}}\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        {{cont[0].comments}}\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\micro\workspace\newWorkspace\Wakapper\src\pages\page2\page2.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__app_json_data__["a" /* JsonData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_json_data__["a" /* JsonData */]) === "function" && _c || Object])
    ], Page2);
    return Page2;
    var Page2_1, _a, _b, _c;
}());

//# sourceMappingURL=page2.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegiForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
    function RegiForm(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
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
            selector: 'page-registration',template:/*ion-inline-start:"C:\Users\micro\workspace\newWorkspace\Wakapper\src\pages\page2\registration\registration.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>掲示板:アカウントの登録</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <!--以下に設置------>\n\n  <form #form class="test_form" target="_blank">\n\n    氏名 :\n\n    <input type="text" name="name" />\n\n\n\n    <input type="submit" (click)="postURL(\'../src/cgi/recv.cgi\')" item-right />\n\n  </form>\n\n  <!------------------>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\micro\workspace\newWorkspace\Wakapper\src\pages\page2\registration\registration.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], RegiForm);
    return RegiForm;
}());

//# sourceMappingURL=registration.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubmForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
            selector: 'page-submit',template:/*ion-inline-start:"C:\Users\micro\workspace\newWorkspace\Wakapper\src\pages\page2\submit\submit.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>掲示板:コメントの投稿</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <!--以下に設置---- target="_blank" : 新しいタブで開く-->\n\n  <form #comments class="test_form">\n\n    投稿タイトル :\n\n    <input type="text" id="title" name="title" />\n\n    投稿コメント :\n\n    <input type="text" id="comments" name="comments" />\n\n    \n\n    <input type="text" [(ngModel)]="this.num" id="num" name="num" value="{{this.num}}" readonly />個目の投稿\n\n\n\n    <input type="submit" (click)="postURL(\'../src/cgi/subm.cgi\')" item-right />\n\n  </form>\n\n  <!------------------>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\micro\workspace\newWorkspace\Wakapper\src\pages\page2\submit\submit.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SubmForm);
    return SubmForm;
}());

//# sourceMappingURL=submit.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page4; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
    function Page4(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        //Flag : 時刻表を表示しているかのflag
        this.flag = 1;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('title');
        if (this.selectedItem == undefined) {
            this.selectedItem = '運行表';
        }
        this.traffic = ['渡船', '電車', 'バス'];
        this.train = ['若松駅', '奥洞海駅', '藤ノ木駅', '二島駅'];
        this.bus = ['バス停1', 'バス停2', 'バス停3', 'バス停4'];
        /*
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
        'american-football', 'boat', 'bluetooth', 'build'];
        */
        this.title = this.traffic;
        if (this.selectedItem == this.traffic[0]) {
            //時刻表ファイルを読み込む
            //テスト用のやつ
            this.title = ["\u4E0A\u308A", " 8:30", " 9:45", " 10:30", " 11:30", "\u4E0B\u308A", " 8:30", " 9:45", " 10:30", " 11:30"];
            this.flag = 0;
        }
        if (this.selectedItem == this.traffic[1]) {
            this.title = this.train;
        }
        if (this.selectedItem == this.traffic[2]) {
            this.title = this.bus;
        }
        for (var i = 0; i < this.train.length; i++) {
            if (this.selectedItem == this.train[i]) {
                //時刻表ファイルを読み込む
                //テスト用のやつ
                this.title = ["\u4E0A\u308A", " 8:30", " 9:45", " 10:30", " 11:30", "\u4E0B\u308A", " 8:30", " 9:45", " 10:30", " 11:30"];
                this.flag = 0;
            }
        }
        for (var i = 0; i < this.bus.length; i++) {
            if (this.selectedItem == this.bus[i]) {
                //時刻表ファイルを読み込む
                //テスト用のやつ
                this.title = ["\u4E0A\u308A", " 8:30", " 9:45", " 10:30", " 11:30", "\u4E0B\u308A", " 8:30", " 9:45", " 10:30", " 11:30"];
                this.flag = 0;
            }
        }
        this.items = [];
        for (var i = 0; i < this.title.length; i++) {
            this.items.push({
                title: this.title[i],
                note: ''
            });
        }
    }
    Page4_1 = Page4;
    Page4.prototype.itemTapped = function (event, item, flag) {
        if (flag) {
            // That's right, we're pushing to ourselves!
            this.navCtrl.push(Page4_1, { title: item });
        }
    };
    Page4 = Page4_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-page4',template:/*ion-inline-start:"C:\Users\micro\workspace\newWorkspace\Wakapper\src\pages\page4\page4.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>{{selectedItem}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item.title, flag)">\n\n      {{item.title}}\n\n      <div class="item-note" item-right>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\micro\workspace\newWorkspace\Wakapper\src\pages\page4\page4.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], Page4);
    return Page4;
    var Page4_1;
}());

//# sourceMappingURL=page4.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(234);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_page1_page1__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_page2_page2__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_page2_registration_registration__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_page2_submit_submit__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_page3_page3_module__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_page4_page4__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_calendar_calendar__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__data_service__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__json_data__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_google_maps__ = __webpack_require__(205);
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
                __WEBPACK_IMPORTED_MODULE_10__pages_page2_registration_registration__["a" /* RegiForm */],
                __WEBPACK_IMPORTED_MODULE_11__pages_page2_submit_submit__["a" /* SubmForm */],
                __WEBPACK_IMPORTED_MODULE_13__pages_page4_page4__["a" /* Page4 */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/page3/page3.module#Page3Module', name: 'Page3', segment: 'page3', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_12__pages_page3_page3_module__["Page3Module"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_page1_page1__["a" /* Page1 */],
                __WEBPACK_IMPORTED_MODULE_9__pages_page2_page2__["a" /* Page2 */],
                __WEBPACK_IMPORTED_MODULE_10__pages_page2_registration_registration__["a" /* RegiForm */],
                __WEBPACK_IMPORTED_MODULE_11__pages_page2_submit_submit__["a" /* SubmForm */],
                __WEBPACK_IMPORTED_MODULE_13__pages_page4_page4__["a" /* Page4 */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_google_maps__["a" /* GoogleMaps */],
                __WEBPACK_IMPORTED_MODULE_15__data_service__["a" /* DataService */],
                __WEBPACK_IMPORTED_MODULE_16__json_data__["a" /* JsonData */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__providers_calendar_calendar__["a" /* CalendarProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ })

},[210]);
//# sourceMappingURL=main.js.map