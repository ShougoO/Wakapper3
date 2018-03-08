import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class JsonData {

  constructor(public http: Http) { }

<<<<<<< HEAD
  getData(path:string) {
    return this.http.get(path)
=======
  getData(string) {
    return this.http.get(string)
>>>>>>> 1c740043cb543370ac4ec91e501140e0f8d1f75e
      .map(res => res.json());
  };
}
