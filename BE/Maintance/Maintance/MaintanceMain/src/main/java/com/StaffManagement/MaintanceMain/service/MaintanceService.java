package com.StaffManagement.MaintanceMain.service;

import com.StaffManagement.MaintanceMain.Exception.UserAlreadyExist;
import com.StaffManagement.MaintanceMain.Exception.UserNotFound;
import com.StaffManagement.MaintanceMain.domain.MaintainceAdmin;
import com.StaffManagement.MaintanceMain.domain.Routing;
import com.StaffManagement.MaintanceMain.domain.Staff;

import java.util.List;

public interface MaintanceService {

    public  abstract MaintainceAdmin register(MaintainceAdmin register) ;

    public abstract  MaintainceAdmin Login(String userName, String password) throws UserNotFound;

    public abstract  MaintainceAdmin addStaff( String adminEmail,Staff staff);

    public abstract  MaintainceAdmin updateStaffData(Staff staff1, String adminEmail);

    public  abstract List<Staff>  getAllStaffList(String adminEmailId);

    public abstract Staff addRoutine (Routing routine , String adminEmail,String staffEmail);

    public abstract Boolean delete(String adminEmail, String staffId);

    public abstract  List<Routing> getRoutineBasedOnTime(String adminEmail,String staffEmail,String time);

}
