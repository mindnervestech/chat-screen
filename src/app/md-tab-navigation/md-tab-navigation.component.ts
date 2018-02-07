import { SharedModule } from './../shared/shared.module';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { AppUser } from '../../app/models/app-user';


@Component({
  selector: 'app-md-tab-navigation',
  templateUrl: './md-tab-navigation.component.html',
  styleUrls: ['./md-tab-navigation.component.css']
})
export class MdTabNavigationComponent {

  pageName: string = "Default";
  user: AppUser;


  constructor() {
   
   }

  @Output() lgEvent = new EventEmitter<string>();

  logout() {
    this.lgEvent.emit("LOGOUT")
  }

}
