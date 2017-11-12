import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntakeComponent } from './intake/intake.component';
import { ResultComponent } from './result/result.component';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [IntakeComponent, ResultComponent, DashboardComponent]
})
export class DashboardModule { }
