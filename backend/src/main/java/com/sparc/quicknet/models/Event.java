package com.sparc.quicknet.models;

import lombok.Getter;
import lombok.AllArgsConstructor;

import java.util.Date;

@Getter
@AllArgsConstructor
public class Event {
    String name;
    String location;
    Date date;
}
