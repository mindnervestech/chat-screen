import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatComponentsModule } from './../mat-components.module';
import { GroupListComponent } from './components/group-list/group-list.component';
import { NewGroupComponent } from './components/new-group/new-group.component';
import { GroupConfigComponent } from './components/group-config/group-config.component';
import { ChooseSeatsComponent } from './components/choose-seats/choose-seats.component';
import { ChooseTeamComponent } from './components/choose-team/choose-team.component';
import { SharedModule } from 'shared/shared.module';
import { ChooseSeasonComponent } from './components/choose-season/choose-season.component';
import { DraftDialogContainerComponent } from './components/draft-dialog-container/draft-dialog-container.component';
import { MdTabNavigationComponent } from '../md-tab-navigation/md-tab-navigation.component';
import { StartDraftDialogComponent } from '../draft/components/draft-list/start-draft-dialog/start-draft-dialog.component'

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatComponentsModule,
    RouterModule.forChild([
      { 
        path: 'home', 
        component: MdTabNavigationComponent,
        children: [
          { path: '', component: GroupListComponent},
          { path: 'add-group', component: NewGroupComponent},
          { path: 'group-config', component: GroupConfigComponent}
        ]
      }
    ])
  ],
  providers: [
  ],
  entryComponents: [
    DraftDialogContainerComponent,
    StartDraftDialogComponent
  ],
  declarations: [
    GroupConfigComponent,
    ChooseSeatsComponent,
    ChooseTeamComponent,
    GroupListComponent,
    NewGroupComponent,
    ChooseSeasonComponent,
    DraftDialogContainerComponent,
    StartDraftDialogComponent
  ],
  bootstrap:[]
})
export class GroupModule { }
