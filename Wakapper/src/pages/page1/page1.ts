import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { JsonData } from '../../app/json-data';

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
  marker: any;  // マーカー
  lat: number;  // 緯度
  lng: number;  // 経度

  mkData: any;

  mkStatus: string;
  clickStatus: any;

  text: string;
  showText: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private googleMaps: GoogleMaps, public dataService: JsonData)
    {
    this.text = navParams.get("text");
    this.showText = this.text;
    // 読み込み時に受け取った緯度と経度の位置に Marker を設置
    this.lat = navParams.get("lat");
    this.lng = navParams.get("lng");
  }

  ionViewDidLoad() {
    this.mapInit();
  }

  mapInit() {
    // json取得
    this.dataService.getData('../src/assets/data/mkData.json').subscribe(data => {//../assets/data/mkData.json
      this.mkData = data.mkData;
      this.loadMap();
    });
  }

  // 画面が読み込まれた時のみ実行
  loadMap() {
    // GoogleMapの構築
    this.map = new google.maps.Map(this.mapChild.nativeElement, {
      zoom: 12,
      center: { lat: this.lat, lng: this.lng }
    });

    // Markerの設置
    this.mkStatus = '非表示にする';
    this.marker = [];
    this.clickStatus = [];

    for(let i=0;i<3;i++){
      this.marker[i] = new google.maps.Marker({
        position: { lat: this.mkData[i].lat, lng: this.mkData[i].lng },
        map: this.map,
        title: 'Bus Stop(Test)',
        icon: {
          url: '../../assets/img/bus.png',// ../../assets/img/bus.png
          size: {
            width: this.mkData[i].width,
            height: this.mkData[i].height
          }
        }
      });
      this.clickStatus[i] = 1;

      google.maps.event.addListener(this.marker[i], 'click', () => {
        if(this.clickStatus[i]){
          alert("お気に入り登録しました。");
          this.clickStatus[i] = 0;
        }else{
          alert("お気に入り解除しました。");
          this.clickStatus[i] = 1; 
        }
      });
    }
  }

  mkVisible(){
    if(this.mkStatus == '非表示にする'){
      this.mkStatus = '表示する';
      this.mkSetVisible(false);
    }else if(this.mkStatus == '表示する'){
      this.mkStatus = '非表示にする';
      this.mkSetVisible(true);
    }
  }

  mkSetVisible(bool){
      for(let i=0;i<3;i++){
      if(this.clickStatus[i]){
        this.marker[i].setVisible(bool);  
      }
    }
  }
}
