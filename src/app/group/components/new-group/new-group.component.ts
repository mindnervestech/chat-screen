import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'shared/services/User/user.service';

@Component({
  selector: 'app-new-group',
  templateUrl: './new-group.component.html',
  styleUrls: ['./new-group.component.css']
})
export class NewGroupComponent implements OnInit {
  selection = {
    season: '',
    team: '',
    seats: ''
  };
  constructor(private router: Router, private us: UserService) { }

  ngOnInit() {
  }

}
