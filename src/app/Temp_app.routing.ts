// import { Routes, CanActivate } from '@angular/router';

// import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
// import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
// import { AuthGuard } from './authentication.service';

// export const AppRoutes: Routes = [{
//   path: '',
//   component: AdminLayoutComponent,
//   canActivate: [AuthGuard],
//   children: [
//     {
//       path: 'company',
//       loadChildren: './company/company.module#CompanyModule'
//     },
//     {
//       path: 'plan',
//       loadChildren: './plan/plan.module#PlanModule'
//     },
//     {
//       path: 'user-configuration',
//       loadChildren: './user-configuration/user-configuration.module#UserConfigurationModule'
//     },
//     {
//       path: 'campaign',
//       loadChildren: './campaign/campaign.module#CampaignModule'
//     },
//   {
//     path: 'account-settings',
//     loadChildren: './accountsettings/accountsettings.module#AccountSettingsModule'
//   }]
// }, {
//   path: '',
//   component: AuthLayoutComponent,
//   children: [{
//     path: 'session',
//     loadChildren: './session/session.module#SessionModule'
//   },
//   {
//     path: 'login',
//     loadChildren: './login/login.module#LoginModule'
//   },
//   {
//     path: 're-login',
//     loadChildren: './re-login/re-login.module#ReLoginModule'
//   },

//   {
//     path: 'recover-password',
//     loadChildren: './Recover-password/recover-password.module#RecoverPasswordModule'
//   },
//   {
//     path: 'tokenVerification',
//     loadChildren: './tokenVerification/tokenVerification.module#TokenVerificationModule'
//   }

// ]
// }, {
//   path: '**',
//   redirectTo: 'session/404'
// }];
