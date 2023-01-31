import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component';
import { StaffMainComponent } from './staff-main/staff-main.component';
import { WorkAssignComponent } from './work-assign/work-assign.component';

const routes: Routes = [
  { path:"dashboard",component:DashboardComponent,
children:[
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignUpComponent}
]},

{path:"admin",component:AdminDashBoardComponent,
children:[
  {path:"adminhome",component:HomeAdminComponent},
  {path:"workassign",component:WorkAssignComponent}
 
 
]
},
{
  path:"",
  redirectTo:"dashboard/home",
  pathMatch:'full'
},

{path:"staffdashboard",component:StaffDashboardComponent,

children:[
  {path:"staffmain",component:StaffMainComponent}
]}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
