import { Component, OnInit } from '@angular/core';

import { AppUser } from 'app/models/app-user';


@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  appUser: AppUser;

  constructor() {

   }

  logout() {
  }

}
