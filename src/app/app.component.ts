import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../app/shared/services/User/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {
  private user: any;
  private showNav: boolean = false; 

  constructor() {
    
  }
  navToggled($event){
    alert("Toggled logout");
    !this.showNav;
  }
}
