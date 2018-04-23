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
  }
}
