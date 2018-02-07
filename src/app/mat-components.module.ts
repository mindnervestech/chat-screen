import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatCheckboxModule,
  MatDialogModule,
  MatInputModule,
  MatButtonModule,
  MatTabsModule,
  MatToolbarModule,
  MatListModule,
  MatCardModule,
  MatStepperModule,
  MatMenuModule,
  MatSidenav,
  MatSidenavContainer,
  MatSidenavModule,
  MatIconModule,
  MatSelectModule
 } from '@angular/material';

 import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  exports: [
    MatCheckboxModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatStepperModule,
    MatSelectModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    FlexLayoutModule
  ]
})
export class MatComponentsModule { }
