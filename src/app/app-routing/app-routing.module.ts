import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './../dashboard/dashboard.component';
import { LoginComponent } from './../login/login.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'home',
        component: DashboardComponent
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}