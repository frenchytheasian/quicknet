package com.sparc.quicknet.models;

import lombok.Getter;
import lombok.AllArgsConstructor;

@Getter
@AllArgsConstructor
public class Recruiter{
    String firstName;
    String lastName;
    String email;
    String phone;
    Company company;
    String position;
}
