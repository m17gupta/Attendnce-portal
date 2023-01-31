package com.StaffManagement.MaintanceMain.controller;

import com.StaffManagement.MaintanceMain.domain.Routing;
import com.StaffManagement.MaintanceMain.domain.Staff;
import com.StaffManagement.MaintanceMain.service.StaffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.management.relation.RoleUnresolved;

@RestController
@RequestMapping("/routine-app/v2")
public class StaffController {

    @Autowired
    private StaffService staffService;

    @GetMapping("/get-all-admin")
    public ResponseEntity<?> getAllAdmin(){
        return new ResponseEntity<>(staffService.getAllAdmin(), HttpStatus.OK);
    }

    @PostMapping("/staff-login/{adminEmail}")
    public ResponseEntity<?> staffLogin(@RequestBody Staff staff,@PathVariable String adminEmail){
        return new ResponseEntity<>(staffService.staffLogin(adminEmail, staff.getStaffEmail(), staff.getPassword()),HttpStatus.OK);
    }


    @GetMapping("/staff-routine/{adminEmail}/{staffEmail}")
    public  ResponseEntity<?> getAllRoutine(@PathVariable String adminEmail, @PathVariable String staffEmail){
        return  new ResponseEntity<>(staffService.getAllRoutine(staffEmail,adminEmail),HttpStatus.OK);
    }

    @PutMapping("/update-attendance/{adminEmail}/{staffEmail}/{status}")
    public ResponseEntity<?> updateAttendance(@PathVariable String adminEmail, @PathVariable String staffEmail, @PathVariable String status, @RequestBody Routing routine){
        return new ResponseEntity<>(staffService.updateRouting(routine,staffEmail,adminEmail,status),HttpStatus.OK);
    }
}
