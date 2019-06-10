import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { ImagesComponent } from './images/images.component';
import { ReportsComponent } from './reports/reports.component';
import { Report1Component } from './reports/report1/report1.component';
import { Report2Component } from './reports/report2/report2.component';
const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: '', pathMatch: 'full', redirectTo:'/users' },
  { path: 'images', component: ImagesComponent },
  //{ path: 'reports', component: ReportsComponent },
  { path: 'reports/report1', component: Report1Component },
  { path: 'reports/report2', component: Report2Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
