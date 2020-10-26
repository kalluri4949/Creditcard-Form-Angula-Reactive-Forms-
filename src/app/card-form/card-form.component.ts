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
    cardNumber: new FormControl(''),
    expiration: new FormControl(''),
    securityCode: new FormControl(''),
  });
  onSubmit(): any {
    console.log('submitted');
  }
  constructor() {}

  ngOnInit(): void {}
}
