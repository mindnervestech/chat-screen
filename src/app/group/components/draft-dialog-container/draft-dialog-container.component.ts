import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-draft-dialog-container',
  templateUrl: './draft-dialog-container.component.html',
  styleUrls: ['./draft-dialog-container.component.css']
})
export class DraftDialogContainerComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DraftDialogContainerComponent>) { }

  confirmDraftStart() {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
