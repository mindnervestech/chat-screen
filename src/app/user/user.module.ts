import { RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { SharedModule } from './../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatComponentsModule } from './../mat-components.module';
import { WelcomeComponent } from 'app/user/components/welcome/welcome.component';
import { UserNavComponent } from 'app/user/components/user-nav/user-nav.component';
import { PaymentComponent } from 'app/user/components/payment/payment.component';




@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    MatComponentsModule,
    RouterModule.forChild([
      { path: 'welcome', component: WelcomeComponent},
      { path: 'login', component: LoginComponent,  },
      { path: 'signup', component: SignupComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent },
      { path: 'payment', component: PaymentComponent },
    ])
  ],
  declarations: [
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    WelcomeComponent,
    UserNavComponent,
    PaymentComponent
  ],
  exports: [
    CommonModule,
    SharedModule,
    MatComponentsModule,
    ReactiveFormsModule
  ],
  providers: [
  ]
})
export class UserModule { }
