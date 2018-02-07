import { MatComponentsModule } from './../../../mat-components.module';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'shared/services/User/user.service';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {
    private userName:string;
    private user: any;
    private allGroups: any[]; 
    constructor(private us: UserService) { 
      
    }
  
    ngOnInit() {
        this.us.emitChange('MY GROUPS');
    }

}
