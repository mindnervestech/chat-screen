import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StartDraftDialogComponent } from './start-draft-dialog/start-draft-dialog.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-draft-list',
  templateUrl: './draft-list.component.html',
  styleUrls: ['./draft-list.component.css']
})
export class DraftListComponent implements OnInit, OnDestroy {
  constructor() {
   
   }
   

  
  ngOnInit() {
  }
  ngOnDestroy() {
  
  }
}
