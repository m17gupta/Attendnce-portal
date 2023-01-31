package com.StaffManagement.MaintanceMain.service;

import com.StaffManagement.MaintanceMain.domain.MaintainceAdmin;
import com.StaffManagement.MaintanceMain.domain.Routing;
import com.StaffManagement.MaintanceMain.domain.Staff;

import java.util.List;

public interface StaffService {
  public abstract  List<MaintainceAdmin> getAllAdmin();
    public abstract Staff staffLogin(String adminEmail,String userName, String password);

    public abstract List<Routing>  getAllRoutine(String staffMail,String adminMail);

    public abstract  Routing updateRouting( Routing work,String staffEmail, String adminEmail,String Status);
}
