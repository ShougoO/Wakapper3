import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class JsonData {

  constructor(public http: Http) { }

  getData() {
    return this.http.get('../src/assets/data/data.json')
      .map(res => res.json());
  };
}
