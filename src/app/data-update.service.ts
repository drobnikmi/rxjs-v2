import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';

@Injectable()
export class DataUpdateService {

  constructor(private http: HttpClient) {
  }
  addElement(data){
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    return this.http.post(this.getUrl('zmienna'), data, headers);
  }
  getUrl(id?:string):string{
    const mainId = id ? '/' + id : '';
    return `https://chat-devmeeting.firebaseio.com/messages${mainId}.json`
  }
}
