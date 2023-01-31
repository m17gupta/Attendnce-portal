import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MaintainceService {

  constructor( private httCilent:HttpClient) { }

  name:any;
adminEmail:any;
  baseURL="http://localhost:9999/maintainece-app/v1";

  register(user:any){
    return this.httCilent.post(this.baseURL+"/register",user);

  }

  login(user1:any){
    return this.httCilent.post(this.baseURL+"/login",user1);
    
  }

  addStaff(staff:any){
    return this.httCilent.post(this.baseURL+"/add-staff/"+localStorage.getItem('email'),staff);
  }


   editStaff(staff2:any){
    return this.httCilent.put(this.baseURL+"/edit-staff-data/"+localStorage.getItem('email'),staff2)
   }
  getListOdStaff(){
    return this.httCilent.get(this.baseURL+"/get-list-of-staff/"+localStorage.getItem('email'));
  }

  deleteStaffData(staff3:any){
    return this.httCilent.delete(this.baseURL+"/delete/"+localStorage.getItem('email')+"/"+staff3);


  }

  getRoutineWithTime(semail:any,time:any){
    return this.httCilent.get(this.baseURL+"/get-routine-time/"+localStorage.getItem('email')+"/"+semail+"/"+time);
  }


  addRoutine(work:any,staffEmail:any){
    return this.httCilent.post(this.baseURL+"/add-routine/"+localStorage.getItem('email')+"/"+staffEmail,work);
  }
}

