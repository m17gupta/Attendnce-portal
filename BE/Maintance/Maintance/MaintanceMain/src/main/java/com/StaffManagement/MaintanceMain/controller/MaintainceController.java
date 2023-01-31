package com.StaffManagement.MaintanceMain.controller;

import com.StaffManagement.MaintanceMain.Exception.UserAlreadyExist;
import com.StaffManagement.MaintanceMain.Exception.UserNotFound;
import com.StaffManagement.MaintanceMain.domain.MaintainceAdmin;
import com.StaffManagement.MaintanceMain.domain.Routing;
import com.StaffManagement.MaintanceMain.domain.Staff;
import com.StaffManagement.MaintanceMain.service.MaintanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/maintainece-app/v1")
public class MaintainceController {

    @Autowired
    private MaintanceService maintanceService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody MaintainceAdmin user1) throws UserAlreadyExist {
     return new ResponseEntity<>(maintanceService.register(user1),HttpStatus.OK);
    }
// http://localhost:9999/maintainece-app/v1/register
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody MaintainceAdmin user2) throws UserNotFound{
        try{
            return new ResponseEntity<>(maintanceService.Login(user2.getEmailId(), user2.getPassword()),HttpStatus.OK);
        }catch( UserNotFound ex){
            throw new UserNotFound();
        }
    }

    @GetMapping("/get-list-of-staff/{adminEmail}")

    public ResponseEntity<?> getAllStaffList(@PathVariable String adminEmail){
        return new ResponseEntity<>(maintanceService.getAllStaffList(adminEmail),HttpStatus.OK);
    }

    @PostMapping("/add-staff/{adminEmail}")
    public ResponseEntity<?> addStaff( @PathVariable String adminEmail,@RequestBody Staff staff) {
        return new ResponseEntity<>(maintanceService.addStaff(adminEmail,staff),HttpStatus.OK);
    }

    @PutMapping("/edit-staff-data/{adminEmail}")
    public ResponseEntity<?> editStaffData(@RequestBody Staff staff, @PathVariable String adminEmail){
        return  new ResponseEntity<>(maintanceService.updateStaffData(staff,adminEmail), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{adminEmail}/{staffId}")
    public  ResponseEntity<?> deleteStaff( @PathVariable String adminEmail,@PathVariable String staffId){
        return new ResponseEntity<>(maintanceService.delete(adminEmail,staffId),HttpStatus.OK)
;    }

    @PostMapping("/add-routine/{adminEmail}/{staffmail}")
    public ResponseEntity<?> addRoutine(@PathVariable String adminEmail,@PathVariable String staffmail, @RequestBody Routing work){
        return new ResponseEntity<>(maintanceService.addRoutine(work,adminEmail,staffmail),HttpStatus.OK);
    }

    @GetMapping("get-routine-time/{adminEmail}/{staffmail}/{time}")
    public ResponseEntity<?> getRoutineWithTime(@PathVariable String adminEmail,@PathVariable String staffmail,@PathVariable
                                                String time){
        return new ResponseEntity<>(maintanceService.getRoutineBasedOnTime(adminEmail,staffmail,time),HttpStatus.OK);
    }
}
