import { Subject } from 'rxjs/Subject';
import { Component } from '@angular/core';
import { DataUpdateService } from './data-update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
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
  }
}
