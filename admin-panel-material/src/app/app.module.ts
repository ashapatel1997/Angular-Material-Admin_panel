import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


//shared module and other component imports
import { SharedModuleModule } from '../app/shared-module/shared-module.module';
import { UsersComponent } from './users/users.component';
import { ImagesComponent } from './images/images.component';
import { ReportsComponent } from './reports/reports.component';
import { Report1Component } from './reports/report1/report1.component';
import { Report2Component } from './reports/report2/report2.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { CdkColumnDef } from '@angular/cdk/table';
import { AddImageComponent } from './images/add-image/add-image.component';
import { CancelDialogComponent } from '../app/dialog/cancel-dialog/cancel-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteConfirmDialogComponent } from './dialog/delete-confirm-dialog/delete-confirm-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ImagesComponent,
    ReportsComponent,
    Report1Component,
    Report2Component,
    AddUserComponent,
    CancelDialogComponent,
    AddImageComponent,
    DeleteConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModuleModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }) //disable ngModel anf formControl warnings 
  ],
  providers: [CdkColumnDef],
  entryComponents: [CancelDialogComponent, DeleteConfirmDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
