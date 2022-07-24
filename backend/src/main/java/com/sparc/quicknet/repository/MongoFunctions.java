package com.sparc.quicknet.repository;
import static com.mongodb.client.model.Filters.eq;

import com.mongodb.client.*;
import com.sparc.quicknet.models.Event;
import org.bson.Document;
import org.bson.conversions.Bson;
import com.mongodb.client.model.Projections;

import java.util.ArrayList;
import java.util.Iterator;


public class MongoFunctions{
    public static String returnCollection(String collectionName) {
        String uri = "mongodb+srv://fortnite:BruHbabaJ76$@quicknet.z29dg.mongodb.net/?retryWrites=true&w=majority";
        String response = "";

        try (MongoClient mongoClient = MongoClients.create(uri)) {
            MongoDatabase database = mongoClient.getDatabase("QuickNet");
            MongoCollection<Document> collection = database.getCollection(collectionName);
            FindIterable<Document> iterDoc = collection.find();
            Iterator<Document> it = iterDoc.iterator();
            while (it.hasNext()) {
                response = response + (it.next()).toJson();
            }
            return response;
        } catch (Exception e) {
            throw(e);
        }
    }

    public static String eventsForUser(String userId) {
        String uri = "mongodb+srv://fortnite:BruHbabaJ76$@quicknet.z29dg.mongodb.net/?retryWrites=true&w=majority";
        String response = "";

        try (MongoClient mongoClient = MongoClients.create(uri)) {
            MongoDatabase database = mongoClient.getDatabase("QuickNet");
            MongoCollection<Document> collection = database.getCollection("users");

            Bson projectionFields = Projections.fields(
                    Projections.include("name", "bio", "profile_pic", "linked_in_profile", "events"), Projections.excludeId()
            );

            Document userDoc = collection.find(eq("_id", userId)).first();

            //TODO: grab Event Objects from the name of events

            return response;
        } catch (Exception e) {
            throw(e);
        }
    }

}
