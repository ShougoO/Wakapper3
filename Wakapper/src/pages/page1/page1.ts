import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { JsonData } from '../../app/json-data';
//import { GoogleMapsLatLngBounds, GoogleMapsLatLng} from 'ionic-native';

// GoogleMap を使用する時、 @ionic-native/core が必要(npm install)
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
} from '@ionic-native/google-maps';

declare var google: any;

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  @ViewChild("map") mapChild;
  //map: GoogleMap;
  mapElement: HTMLElement;

  map: any;     // マップ
  lat: number;  // 緯度
  lng: number;  // 経度
  marker: any;
  mkData: any;

  clickEvent =[];

  mkState:string;
  snippet:string = "hoge";

  text: string;
  showText: string;

  constructor(public navCtrl: NavController, public navParams: NavParams
            , private googleMaps: GoogleMaps, public dataService: JsonData) {
    this.text = navParams.get("text");
    this.showText = this.text;
    // 読み込み時に受け取った緯度と経度の位置に Marker を設置
    this.lat = navParams.get("lat");
    this.lng = navParams.get("lng");
    this.mkState = 'マーカーを非表示にする';
  }

  ionViewDidLoad() {
    this.mapInit();
  }

  mapInit() {
    this.dataService.getData('../assets/data/mkData.json').subscribe(data => {
      this.mkData = data.mkData;
      this.loadMap();
    });
  }

  // 画面が読み込まれた時のみ実行
  loadMap() {
    // map表示範囲設定
    let southwest = new google.maps.LatLng(33.7, 130.7);
    let northeast= new google.maps.LatLng(34.0, 130.8);
    let bounds = new google.maps.LatLngBounds(southwest,northeast);
    /* 2018/02/28記述
       移動範囲の制限を上記の"bounds"に設けたが、
       mapへは未実装
    */

    // GoogleMapの構築
    this.map = new google.maps.Map(this.mapChild.nativeElement, {
      zoom: 13,
      center: { lat: this.lat, lng: this.lng },
      minZoom : 12,
      maxZoom : 17
    });

    
    // Markerの設置
    this.marker = [];
    for(let i=0;i<3;i++){
      this.marker[i] = new google.maps.Marker({
        position: { lat: this.mkData[i].lat, lng: this.mkData[i].lng },
        map: this.map,
        title: this.mkData[i].title,
        snippet: this.mkData[i].snippet,
        icon: {
          url: '../../assets/img/bus.png',
          size: {
            width: this.mkData[i].width,
            height: this.mkData[i].height
          }
        }
      });

      // 情報ウィンドウの設定
      let infoWindowContent = '<div id="content"><h1 id="firstHeading" class="firstHeading">'
                              +this.marker[i].title
                              +'</h1></div>'
                              +this.marker[i].snippet;
      let infoWindow = new google.maps.InfoWindow({
        content: infoWindowContent
      });

      // カーソルが乗るたびに情報表示
      google.maps.event.addListener(this.marker[i], 'mouseover', () => {
        infoWindow.open(this.map, this.marker[i]);
      });
      google.maps.event.addListener(this.marker[i], 'mouseout', () => {
        infoWindow.close(this.map, this.marker[i]);
      });

      google.maps.event.addListener(this.marker[i], 'click', () => {
        alert("お気に入り登録しました");
        this.clickEvent[i] = '1';
        alert(this.clickEvent[i]);
      });
    }
  }

  markerVisible(){
    if(this.mkState=='マーカーを表示する'){
      this.mkState = 'マーカーを非表示にする';
      this.setBool(true);
    }else if(this.mkState == 'マーカーを非表示にする'){
      this.mkState = 'マーカーを表示する';
      this.setBool(false);
    }
  }
  setBool(bool){
    alert(this.clickEvent[3]);
    for(var i=0;i<3;i++){
      console.log(this.clickEvent);
      if(this.clickEvent[i] != '1'){
        this.marker[i].setVisible(bool);
      }
    }
  }

  
}