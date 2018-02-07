import { Component, OnInit } from '@angular/core';
import { SharedModule } from './../../../shared/shared.module';
import { UserNavComponent } from '../user-nav/user-nav.component';
import { AppUser } from 'app/models/app-user';
import { UserService } from 'app/shared/services/User/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'user-welcome',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})

export class PaymentComponent implements OnInit {
  user: AppUser;
  isRemembered = true;

  constructor(private router: Router, private userService: UserService) {
    
  }


  ngOnInit() {
  }
 
}
