import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { StaffComponent } from './staff/staff.component';
import { WorkAssignComponent } from './work-assign/work-assign.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { StaffLoginComponent } from './staff-login/staff-login.component';
import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component';
import { StaffMainComponent } from './staff-main/staff-main.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeAdminComponent,
    HomeComponent,
    SignUpComponent,
    LoginComponent,
    AdminDashBoardComponent,
    StaffComponent,
    WorkAssignComponent,
    StaffLoginComponent,
    StaffDashboardComponent,
    StaffMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, MatFormFieldModule,MatCardModule,MatButtonModule,MatToolbarModule,MatSidenavModule,MatDatepickerModule,
    BrowserAnimationsModule,FormsModule, ReactiveFormsModule,MatMenuModule,MatGridListModule,DragDropModule, MatInputModule,
    MatListModule,MatSelectModule, HttpClientModule,MatButtonToggleModule,MatDialogModule,MatRadioModule,MatIconModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
