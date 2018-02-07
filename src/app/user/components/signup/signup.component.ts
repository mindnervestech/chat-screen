import { Component, OnInit } from '@angular/core';

import { FormsModule, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

import { AppUser } from 'app/models/app-user';
import { Router } from '@angular/router';
import { UserService } from 'shared/services/User/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user: AppUser;

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  profImageInput = new FormControl('', [Validators.required]);


  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getPasswordErrorMessage() {
    return this.password.hasError('required') ? 'You must enter a value' : '';
  }

  getFirstNameErrorMessage() {
    return this.firstName.hasError('required') ? 'You must enter a value' : '';
  }
  getLastNameErrorMessage() {
    return this.lastName.hasError('required') ? 'You must enter a value' : '';
  }

  constructor(private userService:UserService) {
  }
  private profImage: File; 
  detectFiles(event){
    let fileList: FileList = event.target.files;
    this.showInputError = false; 
    if(fileList.length > 0) {
      this.isFile =  true;
      this.profImage = fileList[0];
      this.user.profImage = this.profImage;
    }
  }
  private isFile:boolean = false; 
  private showInputError: boolean = false;

}
