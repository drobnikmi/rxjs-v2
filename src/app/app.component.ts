import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-root',
  template: `
    <div>{{title}}</div>
    <p>aaa</p>
  `,
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app';
  constructor(db: AngularFirestore) {
    console.log(db);
  }
}
