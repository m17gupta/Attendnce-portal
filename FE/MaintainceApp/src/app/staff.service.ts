import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private httpCilent:HttpClient) { }

  baseURl="http://localhost:9999/routine-app/v2";

  getAllAdmin(){
    return this.httpCilent.get(this.baseURl+"/get-all-admin");
  }

  staffLogin(staffData:any){
    return this.httpCilent.post(this.baseURl+"/staff-login/"+localStorage.getItem('adminEmail'),staffData);
  }

  getAllRoutine(){
    return this.httpCilent.get(this.baseURl+"/staff-routine/"+localStorage.getItem('adminEmail')+"/"+localStorage.getItem('staffemail'))
  }

  updateAddentance(data:any,status:any){
     return this.httpCilent.put(this.baseURl+"/update-attendance/"+localStorage.getItem('adminEmail')+"/"+localStorage.getItem('staffemail')+"/"+status,data)
  }
}
