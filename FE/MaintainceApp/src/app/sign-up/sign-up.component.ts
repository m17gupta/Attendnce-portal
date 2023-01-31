import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MaintainceService } from '../maintaince.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private router:Router,private maintainceService:MaintainceService) { }

  ngOnInit(): void {
  }

  


  signUpForm= new FormGroup({
    name:new FormControl(''),
    emailId: new FormControl(''),
    phone:new FormControl(''),
    address: new FormControl(''),
    password: new FormControl('')
  })

  signup(){
    this.maintainceService.register(this.signUpForm.value).subscribe(
      responce=>{
        console.log(responce);
        if(responce!=null){
          alert("You are Register sucessfully");
          this.router.navigateByUrl("/dashboard/login");
        } else{
          alert("some went wrong Plaese try again");
          
        }
      }
    )
  }
}
