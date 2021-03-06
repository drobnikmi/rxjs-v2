import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-form-comp',
  template: `
  <form class="mb-5" [formGroup]="myForm" (ngSubmit)="onSubmit()">
    <div class="form-group">
      <label class="center-block" for="userInput">User:</label>
      <input class="form-control" id="userInput" formControlName="sender">
    </div>

    <div class="form-group">
      <label class="center-block" for="messageText">Message:</label>
        <textarea class="form-control" id="messageText" formControlName="body" rows="5"></textarea>
      </div>
    <button type="submit" [disabled]="myForm.invalid" class="btn btn-primary" >Send</button>
  </form>
  `,
  styleUrls: ['./form.component.sass']
})
export class FormCompComponent {
  myForm: FormGroup;

  @Output() formSubmit = new EventEmitter();
  formSubject = new Subject();

  constructor(private formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      body: ['', Validators.required],
      sender: ['', Validators.required]
    });

    this.formSubject
      .filter(() => this.myForm.valid)
      .subscribe(() => this.formSubmit.emit(this.myForm.value));
  }

  onSubmit() {
    this.formSubject.next();
    this.myForm.reset();
  }
}
