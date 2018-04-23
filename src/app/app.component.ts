import { Subject } from 'rxjs/Subject';
import { Component } from '@angular/core';
<<<<<<< HEAD
import { DataUpdateService } from './data-update.service';
=======
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { DataUpdateService } from './data-update.service';

>>>>>>> b17e26589dc7cdbe78f6fd5e22ae4d0b1c22687c

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
<<<<<<< HEAD
  private items;
  isLoading = true;

  constructor(private dataUpdate: DataUpdateService) {
   this.items = this.dataUpdate.getItemsList();
  //  this.items.subscribe(val => console.log(val));
  }

  addElement(message) {
    this.dataUpdate.addElement(message);
  }

  changeLoadingStatus() {
    this.isLoading = false;
=======
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
>>>>>>> b17e26589dc7cdbe78f6fd5e22ae4d0b1c22687c
  }
}