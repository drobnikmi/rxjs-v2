import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-form-comp',
  template: `
  <form [formGroup]="someForm">
  <div class="form-group">
    <label class="center-block">Message:
      <input class="form-control" formControlName="name" [value]="someForm.value.name">
    </label>
  </div>
  <button type="submit" mat-button [disabled]="someForm.invalid">Send</button>
</form>
<p>Form value: {{ someForm.value}}</p>
  `,
  styleUrls: ['./form.component.sass']
})
export class FormCompComponent implements OnInit {
  someForm = new FormGroup ({
    name: new FormControl()
  });

  formSubmitSubject = new Subject();

  constructor(private formBuilder: FormBuilder) {
    this.someForm = formBuilder.group({
        name: ['', Validators.required]
    });

    this.formSubmitSubject
      .filter(() => this.someForm.valid);

  }
}
