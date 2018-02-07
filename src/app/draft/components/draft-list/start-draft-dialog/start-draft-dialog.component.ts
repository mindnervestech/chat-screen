import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';


@Component({
  selector: 'start-draft-dialog',
  templateUrl: './start-draft-dialog.component.html',
  styleUrls: ['./start-draft-dialog.component.css']
})
export class StartDraftDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<StartDraftDialogComponent>) {
   }

  confirm() {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
