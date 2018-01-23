import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class JsonData {

  constructor(public http: Http) { }

  getData(path:string) {
    return this.http.get(path)
      .map(res => res.json());
  };
}
