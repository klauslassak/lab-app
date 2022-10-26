import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILabData } from './ilab-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _jsonURL = './assets/SampleData.json';

  constructor(private http: HttpClient) { 
    var object;
    this.getLabValues().subscribe(data => {
      console.log(data);
     });
  }

  public getLabValues(): Observable<ILabData[]> {
    return this.http.get<ILabData[]>(this._jsonURL);
  }

}
