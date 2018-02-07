import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserModule } from './user/user.module';
import { GroupModule } from '../app/group/group.module';
import { DraftModule } from './draft/draft.module';
import { SharedModule } from './shared/shared.module';
import { MatComponentsModule } from './mat-components.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { OrdersComponent } from './admin/orders/orders.component';
import { ProductsComponent } from './admin/products/products.component';
import { AppComponent } from './app.component';
import { GroupListComponent } from './group/components/group-list/group-list.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
// import { DraftDetailsComponent } from './draft/draft-details/draft-details.component';
// import { DraftComponent } from './draft/draft/draft.component';
import { InboxComponent } from './inbox/inbox.component';
import { MdTabNavigationComponent } from './md-tab-navigation/md-tab-navigation.component';
import { ChatComponent } from './chat/chat.component';


@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    // DraftComponent,
    InboxComponent,
    ChatComponent,
    // DraftDetailsComponent,
    OrdersComponent,
    ProductsComponent,
    MdTabNavigationComponent,
  ],
  imports: [
    SharedModule,
    MatComponentsModule,
    FlexLayoutModule,
    UserModule,
    GroupModule,
    DraftModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { 
        path: '', 
        component: MdTabNavigationComponent,
        children: [
          { path: '', component: GroupListComponent},
        ]
      },
      { 
        path: 'inbox', 
        component: MdTabNavigationComponent,
        children: [
          { path: '', component: InboxComponent},
        ]
      },
      { 
        path: 'chat', 
        component: MdTabNavigationComponent,
        children: [
          { path: '', component: ChatComponent },
        ]
      },
      { 
        path: 'orders', 
        component: MdTabNavigationComponent,
        children: [
          { path: '', component: OrdersComponent},
        ]
      },
    ]),

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
