import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IntakeFormComponent } from './intake-form/intake-form.component';
import { ReporterComponent } from './reporter/reporter.component';

@NgModule({
  declarations: [
    AppComponent,
    IntakeFormComponent,
    ReporterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
