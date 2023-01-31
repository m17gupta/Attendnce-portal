import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MaintainceService } from '../maintaince.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private maintainceService:MaintainceService) { }

  ngOnInit(): void {
  }

  loginForm= new FormGroup({
    emailId:new FormControl(''),
   password: new FormControl('')
  })

  user:any;
  adminEmail:any;
   login(){
    this.maintainceService.login(this.loginForm.value).subscribe(
      responce=>{
        console.log(responce);
        this.user=responce;
       this.adminEmail=this.user.emailId;
       localStorage.setItem('email',this.adminEmail);
    
        if(responce!=null){
          alert("you are login successfully");
          this.router.navigateByUrl("/admin/adminhome")
        }
        else {
          alert("Either password or username is wrong .Please Try again ")
        }
      }
    )

   }
}
