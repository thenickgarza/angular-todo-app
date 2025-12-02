import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';


const passwordMatchValidator = (form: AbstractControl) => {
  const password = form.get('password');
  const confirmPassword = form.get('confirmPassword');

  if (!password || !confirmPassword) {
    return null;
  }

  if (password.value !== confirmPassword.value) {
    return { passwordMismatch: true };
  }
  return null;
}

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
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ])
  }, { validators: passwordMatchValidator });


  ngOnInit() {
    this.registrationForm.valueChanges.subscribe((value) => {
      console.log("Form value:", value);
      console.log("Form Valid:", this.registrationForm.valid);
    })
  }
  
  onSubmit() {
    console.log("Form submitted:", this.registrationForm.value);
    localStorage.setItem('user', JSON.stringify(this.registrationForm.value));
    console.log("User saved:", localStorage.getItem('user'));
  }

}
