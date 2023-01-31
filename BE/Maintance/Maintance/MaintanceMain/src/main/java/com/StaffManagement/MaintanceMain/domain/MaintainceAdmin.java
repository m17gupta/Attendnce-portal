package com.StaffManagement.MaintanceMain.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Document
public class MaintainceAdmin {
    @Id
   private  String emailId;
    private String name,phone,address,password;
    List<Staff> staffList;


}
