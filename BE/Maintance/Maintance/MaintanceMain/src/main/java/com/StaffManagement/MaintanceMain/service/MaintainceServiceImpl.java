package com.StaffManagement.MaintanceMain.service;

import com.StaffManagement.MaintanceMain.Exception.UserAlreadyExist;
import com.StaffManagement.MaintanceMain.Exception.UserNotFound;
import com.StaffManagement.MaintanceMain.domain.MaintainceAdmin;
import com.StaffManagement.MaintanceMain.domain.Routing;
import com.StaffManagement.MaintanceMain.domain.Staff;
import com.StaffManagement.MaintanceMain.repository.MaintainceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class MaintainceServiceImpl implements  MaintanceService {
    @Autowired
    private MaintainceRepository maintainceRepository;

    @Override
    public MaintainceAdmin register(MaintainceAdmin register) {
        if (maintainceRepository.findById(register.getEmailId()).isPresent()) {
            return null;
        } else {

            ArrayList<Staff> staffArrayList = new ArrayList<>();
            MaintainceAdmin newUser = new MaintainceAdmin();
            newUser.setAddress(register.getAddress());
            newUser.setName(register.getName());
            newUser.setPassword(register.getPassword());
            newUser.setEmailId(register.getEmailId());
            newUser.setPhone(register.getPhone());
            newUser.setStaffList(staffArrayList);

            return maintainceRepository.insert(newUser);
        }
    }

    @Override
    public MaintainceAdmin Login(String userName, String password) throws UserNotFound {

        if (maintainceRepository.findById(userName).isPresent()) {
            MaintainceAdmin user = maintainceRepository.findById(userName).get();
            if (user.getPassword().equalsIgnoreCase(password)) {
                return user;
            } else {
                return null;
            }

        }
        return null;
    }

    @Override
    public MaintainceAdmin addStaff(String adminEmail, Staff staff) {
        if (maintainceRepository.findById(adminEmail).isPresent()) {
            MaintainceAdmin admin = maintainceRepository.findById(adminEmail).get();
            Staff staff1 = new Staff(staff.getStaffEmail(), staff.getName(), staff.getPassword(),
                    staff.getPhoneNo(),staff.getStatus(), new ArrayList<Routing>());
            List<Staff> staffList = admin.getStaffList();
            staffList.add(staff1);

            return maintainceRepository.save(admin);

        } else return null;
    }

    @Override
    public MaintainceAdmin updateStaffData(Staff staff1, String adminEmail) {
        if (maintainceRepository.findById(adminEmail).isPresent()) {
            MaintainceAdmin admin = maintainceRepository.findById(adminEmail).get();
            List<Staff> staffList= admin.getStaffList();
            Staff staff3= staffList.stream().filter(i->i.getStaffEmail().equalsIgnoreCase(staff1.getStaffEmail())).findAny().get();
           if(staff3.getStaffEmail().equalsIgnoreCase(staff1.getStaffEmail())){
               List<Routing> routingList= staff3.getRoutinglist();
               if(routingList!=null){
                   staffList.remove(staff3);
                   Staff editStaff= new Staff(staff1.getStaffEmail(),staff1.getName(),staff1.getPassword(),staff1.getPhoneNo(),
                           staff1.getStatus(),staff1.getRoutinglist());
                   staffList.add(editStaff);
                   return maintainceRepository.save(admin);
               }
               else {
                   staffList.remove(staff3);
                   Staff editStaff= new Staff(staff1.getStaffEmail(),staff1.getName(),staff1.getPassword(),staff1.getPhoneNo(),
                           staff1.getStatus(),new ArrayList<Routing>());
                   staffList.add(editStaff);
                   return maintainceRepository.save(admin);
               }


           }
        }
        return null;
    }

    @Override
    public List<Staff> getAllStaffList(String adminEmailId) {
        if (maintainceRepository.findById(adminEmailId).isPresent()) {
            MaintainceAdmin user = maintainceRepository.findById(adminEmailId).get();
            List<Staff> staffList = user.getStaffList();
            return staffList;
        } else
            return null;
    }

    @Override
    public Staff addRoutine(Routing routine, String adminEmail,String staffEmail) {
        if (maintainceRepository.findById(adminEmail).isPresent()) {
            MaintainceAdmin admin = maintainceRepository.findById(adminEmail).get();
            List<Staff> staffList = admin.getStaffList();
            Staff staff1 = staffList.stream().filter(i -> i.getStaffEmail().equalsIgnoreCase(staffEmail)).findAny().get();
            List<Routing> routineList = staff1.getRoutinglist();

            routineList.add(routine);
            maintainceRepository.save(admin);
            return staff1;
        } else return null;
    }

    @Override
    public  Boolean delete( String adminEmail,String staffId){
        if( maintainceRepository.findById(adminEmail).isPresent()){
            MaintainceAdmin admin= maintainceRepository.findById(adminEmail).get();
             List<Staff> staffList= admin.getStaffList();
             Staff deleteStaff= staffList.stream().filter(i->i.getStaffEmail().equalsIgnoreCase(staffId)).findAny().get();
             staffList.remove(deleteStaff);
             maintainceRepository.save(admin);
             return true;
        }else
            return false;
    }

    @Override
    public List<Routing> getRoutineBasedOnTime(String adminEmail, String staffEmail, String time) {
        if(maintainceRepository.findById(adminEmail).isPresent()){
            MaintainceAdmin admin= maintainceRepository.findById(adminEmail).get();
            List<Staff> staffList= admin.getStaffList();
            Staff staff= staffList.stream().filter(i->i.getStaffEmail().equalsIgnoreCase(staffEmail)).findAny().get();
            List<Routing> routingList= staff.getRoutinglist().stream().filter(i->i.getTime().equalsIgnoreCase(time)).collect(Collectors.toList());
            return routingList;
        }else {
            return null;
        }

    }
}