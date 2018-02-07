import { Component, OnInit } from '@angular/core';
import { UserService } from 'shared/services/User/user.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private us: UserService) { }

  ngOnInit() {
    this.us.emitChange('ORDERS');
  }

}
