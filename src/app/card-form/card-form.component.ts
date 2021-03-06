import { DateFormControl } from '../date-form-control';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css'],
})
export class CardFormComponent implements OnInit {
  creditForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      // Validators.maxLength(10),
      // Validators.pattern('/s/'),
    ]),
    cardNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(16),
      Validators.maxLength(16),
    ]),
    expiration: new DateFormControl('', [
      Validators.required,
      Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/),
    ]),
    securityCode: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3),
    ]),
  });
  onSubmit(): void {
    console.log('submitted');
  }
  onReset(): void {
    this.creditForm.reset();
  }
  constructor() {}

  ngOnInit(): void {}
}
