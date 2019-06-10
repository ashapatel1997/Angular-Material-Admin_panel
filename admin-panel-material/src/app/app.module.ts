import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


//shared module import
import { SharedModuleModule } from '../app/shared-module/shared-module.module';
import { UsersComponent } from './users/users.component';
import { ImagesComponent } from './images/images.component';
import { ReportsComponent } from './reports/reports.component';
import { Report1Component } from './reports/report1/report1.component';
import { Report2Component } from './reports/report2/report2.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ImagesComponent,
    ReportsComponent,
    Report1Component,
    Report2Component
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
