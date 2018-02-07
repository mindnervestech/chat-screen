import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DraftComponent } from './components/draft/draft.component';
import { DraftResultComponent } from './components/draft-result/draft-result.component';
import { DraftListComponent } from './components/draft-list/draft-list.component';
import { DraftQueueComponent } from './components/draft-queue/draft-queue.component';
import { MatComponentsModule } from './../mat-components.module';
import { SharedModule } from 'shared/shared.module';
import { MdTabNavigationComponent } from '../md-tab-navigation/md-tab-navigation.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatComponentsModule,
    RouterModule.forChild([
      { 
        path: 'draft-config', 
        component: MdTabNavigationComponent,
        children: [
          { path: '', component: DraftComponent},
        ]
      }
    ])
  ],
  declarations: [DraftResultComponent, DraftListComponent, DraftQueueComponent, DraftComponent]
})
export class DraftModule { }
