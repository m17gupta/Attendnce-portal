import { Component, OnInit } from '@angular/core';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-staff-main',
  templateUrl: './staff-main.component.html',
  styleUrls: ['./staff-main.component.css']
})
export class StaffMainComponent implements OnInit {

  constructor(private staffService:StaffService) {
    this.getAllroutine();
   }

  ngOnInit(): void {
  }

  staffStatus:any;
  staffName:any;
 routineList:any;
  getAllroutine(){
    this.staffName=localStorage.getItem('staffName');
    this.staffStatus=localStorage.getItem('staffStatus');
  this.staffService.getAllRoutine().subscribe(
    responce=>{
      console.log(responce);
      this.routineList=responce;
    }
  )
  }
 addentance:any;
  status(data:any){
    this.addentance=data;
    console.log(this.addentance);

  }

  save(data:any){
    this.staffService.updateAddentance(data,this.addentance).subscribe(
      responce=>{
        console.log(responce);
        if(responce!=null){
          alert("Attendance Updated");
        }
      }
    )
    
  }
}
