import { Component, OnInit } from '@angular/core';
import { UserService } from 'shared/services/User/user.service';


@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {

  private allThreads: any; 

  constructor( private us: UserService) { 
    this.selectedMessage = this.messages[0];
  }
    // MESSAGE
    selectedMessage: any;
    messages: Object[] = [{
        from: 'Bobby Sullivan',
        photo: 'assets/styles/inbox/images/face1.jpg',
        subject: 'Egestas Elit Vestibulum',
      }, {
        from: 'Bryan Morgan',
        photo: 'assets/styles/inbox/images/face2.jpg',
        subject: 'Ultricies Sem Cursus',
      }
    ];
    
    isOver(): boolean {
      return window.matchMedia(`(max-width: 960px)`).matches;
    }
  
    onSelect(message: Object[]): void {
      this.selectedMessage = message;
    }
  ngOnInit() {
    this.us.emitChange('MESSAGES');
  }

}
