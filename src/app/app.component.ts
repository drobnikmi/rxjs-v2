import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { DataUpdateService } from './data-update.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app';
  database:any;
  items: Observable<any[]>;
  constructor(db: AngularFirestore, private dataUpdate: DataUpdateService) {
    this.items = db.collection('messages').valueChanges();
    this.database = db;
  }
  addElement(data){
    console.log(data);
    this.database.collection('messages').doc('dupa').set(data);
  }
}