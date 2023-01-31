package com.StaffManagement.MaintanceMain.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class Staff {
    @Id
    private String staffEmail;
    private String name,password,phoneNo,status;
    List<Routing> routinglist;

}
