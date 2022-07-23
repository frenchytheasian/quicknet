package com.sparc.quicknet.models;

import lombok.Getter;
import lombok.AllArgsConstructor;

@Getter
@AllArgsConstructor
public class Address {
    String buildingNumber;
    String street;
    String city;
    String state;
    String zip;
}
