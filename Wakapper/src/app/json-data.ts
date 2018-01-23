import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class JsonData {

  constructor(public http: Http) { }

  getData(string) {
    return this.http.get(string)
      .map(res => res.json());
  };
}
