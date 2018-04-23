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
<<<<<<< HEAD
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
=======
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
>>>>>>> b17e26589dc7cdbe78f6fd5e22ae4d0b1c22687c
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
<<<<<<< HEAD
=======
      timestamp: ['', Validators.required],
>>>>>>> b17e26589dc7cdbe78f6fd5e22ae4d0b1c22687c
      sender: ['', Validators.required]
    });

    this.formSubject
      .filter(() => this.myForm.valid)
<<<<<<< HEAD
      .subscribe(() => this.formSubmit.emit(this.myForm.value));
  }

  onSubmit() {
    this.formSubject.next();
    this.myForm.reset();
=======
      // .map(() => this.form.value)
      // .subscribe(this.formSubmit);
      .subscribe(() => this.formSubmit.emit(this.myForm.value))
>>>>>>> b17e26589dc7cdbe78f6fd5e22ae4d0b1c22687c
  }
}
