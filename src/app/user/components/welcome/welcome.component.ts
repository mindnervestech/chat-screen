import { Component, OnInit } from '@angular/core';
import { SharedModule } from './../../../shared/shared.module';
import { UserNavComponent } from '../user-nav/user-nav.component';

import { FormsModule, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// import { AngularFireAuth } from 'angularfire2/auth';
// import * as firebase from 'firebase';

import { AppUser } from 'app/models/app-user';
import { UserService } from 'app/shared/services/User/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'user-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {
  user: AppUser;
  isRemembered = true;

  constructor(private router: Router, private userService: UserService) {
    
  }
  //UI event handlers
 

  ngOnInit() {
  }
 
}
