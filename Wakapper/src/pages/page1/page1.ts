import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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

  text: string;
  showText: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private googleMaps: GoogleMaps) {
    this.text = navParams.get("text");
    this.showText = this.text;
    // 読み込み時に受け取った緯度と経度の位置に Marker を設置
    this.lat = navParams.get("lat");
    this.lng = navParams.get("lng");
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  // 画面が読み込まれた時のみ実行
  loadMap() {
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
  }
}
