import { Component, OnInit, Inject } from '@angular/core';
import { DraftDialogContainerComponent } from '../draft-dialog-container/draft-dialog-container.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { GroupObject } from 'app/models/group';
import {Observable} from "rxjs";

@Component({
  selector: 'app-choose-seats',
  templateUrl: './choose-seats.component.html',
  styleUrls: ['./choose-seats.component.css']
})
export class ChooseSeatsComponent implements OnInit {
  sections = [
    {value: 'vip', viewValue: 'VIP', viewPrice: 'Sold Out'},
    {value: 'center-court-rows-11-17', viewValue: 'Center Court Rows 11-17', viewPrice: '$179.00 per game'},
    {value: 'baseline-rows-1-5', viewValue: 'Baseline Rows 1-5', viewPrice: '$122.00 per game'},
    {value: 'baseline-rows-18-23', viewValue: 'Baseline Rows 18-23', viewPrice: '$79.00 per game'},
    {value: 'll-corners-rows-18-26', viewValue: 'LL Corners Rows 18-26', viewPrice: '$56.00 per game'},
    {value: 'll-ends-rows-18-26', viewValue: 'LL Ends Rows 18-26', viewPrice: '$45.00 per game'},
  ];
  games = [
    {value: '8-games', viewValue: '8 Games', viewPrice: '$632 per seat'},
    {value: '16-games', viewValue: '16 Games', viewPrice: '$1264 per seat'},
    {value: '32-games', viewValue: '32 Games', viewPrice: '$2528 per seat'}
  ];
  seats = [
    {value: '1-seats', viewValue: '1 Seat', viewPrice: '$1264.00 total'},
    {value: '2-seats', viewValue: '2 Seats', viewPrice: '$2528.00 total'},
    {value: '3-seats', viewValue: '3 Seats', viewPrice: '$3792.00 total'},
    {value: '4-seats', viewValue: '4 Seats', viewPrice: '$5056.00 total'}
  ];
  
  //required data for API 
  selectedTicketData = {
    group_size: 1,
    type: 'PUBLIC', 
    team: '',
    name: '',
    sport: '',
    league: '',
    homeGameCount: '',
    section: '',
    games: '',
    seats: ''
  }
  constructor(public dialog: MatDialog) {
     

   }



  ngOnInit() {
  }

}
