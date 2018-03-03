import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-form-comp',
  template: `
  <form [formGroup]="myForm">
  <div class="form-group">
    <label class="center-block">Message:
      <input class="form-control" formControlName="name">
    </label>
    <label class="center-block">Time:
      <input class="form-control" formControlName="time">
    </label>
    <label class="center-block">User:
      <input class="form-control" formControlName="user">
    </label>
  </div>
  <button type="submit" [disabled]="myForm.invalid">Send</button>
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
      name: ['', Validators.required],
      time: ['', Validators.required],
      user: ['', Validators.required]
    });

    this.formSubject
      .filter(() => this.myForm.valid)
      .subscribe(() => this.formSubmit.emit(this.myForm.value))
  }
}
