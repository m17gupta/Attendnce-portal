import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MaintainceService } from '../maintaince.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  constructor(private maintainceservice:MaintainceService) { }

  ngOnInit(): void {
  }

  staffForm= new FormGroup({
    name: new FormControl(''),
    staffEmail: new FormControl(''),
    phoneNo: new FormControl(''),
    password: new FormControl(''),
    status: new FormControl('')
  })


  addStaff(){
    this.maintainceservice.addStaff(this.staffForm.value).subscribe(
      responce=>{
        console.log(responce);
      }
    )

  }
}
