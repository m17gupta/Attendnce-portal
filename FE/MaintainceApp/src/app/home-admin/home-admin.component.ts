import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MaintainceService } from '../maintaince.service';
import { StaffComponent } from '../staff/staff.component';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {

  constructor(public dialog: MatDialog, private maintainceService:MaintainceService, private router:Router) { 
    }

  ngOnInit(): void {
  }


  addStaff() {
    const dialogRef = this.dialog.open(StaffComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
       
    });
    
  }
  istableView:boolean=false;
istable:boolean=false;
  staffList:any;

  
  viewStaff(){
     this.maintainceService.getListOdStaff().subscribe(
      response=>{
       console.log(response);
       this.staffList=response;
       this.istable=true;
      }
     )
  }

  isedit:boolean=false;

  editStaffForm= new FormGroup({
    name: new FormControl(''),
    staffEmail: new FormControl(''),
    phoneNo: new FormControl(''),
    password: new FormControl(''),
    status: new FormControl('')
  })

edit(data:any){
  this.isedit=true;
 this.editStaffForm.setValue(data);
  
}

  editStaff(){
    
     this.maintainceService.editStaff(this.editStaffForm.value).subscribe(
      responce=>{
        console.log(responce);
        this.isedit=false;
        this.viewStaff();
      }
     )
  }

  deleteStaff(data:any){
    this.maintainceService.deleteStaffData(data).subscribe(
      responce=>{
        console.log(responce);
        if(responce){
          alert("your data is deleted");
          this.viewStaff();
        }else{
          alert("someThing went wrong")
        }
      }
    )
  }


  iswork:boolean=false;

  assigeWork(){
    this.router.navigateByUrl("/admin/workassign")
    this.istable=false;
 this.iswork=true;
    
  }



}
