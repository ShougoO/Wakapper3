import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class JsonData {

  constructor(public http: Http) { }

  getData() {
    return this.http.get('../assets/data/data.json')//'../src/assets/data/data.json'
      .map(res => res.json());
  };
}
