import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AppUser } from '../../../../app/models/app-user';
import { error } from 'util';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UserService {
  

  constructor() {
   
  }

  


  private pageTitle = new Subject<any>();

  changeEmitted$ = this.pageTitle.asObservable();

  emitChange(myMessage: any) {
    this.pageTitle.next(myMessage);
  }

  
 
  
}
