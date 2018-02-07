import { Component, OnInit } from '@angular/core';
import { SharedModule } from './../../../shared/shared.module';
import { FormsModule, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
import { AppUser } from 'app/models/app-user';
import { UserService } from 'app/shared/services/User/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: AppUser;
  isRemembered = true;

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getPasswordErrorMessage() {
    return this.password.hasError('required') ? 'You must enter a value' : '';
  }

  // constructor(private auth: AuthService, private userService: UserService) {
  //   userService.get().subscribe(appUser => this.user = appUser);
  // }
  constructor(private router: Router, private userService: UserService) {
    
  }
  //UI event handlers
  private emailLoginToggled: boolean = false;
  toggleEmailSignUp(){
    this.router.navigateByUrl('/signup');
  }

  signInFacebook(){
    alert("Logging in Facebook");
  }

  signInEmail(user) {
  }

  forgotPassword(user) {
    this.user.isLoggedIn = false;
    this.router.navigateByUrl('/forgot-password');
  }

  ngOnInit() {
  }
  // login() {
  //   this.auth.login();
  // }

}
