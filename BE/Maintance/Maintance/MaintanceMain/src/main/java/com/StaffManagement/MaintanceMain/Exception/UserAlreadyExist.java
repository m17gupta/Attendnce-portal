package com.StaffManagement.MaintanceMain.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code= HttpStatus.ALREADY_REPORTED, reason = "User Already Exists")
public class UserAlreadyExist extends Exception{
}
