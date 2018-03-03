import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-comp',
  template: `
<form [formGroup]="myForm" (ngSubmit)="onSubmit(myForm)">
<div class="form-group">
    <label class="center-block">Message:
      <input class="form-control" formControlName="name">
    </label>
  </div>
  <button type="submit">Send</button>
</form>
  `,
  styleUrls: ['./form.component.sass']
})
export class FormCompComponent implements OnInit {
  myForm: FormGroup;
  constructor() { }
  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('')
    });
  }
  onSubmit(form: FormGroup) {
    console.log('Name', form.value.name, [Validators.required, , Validators.minLength(1)]);
  }
}
