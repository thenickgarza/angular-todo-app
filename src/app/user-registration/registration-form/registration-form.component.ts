import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  imports: [ReactiveFormsModule],
  templateUrl: './registration-form.html',
  styleUrl: './registration-form.css',
})

export class RegistrationForm {

  registrationForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ])
  })

  ngOnInit() {
    this.registrationForm.valueChanges.subscribe((value) => {
      console.log("Form value:", value);
      console.log("Form Valid:", this.registrationForm.valid);
    })
  }
  
  onSubmit() {
    console.log("Form submitted:", this.registrationForm.value);
  }

}
