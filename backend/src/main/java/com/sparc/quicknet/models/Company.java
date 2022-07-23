package com.sparc.quicknet.models;

import lombok.Getter;
import lombok.AllArgsConstructor;

import java.util.ArrayList;

@Getter
@AllArgsConstructor
public class Company {
    Address address;
    String email;
    String phone;
    String description;
    String jobListing;
    ArrayList<Recruiter> recruiters;
}
