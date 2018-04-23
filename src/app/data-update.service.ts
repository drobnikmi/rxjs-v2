<<<<<<< HEAD
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class DataUpdateService {
  private itemsList: Observable<any[]>;

  constructor(private http: HttpClient,
              private db: AngularFirestore) {
    this.itemsList = db.collection('messages').valueChanges();
  }

  getItemsList() {
    return this.itemsList;
  }

  addElement(data) {
    this.db.collection('messages').add({
      body: data.body,
      timestamp: new Date,
      sender: data.sender
    });
  }

  getUrl(id?: string): string {
    const mainId = id ? '/' + id : '';
    return `https://chat-devmeeting.firebaseio.com/messages${mainId}.json`;
=======
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
>>>>>>> b17e26589dc7cdbe78f6fd5e22ae4d0b1c22687c
  }
}
