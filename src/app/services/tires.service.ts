import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TiresService {
  constructor(public http: HttpClient) { }

  rootURL = 'https://6080be3273292b0017cdbf2a.mockapi.io';

  getYears(): Observable<any> {
    return this.http.get(this.rootURL + '/years');
  }

  getMakes(year): Observable<any> {
    console.log("In Service ==> ", year);
    return this.http.get(this.rootURL + '/makes');
  }

  getModels(maker): Observable<any> {
    console.log("In Service ==> ", maker);
    return this.http.get(this.rootURL + '/models');
  }

  getTrim(model): Observable<any> {
    console.log("In Service ==> ", model);
    return this.http.get(this.rootURL + '/trim');
  }
}
