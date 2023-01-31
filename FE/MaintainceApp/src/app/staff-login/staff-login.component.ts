import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-staff-login',
  templateUrl: './staff-login.component.html',
  styleUrls: ['./staff-login.component.css']
})
export class StaffLoginComponent implements OnInit {

  constructor(private staffService:StaffService, private router :Router) { this.getAllAdmin()}

  ngOnInit(): void {
  }
    listAdmin:any
  getAllAdmin(){
    this.staffService.getAllAdmin().subscribe(
      responce=>{
        console.log(responce);
        this.listAdmin=responce;
      }
    )
  }

  staffLoginForm= new FormGroup({
    staffEmail:new FormControl(''),
    password: new FormControl('')
  })
 emailAdmin:any;
  adminEmail(data:any){
    this.emailAdmin=data;
    console.log(this.emailAdmin);
    localStorage.setItem('adminEmail',this.emailAdmin);

  }
  staffName:any;
  staff:any;
  staffemail:any;
  status:any;
  login(){
  this.staffService.staffLogin(this.staffLoginForm.value).subscribe(
    responce=>{
      console.log(responce);
      this.staff=responce;
      this.staffemail=this.staff.staffEmail;
      this.staffName=this.staff.name;
      this.status=this.staff.status;
      console.log(this.staffemail);
      console.log(this.status);
      localStorage.setItem('staffemail',this.staffemail);
      localStorage.setItem('staffName', this.staffName);
      localStorage.setItem('staffStatus', this.status);
      if(responce!=null){
        alert("you are succesfully Login ");
        this.router.navigateByUrl("/staffdashboard/staffmain")
      }
      else{
        alert("Some data is not matching")
      }
    }
  )



  }
}
