package com.StaffManagement.MaintanceMain.service;

import com.StaffManagement.MaintanceMain.domain.MaintainceAdmin;
import com.StaffManagement.MaintanceMain.domain.Routing;
import com.StaffManagement.MaintanceMain.domain.Staff;
import com.StaffManagement.MaintanceMain.repository.MaintainceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StaffServiceImpl implements  StaffService {

    @Autowired
    private MaintainceRepository maintainceRepository;

    @Override
    public List<MaintainceAdmin> getAllAdmin() {
        return maintainceRepository.findAll();
    }

    @Override
    public Staff staffLogin(String adminEmail,String userName, String password) {
        MaintainceAdmin admin= maintainceRepository.findById(adminEmail).get();
        List<Staff >staffList=admin.getStaffList();
        Staff staff=staffList.stream().filter(i->i.getStaffEmail().equalsIgnoreCase(userName)).findAny().get();
        if(staff.getPassword().equalsIgnoreCase(password)){
            return staff;
        }else {
            return null;
        }

    }

    @Override
    public List<Routing> getAllRoutine(String staffMail,String adminMail) {
        MaintainceAdmin admin= maintainceRepository.findById(adminMail).get();
        List<Staff >staffList=admin.getStaffList();
        Staff staff=staffList.stream().filter(i->i.getStaffEmail().equalsIgnoreCase(staffMail)).findAny().get();
        List<Routing> routingList= staff.getRoutinglist();
        return routingList;

    }

    @Override
    public Routing updateRouting(Routing work,String staffEmail,String adminEmail,String Status) {
        MaintainceAdmin admin= maintainceRepository.findById(adminEmail).get();
        List<Staff >staffList=admin.getStaffList();
        Staff staff=staffList.stream().filter(i->i.getStaffEmail().equalsIgnoreCase(staffEmail)).findAny().get();
        List<Routing> routingList= staff.getRoutinglist();
        Routing prevoiuswork=routingList.stream().filter(i->i.getTime().equalsIgnoreCase(work.getTime())).findAny().get();
        prevoiuswork.setAttendance(Status);

        maintainceRepository.save(admin);
        return work;
    }
}
