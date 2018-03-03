import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-form-comp',
  template: `
  <form [formGroup]="myForm" (ngSubmit)="formSubject.next()">
  <div class="form-group">
    <label class="center-block">Message:
      <input class="form-control" formControlName="body">
    </label>
    <label class="center-block">Time:
      <input class="form-control" formControlName="timestamp">
    </label>
    <label class="center-block">User:
      <input class="form-control" formControlName="sender">
    </label>
  </div>
  <button type="submit" [disabled]="myForm.invalid" >Send</button>
</form>
  `,
  styleUrls: ['./form.component.sass']
})
export class FormCompComponent {
  myForm: FormGroup;

  @Output() formSubmit = new EventEmitter();
  formSubject= new Subject();

  constructor(private formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      body: ['', Validators.required],
      timestamp: ['', Validators.required],
      sender: ['', Validators.required]
    });

    this.formSubject
      .filter(() => this.myForm.valid)
      // .map(() => this.form.value)
      // .subscribe(this.formSubmit);
      .subscribe(() => this.formSubmit.emit(this.myForm.value))
  }
}
