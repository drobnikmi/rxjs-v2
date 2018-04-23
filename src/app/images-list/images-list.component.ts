import { map } from 'rxjs/operators';
import 'rxjs/add/operator/debounceTime';
import { Component, OnInit, Input, AfterContentChecked, AfterContentInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.sass']
})
export class ImagesListComponent implements OnInit, AfterContentInit {

  linksList: Array<string>;

  @Output()
  isLoading = new EventEmitter();

  @Input()
  items;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.items
      .debounceTime(2000)
      .map(items => this.checkLink(items))
      .subscribe(value => {
        this.isLoading.emit(true);
        this.linksList = value;
      });
  }

  checkLink(items) {
    let result;
    const links = [],
          regExpLink = /(https?:\/\/.*\.(gif|png|jpe?g))/gmi;

    for (const item of items) {
      while (result = regExpLink.exec(item.body)) {
        links.push(result[0]);
      }
    }
    return links;
  }
}
