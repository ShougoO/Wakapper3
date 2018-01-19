webpackJsonp([0],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(32);
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

/***/ 119:
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
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 161:
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
webpackEmptyAsyncContext.id = 161;

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_page1_page1__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_page2_page2__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_page3_page3__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_page4_page4__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__data_service__ = __webpack_require__(102);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'sample-component',template:/*ion-inline-start:"C:\Users\micro\workspace\newWorkspace\Wakapper\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <p *ngIf="showText == \'Page1\'">\n\n        <button menuClose ion-item *ngFor="let p of page1" (click)="openPage(p)">\n\n          {{p.title}}\n\n        </button>\n\n      </p>\n\n      <p *ngIf="showText == \'Page2\'">\n\n        <button menuClose ion-item *ngFor="let p of page2" (click)="openPage(p)">\n\n          {{p.title}}\n\n        </button>\n\n      </p>\n\n      <p *ngIf="showText == \'Page3\'">\n\n        <button menuClose ion-item *ngFor="let p of page3" (click)="openPage(p)">\n\n          {{p.title}}\n\n        </button>\n\n      </p>\n\n      <p *ngIf="showText == \'Page4\'">\n\n        <button menuClose ion-item *ngFor="let p of page4" (click)="openPage(p)">\n\n          {{p.title}}\n\n        </button>\n\n      </p>\n\n    </ion-list>\n\n\n\n    <button (click)="loadShowText()">表示されない時</button>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\micro\workspace\newWorkspace\Wakapper\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_9__data_service__["a" /* DataService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_data_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_component__ = __webpack_require__(205);
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
        var Q = urlParams.get("q");
        if (Q == "regi" || Q == "subm") {
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__app_data_service__["a" /* DataService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(208);
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
    function Page1(navCtrl, navParams, googleMaps) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.googleMaps = googleMaps;
        this.text = navParams.get("text");
        this.showText = this.text;
        // 読み込み時に受け取った緯度と経度の位置に Marker を設置
        this.lat = navParams.get("lat");
        this.lng = navParams.get("lng");
    }
    Page1.prototype.ionViewDidLoad = function () {
        this.loadMap();
    };
    // 画面が読み込まれた時のみ実行
    Page1.prototype.loadMap = function () {
        // GoogleMapの構築
        this.map = new google.maps.Map(this.mapChild.nativeElement, {
            zoom: 12,
            center: { lat: this.lat, lng: this.lng }
        });
        // Markerの設置
        var marker = new google.maps.Marker({
            position: { lat: 33.9095253, lng: 130.7500793 },
            map: this.map,
            title: 'Bus Stop(Test)',
            icon: {
                url: '../../assets/img/bus.png',
                size: {
                    width: 33,
                    height: 33
                }
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("map"),
        __metadata("design:type", Object)
    ], Page1.prototype, "mapChild", void 0);
    Page1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-page1',template:/*ion-inline-start:"C:\Users\micro\workspace\newWorkspace\Wakapper\src\pages\page1\page1.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>区内マップ</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div #map id="map"></div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\micro\workspace\newWorkspace\Wakapper\src\pages\page1\page1.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["a" /* GoogleMaps */]])
    ], Page1);
    return Page1;
}());

//# sourceMappingURL=page1.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_json_data__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__registration_registration__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__submit_submit__ = __webpack_require__(212);
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
        this.text = navParams.get("text");
        this.showText = this.text;
    }
    Page2.prototype.ionViewDidLoad = function () {
        var Url = document.location.search.substring(1);
        var urlParams = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* URLSearchParams */](Url, new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* QueryEncoder */]());
        this.Q = urlParams.get("q");
        if (this.Q == "subm") {
            this.getQuestion();
        }
    };
    Page2.prototype.getQuestion = function () {
        var _this = this;
        this.dataService.getData().subscribe(function (questions) {
            _this.questions = questions.contribution;
        });
    };
    Page2.prototype.goToSubm = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__submit_submit__["a" /* SubmForm */]);
    };
    Page2.prototype.goToRegi = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__registration_registration__["a" /* RegiForm */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('content'),
        __metadata("design:type", Object)
    ], Page2.prototype, "content", void 0);
    Page2 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-page2',template:/*ion-inline-start:"C:\Users\micro\workspace\newWorkspace\Wakapper\src\pages\page2\page2.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>掲示板</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div id="topContent">\n\n    <button ion-button id="Submit" (click)="goToSubm()">コメントの投稿</button>\n\n    <button ion-button id="Registration" (click)="goToRegi()">アカウントの登録</button>\n\n  </div>\n\n  <div #content id="bodyContent" *ngIf="Q == \'subm\'">\n\n    <div *ngFor="let question of questions;">\n\n      <ion-card>\n\n        <ion-card-header>\n\n          {{question.title}}\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          {{question.comments}}\n\n        </ion-card-content>\n\n      </ion-card>\n    </div>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\micro\workspace\newWorkspace\Wakapper\src\pages\page2\page2.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__app_json_data__["a" /* JsonData */]])
    ], Page2);
    return Page2;
}());

//# sourceMappingURL=page2.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsonData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(402);
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
    JsonData.prototype.getData = function () {
        return this.http.get('../src/assets/data/data.json')
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

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegiForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], RegiForm);
    return RegiForm;
}());

//# sourceMappingURL=registration.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubmForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
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
            selector: 'page-submit',template:/*ion-inline-start:"C:\Users\micro\workspace\newWorkspace\Wakapper\src\pages\page2\submit\submit.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>掲示板:コメントの投稿</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <!--以下に設置---- target="_blank" : 新しいタブで開く-->\n\n  <form #comments class="test_form">\n\n    投稿タイトル :\n\n    <input type="text" id="title" name="title" />\n\n    投稿コメント :\n\n    <input type="text" id="comments" name="comments" />\n\n\n\n    <input type="submit" (click)="postURL(\'../src/cgi/subm.cgi\')" item-right />\n\n  </form>\n\n  <!------------------>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\micro\workspace\newWorkspace\Wakapper\src\pages\page2\submit\submit.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], SubmForm);
    return SubmForm;
}());

//# sourceMappingURL=submit.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page3; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
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
    function Page3(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.text = navParams.get("text");
        this.showText = this.text;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('month'),
        __metadata("design:type", Object)
    ], Page3.prototype, "monthElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('content'),
        __metadata("design:type", Object)
    ], Page3.prototype, "calendarElement", void 0);
    Page3 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-page3',template:/*ion-inline-start:"C:\Users\micro\workspace\newWorkspace\Wakapper\src\pages\page3\page3.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>イベントカレンダー</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="has-header">\n\n    <calendar></calendar>\n\n</ion-content>\n\n\n\n<!--\n\n<ion-content>\n\n  <!--以下に設置------\n\n  <div id="title">カレンダー</div>\n\n  <div #month id="month"></div>\n\n  <div #content id="content" style="font-family:\'MS Gothic\'"></div>\n\n  <!------------------\n\n</ion-content>\n\n\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>{{viewTitle}}</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button [disabled]="isToday" (click)="today()">Today</button>\n\n      <button ion-button (click)="changeMode(\'month\')">M</button>\n\n      <button ion-button (click)="changeMode(\'week\')">W</button>\n\n      <button ion-button (click)="changeMode(\'day\')">D</button>\n\n      <button ion-button (click)="loadEvents()">Load Events</button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n-->'/*ion-inline-end:"C:\Users\micro\workspace\newWorkspace\Wakapper\src\pages\page3\page3.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], Page3);
    return Page3;
}());

/*
import { CalendarComponent } from 'ionic2-calendar/calendar';

@ViewChild(CalendarComponent) myCalendar: CalendarComponent;

eventSource;
viewTitle;
isToday: boolean;
calendar = {
  mode: 'month',
  currentDate: new Date()
};

loadEvents() {
  this.eventSource = this.createRandomEvents();
}
onViewTitleChanged(title) {
  this.viewTitle = title;
}
onEventSelected(event) {
  console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
}
changeMode(mode) {
  this.calendar.mode = mode;
}
today() {
  this.calendar.currentDate = new Date();
}
onTimeSelected(ev) {
  console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
    (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
}
onCurrentDateChanged(event: Date) {
  var today = new Date();
  today.setHours(0, 0, 0, 0);
  event.setHours(0, 0, 0, 0);
  this.isToday = today.getTime() === event.getTime();
}
createRandomEvents() {
  var events = [];
  for (var i = 0; i < 50; i += 1) {
    var date = new Date();
    var eventType = Math.floor(Math.random() * 2);
    var startDay = Math.floor(Math.random() * 90) - 45;
    var endDay = Math.floor(Math.random() * 2) + startDay;
    var startTime;
    var endTime;
    if (eventType === 0) {
      startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + startDay));
      if (endDay === startDay) {
        endDay += 1;
      }
      endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + endDay));
      events.push({
        title: 'All Day - ' + i,
        startTime: startTime,
        endTime: endTime,
        allDay: true
      });
    } else {
      var startMinute = Math.floor(Math.random() * 24 * 60);
      var endMinute = Math.floor(Math.random() * 180) + startMinute;
      startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + startDay, 0, date.getMinutes() + startMinute);
      endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + endDay, 0, date.getMinutes() + endMinute);
      events.push({
        title: 'Event - ' + i,
        startTime: startTime,
        endTime: endTime,
        allDay: false
      });
    }
  }
  return events;
}
onRangeChanged(ev) {
  console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
}
markDisabled = (date: Date) => {
  var current = new Date();
  current.setHours(0, 0, 0);
  return date < current;
};
*/
/*
ionViewDidLoad() {
  // 現在日を取得し、当月1日の曜日と末日を求めます。
  var now: Date = new Date();
  var prePad: number = new Date(now.getFullYear(), now.getMonth(), 1).getDay();
  var lastDay: number = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();

  // カレンダーの月を表示
  var mo = this.monthElement.nativeElement;

  // now.getMonth() : 1月～12月 ⇒ 0　～ 11 の数値で表される
  mo.innerHTML += now.getMonth() + 1 + "月";

  // TABLE用のstyle
  var sty = "style=\"width: 80%; margin: 5%;\"";

  // カレンダーを出力します。
  var el = this.calendarElement.nativeElement;
  var TABLE = "<TABLE border=\"1\"" + sty + ">";
  var TR = "<TR>";
  var TD1 = "<TD>";
  var TD2 = "</TR>";
  var TABLEEND = "</TABLE>";
  var msg = "";
  //var el = document.getElementById('content');
  //el.innerHTML += "<TABLE border=\"0\" cellspacing=\"0\" cellpadding=\"0\" align=\"left\">";
  //el.innerHTML += "<TR><TD bgcolor=\"#0000ff\" width= \"1\" colspan= \"7\" > </TD></TR>";
  msg += TABLE;

  msg += TR + TD1 + "&nbsp;" + "日</TD>" + TD1 + "&nbsp;" + "月</TD>" + TD1 + "&nbsp;" + "火</TD>"
    + TD1 + "&nbsp;" + "水</TD>" + TD1 + "&nbsp;" + "木</TD>"
    + TD1 + "&nbsp;" + "金</TD>" + TD1 + "&nbsp;" + "土</TD>" + TD2;
  for (var curDay: number = -prePad + 1; curDay <= lastDay; curDay++) {
    if ((prePad + curDay) % 7 == 1) {
      msg += TR;
    }
    // 半角スペース1つ出力します。curDayが負の時はさらに2つ出力します。
    msg += TD1 + "&nbsp;" + (curDay < 1 ? "&nbsp;&nbsp;" :
      // curDayが正の時です。1桁なら半角スペースを1つ出力します。そして日付を出力します。
      (curDay < 10 ? "&nbsp;" : "") + curDay.toString() + "</TD>" +
      // 土曜日を出力したら、改行タグを入れます。
      //(((prePad + curDay) % 7 == 0) ? "<br/>" : ""));
      (((prePad + curDay) % 7 == 0) ? TD2 : ""));
  }
  msg += TD2 + TABLEEND;
  el.innerHTML += msg;
}
*/ 
//# sourceMappingURL=page3.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page4; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], Page4);
    return Page4;
    var Page4_1;
}());

//# sourceMappingURL=page4.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(353);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_page1_page1__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_page2_page2__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_page2_registration_registration__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_page2_submit_submit__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_page3_page3__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_page4_page4__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__data_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__json_data__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_google_maps__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ionic2_calendar2__ = __webpack_require__(403);
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
                __WEBPACK_IMPORTED_MODULE_12__pages_page3_page3__["a" /* Page3 */],
                __WEBPACK_IMPORTED_MODULE_13__pages_page4_page4__["a" /* Page4 */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_17_ionic2_calendar2__["a" /* CalendarModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_page1_page1__["a" /* Page1 */],
                __WEBPACK_IMPORTED_MODULE_9__pages_page2_page2__["a" /* Page2 */],
                __WEBPACK_IMPORTED_MODULE_10__pages_page2_registration_registration__["a" /* RegiForm */],
                __WEBPACK_IMPORTED_MODULE_11__pages_page2_submit_submit__["a" /* SubmForm */],
                __WEBPACK_IMPORTED_MODULE_12__pages_page3_page3__["a" /* Page3 */],
                __WEBPACK_IMPORTED_MODULE_13__pages_page4_page4__["a" /* Page4 */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_google_maps__["a" /* GoogleMaps */],
                __WEBPACK_IMPORTED_MODULE_14__data_service__["a" /* DataService */],
                __WEBPACK_IMPORTED_MODULE_15__json_data__["a" /* JsonData */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 409:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 216,
	"./af.js": 216,
	"./ar": 217,
	"./ar-dz": 218,
	"./ar-dz.js": 218,
	"./ar-kw": 219,
	"./ar-kw.js": 219,
	"./ar-ly": 220,
	"./ar-ly.js": 220,
	"./ar-ma": 221,
	"./ar-ma.js": 221,
	"./ar-sa": 222,
	"./ar-sa.js": 222,
	"./ar-tn": 223,
	"./ar-tn.js": 223,
	"./ar.js": 217,
	"./az": 224,
	"./az.js": 224,
	"./be": 225,
	"./be.js": 225,
	"./bg": 226,
	"./bg.js": 226,
	"./bm": 227,
	"./bm.js": 227,
	"./bn": 228,
	"./bn.js": 228,
	"./bo": 229,
	"./bo.js": 229,
	"./br": 230,
	"./br.js": 230,
	"./bs": 231,
	"./bs.js": 231,
	"./ca": 232,
	"./ca.js": 232,
	"./cs": 233,
	"./cs.js": 233,
	"./cv": 234,
	"./cv.js": 234,
	"./cy": 235,
	"./cy.js": 235,
	"./da": 236,
	"./da.js": 236,
	"./de": 237,
	"./de-at": 238,
	"./de-at.js": 238,
	"./de-ch": 239,
	"./de-ch.js": 239,
	"./de.js": 237,
	"./dv": 240,
	"./dv.js": 240,
	"./el": 241,
	"./el.js": 241,
	"./en-au": 242,
	"./en-au.js": 242,
	"./en-ca": 243,
	"./en-ca.js": 243,
	"./en-gb": 103,
	"./en-gb.js": 103,
	"./en-ie": 244,
	"./en-ie.js": 244,
	"./en-nz": 245,
	"./en-nz.js": 245,
	"./eo": 246,
	"./eo.js": 246,
	"./es": 247,
	"./es-do": 248,
	"./es-do.js": 248,
	"./es-us": 249,
	"./es-us.js": 249,
	"./es.js": 247,
	"./et": 250,
	"./et.js": 250,
	"./eu": 251,
	"./eu.js": 251,
	"./fa": 252,
	"./fa.js": 252,
	"./fi": 253,
	"./fi.js": 253,
	"./fo": 254,
	"./fo.js": 254,
	"./fr": 255,
	"./fr-ca": 256,
	"./fr-ca.js": 256,
	"./fr-ch": 257,
	"./fr-ch.js": 257,
	"./fr.js": 255,
	"./fy": 258,
	"./fy.js": 258,
	"./gd": 259,
	"./gd.js": 259,
	"./gl": 260,
	"./gl.js": 260,
	"./gom-latn": 261,
	"./gom-latn.js": 261,
	"./gu": 262,
	"./gu.js": 262,
	"./he": 263,
	"./he.js": 263,
	"./hi": 264,
	"./hi.js": 264,
	"./hr": 265,
	"./hr.js": 265,
	"./hu": 266,
	"./hu.js": 266,
	"./hy-am": 267,
	"./hy-am.js": 267,
	"./id": 104,
	"./id.js": 104,
	"./is": 268,
	"./is.js": 268,
	"./it": 269,
	"./it.js": 269,
	"./ja": 270,
	"./ja.js": 270,
	"./jv": 271,
	"./jv.js": 271,
	"./ka": 272,
	"./ka.js": 272,
	"./kk": 273,
	"./kk.js": 273,
	"./km": 105,
	"./km.js": 105,
	"./kn": 274,
	"./kn.js": 274,
	"./ko": 275,
	"./ko.js": 275,
	"./ky": 276,
	"./ky.js": 276,
	"./lb": 277,
	"./lb.js": 277,
	"./lo": 106,
	"./lo.js": 106,
	"./lt": 278,
	"./lt.js": 278,
	"./lv": 279,
	"./lv.js": 279,
	"./me": 280,
	"./me.js": 280,
	"./mi": 281,
	"./mi.js": 281,
	"./mk": 282,
	"./mk.js": 282,
	"./ml": 283,
	"./ml.js": 283,
	"./mr": 284,
	"./mr.js": 284,
	"./ms": 285,
	"./ms-my": 286,
	"./ms-my.js": 286,
	"./ms.js": 285,
	"./mt": 287,
	"./mt.js": 287,
	"./my": 288,
	"./my.js": 288,
	"./nb": 289,
	"./nb.js": 289,
	"./ne": 290,
	"./ne.js": 290,
	"./nl": 291,
	"./nl-be": 292,
	"./nl-be.js": 292,
	"./nl.js": 291,
	"./nn": 293,
	"./nn.js": 293,
	"./pa-in": 294,
	"./pa-in.js": 294,
	"./pl": 295,
	"./pl.js": 295,
	"./pt": 296,
	"./pt-br": 297,
	"./pt-br.js": 297,
	"./pt.js": 296,
	"./ro": 298,
	"./ro.js": 298,
	"./ru": 299,
	"./ru.js": 299,
	"./sd": 300,
	"./sd.js": 300,
	"./se": 301,
	"./se.js": 301,
	"./si": 302,
	"./si.js": 302,
	"./sk": 303,
	"./sk.js": 303,
	"./sl": 304,
	"./sl.js": 304,
	"./sq": 305,
	"./sq.js": 305,
	"./sr": 306,
	"./sr-cyrl": 307,
	"./sr-cyrl.js": 307,
	"./sr.js": 306,
	"./ss": 308,
	"./ss.js": 308,
	"./sv": 309,
	"./sv.js": 309,
	"./sw": 310,
	"./sw.js": 310,
	"./ta": 311,
	"./ta.js": 311,
	"./te": 312,
	"./te.js": 312,
	"./tet": 313,
	"./tet.js": 313,
	"./th": 107,
	"./th.js": 107,
	"./tl-ph": 314,
	"./tl-ph.js": 314,
	"./tlh": 315,
	"./tlh.js": 315,
	"./tr": 316,
	"./tr.js": 316,
	"./tzl": 317,
	"./tzl.js": 317,
	"./tzm": 318,
	"./tzm-latn": 319,
	"./tzm-latn.js": 319,
	"./tzm.js": 318,
	"./uk": 320,
	"./uk.js": 320,
	"./ur": 321,
	"./ur.js": 321,
	"./uz": 322,
	"./uz-latn": 323,
	"./uz-latn.js": 323,
	"./uz.js": 322,
	"./vi": 108,
	"./vi.js": 108,
	"./x-pseudo": 324,
	"./x-pseudo.js": 324,
	"./yo": 325,
	"./yo.js": 325,
	"./zh-cn": 326,
	"./zh-cn.js": 326,
	"./zh-hk": 327,
	"./zh-hk.js": 327,
	"./zh-tw": 328,
	"./zh-tw.js": 328
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 409;

/***/ })

},[329]);
//# sourceMappingURL=main.js.map