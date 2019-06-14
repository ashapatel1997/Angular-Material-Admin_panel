import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { ImagesComponent } from './images/images.component';
import { AddImageComponent } from './images/add-image/add-image.component';
import { ReportsComponent } from './reports/reports.component';
import { Report1Component } from './reports/report1/report1.component';
import { Report2Component } from './reports/report2/report2.component';
import { AddUserComponent } from '../app/users/add-user/add-user.component';
const routes: Routes = [
  
  { path: 'users', component: UsersComponent }, //router link for users page
  
  { path: 'users/add-user', component: AddUserComponent }, //router link to add-user 
  { path: '', pathMatch: 'full', redirectTo: '/users' }, //default route when path is not specified

  { path: 'images', component: ImagesComponent }, //router link for images page
  { path: 'images/add-image', component: AddImageComponent },//router link add-image
  { path: 'images/edit-image/:id', component: AddImageComponent }, //router link to edit selected image (bases on :id)
 

  //{ path: 'reports', component: ReportsComponent },
  { path: 'reports/report1', component: Report1Component }, //router link for report 1 page
  { path: 'reports/report2', component: Report2Component } //router link for report 2 page
     

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
