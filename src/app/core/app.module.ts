import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './../app-routing/app-routing.module';

import { LoginModule } from './../login/login.module';
import { DashboardModule } from './../dashboard/dashboard.module';

import { 
  MatButtonModule, 
  MatCheckboxModule
} from '@angular/material';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
