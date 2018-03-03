import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs/Subject';


@Component({
  selector: 'app-form-comp',
  template: `
<form [formGroup]="myForm" (ngSubmit)="formSubject.next()">
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
  <button type="submit">Send</button>
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
      name: [''],
      time: [''],
      user: ['']
    });
    this.formSubject
      .subscribe(() => this.formSubmit.emit(this.myForm.value))
  }
}
