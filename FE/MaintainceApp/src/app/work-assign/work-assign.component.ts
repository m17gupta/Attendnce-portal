import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MaintainceService } from '../maintaince.service';

@Component({
  selector: 'app-work-assign',
  templateUrl: './work-assign.component.html',
  styleUrls: ['./work-assign.component.css']
})
export class WorkAssignComponent implements OnInit {

  constructor(private maintainceService:MaintainceService,
    private router:Router
    ) { this.getListOfStaff()}

  ngOnInit(): void {
  }
staffList:any;
 getListOfStaff(){
  this.maintainceService.getListOdStaff().subscribe(
    responce=>{
      this.staffList=responce;
    }
  )

  }


  
  workForm1= new FormGroup(
    {
      day:new FormControl(''),
      time: new FormControl(''),
      work:new FormControl(''),
      attendance:new FormControl('')
    
    }
  )

  workForm2= new FormGroup(
    {
      name: new FormControl(''),
      day:new FormControl(''),
      time: new FormControl(''),
      work:new FormControl(''),
      attendance:new FormControl('')
    
    }
  )

  workForm3= new FormGroup(
    {
      name: new FormControl(''),
      day:new FormControl(''),
      time: new FormControl(''),
      work:new FormControl(''),
      attendance:new FormControl('')
    
    }
  )

  iswork1:boolean=false;
  iswork2:boolean=false;
  iswork3:boolean=false;

  semail:any;
 stffEmail(data:any){
this.semail=data;
console.log(this.semail);
 }

  subWork1(){
    this.iswork1=true;
  }

  work1(){
    this.workForm1.value.time="10Am-12PM"
    this.maintainceService.addRoutine(this.workForm1.value,this.semail).subscribe(
      responce=>{
        console.log(responce);
        if(responce!=null){
          alert("Work alloted");
          this.iswork1=false;
        }
      }
    )

  }

  time:any;

  stime(data1:any){
    this.time=data1;
    console.log(this.time);
  }
   istable:boolean=false;
  searchRoutine:any;
  showRoutine(){
   this.maintainceService.getRoutineWithTime(this.semail, this.time).subscribe(
    reponce=>{
      console.log(reponce);
      this.searchRoutine=reponce;
      this.istable=true;
    }
   )
  }

  subWork2(){
    this.iswork2=true;
  }

  work2(){
    this.workForm2.value.time="12Pm-2PM"
    this.maintainceService.addRoutine(this.workForm2.value,this.semail).subscribe(
      responce=>{
        console.log(responce);
        if(responce!=null){
          alert("Work alloted");
          this.iswork2=false;
        }
        
      }
    )

  }

  subWork3(){
    this.iswork3=true;
  }

  work3(){
    this.workForm3.value.time="2Pm-4PM"
    this.maintainceService.addRoutine(this.workForm3.value,this.semail).subscribe(
      responce=>{
        console.log(responce);
        if(responce!=null){
          alert("Work alloted");
          this.iswork3=false;
        }

      }
    )

  }
  back(){
    this.router.navigateByUrl("/admin/adminhome")
  }
 
}
