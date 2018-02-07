import { Component, OnInit } from '@angular/core';

import { FormsModule, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

import { AppUser } from 'app/models/app-user';

import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  user: AppUser;

  email = new FormControl('', [Validators.required, Validators.email]);

  constructor( private router: Router) {
  }

  resetPassword() {
    this.user.isLoggedIn = false;
    this.toLogin();
  }

  toLogin() {
    this.router.navigateByUrl('/login');
  }

  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' : '';
  }

}
