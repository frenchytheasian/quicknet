package com.sparc.quicknet.service;

import com.sparc.quicknet.models.Company;
import com.sparc.quicknet.models.Recruiter;
import com.sparc.quicknet.repository.MongoConnection;
import com.sparc.quicknet.repository.MongoFunctions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import com.mongodb.*;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.Filters;

import com.mongodb.client.model.UpdateOptions;
import com.mongodb.client.result.*;
import org.bson.Document;
import org.bson.types.ObjectId;

import java.util.List;
import java.util.Arrays;
import java.util.ArrayList;

import static com.mongodb.client.model.Filters.*;
import static com.mongodb.client.model.Updates.*;
@Service
@Component
public class QuicknetService {

    public static QuicknetService quickService = new QuicknetService();

    /**
     * Main service method
     */
    public static String quicknetService(String collectionName) {
        String result = (MongoFunctions.returnCollection(collectionName));

        return result;
    }

}
