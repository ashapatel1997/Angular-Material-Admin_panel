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
  
  {path: 'users', component: UsersComponent},
  { path:'users/add-user', component: AddUserComponent },
    
  { path: '', pathMatch: 'full', redirectTo: '/users' },

  { path: 'images', component: ImagesComponent },
  { path: 'images/add-image', component: AddImageComponent },
  { path: 'images/edit-image/:id', component: AddImageComponent },
 // { path: 'images/edit-image', component: AddImageComponent },

  //{ path: 'reports', component: ReportsComponent },
  { path: 'reports/report1', component: Report1Component },
  { path: 'reports/report2', component: Report2Component }
     
 
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
