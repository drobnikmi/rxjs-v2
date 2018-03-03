import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-comp',
  template: `
  <form [formGroup]="someForm">
  <div class="form-group">
    <label class="center-block">Message: 
      <input class="form-control" formControlName="name">
    </label>
  </div>
  <button type="submit">Send</button>
</form>
<p>Form value: {{ someForm.value}}</p>
  `,
  styleUrls: ['./form.component.sass']
})
export class FormCompComponent implements OnInit {
  someForm = new FormGroup ({
    name: new FormControl()
  });
  constructor() { }

  ngOnInit() {
  }

}
