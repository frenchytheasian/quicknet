package com.sparc.quicknet.models;

import lombok.Getter;
import lombok.AllArgsConstructor;

import java.io.File;


@Getter
@AllArgsConstructor
public class Attendee {
    String firstName;
    String lastName;
    String email;
    String phone;
    String company;
    String school;
    File resume;
}
