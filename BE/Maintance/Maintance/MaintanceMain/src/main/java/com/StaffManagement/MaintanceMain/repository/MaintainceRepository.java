package com.StaffManagement.MaintanceMain.repository;

import com.StaffManagement.MaintanceMain.domain.MaintainceAdmin;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MaintainceRepository extends MongoRepository<MaintainceAdmin,String> {
}
