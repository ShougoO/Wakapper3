import { Injectable } from '@angular/core';
import { RequestOptions, Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class JsonData {

  constructor(public http: Http) { }

  getData(path:string) {
    return this.http.get(path)
      .map(res => res.json());
  };

  sendData(path:string) {
    alert("favo");
    let data = '{"data":["aaa"]}';
    let body = JSON.stringify(data);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers, url: path});

    alert("fin");

    console.log(path)
    console.log(body)
    console.log(options)
    return this.http.put(path, body, options)
      .map(res => {
        return res.json()
      });
  };
}
