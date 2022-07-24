package com.sparc.quicknet.repository;
import static com.mongodb.client.model.Filters.eq;

import com.sparc.quicknet.models.Event;
import org.bson.Document;
import org.bson.conversions.Bson;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.Projections;


public class MongoFunctions {
    public static void findOne() {
        String uri = "mongodb+srv://fortnite:BruHbabaJ76$@quicknet.z29dg.mongodb.net/?retryWrites=true&w=majority";

        try (MongoClient mongoClient = MongoClients.create(uri)) {
            MongoDatabase database = mongoClient.getDatabase("QuickNet");
            MongoCollection<Document> collection = database.getCollection("companies");
            Bson projectionFields = Projections.fields(
                    Projections.include("name"),
                    Projections.excludeId());
            Document doc = collection.find(eq("name", "PINATA"))
                    .projection(projectionFields)
                    .first();
            if (doc == null) {
                System.out.println("No results found.");
            } else {
                System.out.println(doc.toJson());
            }
        } catch (Exception e) {
            System.out.println(e);
        }
    }

    public static String eventFromId(String id) {
        MongoCollection<Document> collection = mongoCollection("events");

        //TODO: Add extra fields
        Bson projectionFields = Projections.fields(
                Projections.include("location", "date", "time", "companies"));
        Document doc = collection.find(eq("_id", id))
                .projection(projectionFields)
                .first();

        return(doc.toJson().toString());
    }

    public static String companyFromId(String id) {
        MongoCollection<Document> collection = mongoCollection("companies");

        //TODO: Add extra fields
        Bson projectionFields = Projections.fields(
                Projections.include("name", "bio", "hiring_link"));
        Document doc = collection.find(eq("_id", id))
                .projection(projectionFields)
                .first();

        return(doc.toJson().toString());
    }

    public static MongoCollection<Document> mongoCollection(String collectionName) {
        String uri = "mongodb+srv://fortnite:BruHbabaJ76$@quicknet.z29dg.mongodb.net/?retryWrites=true&w=majority";

        try (MongoClient mongoClient = MongoClients.create(uri)) {
            MongoDatabase database = mongoClient.getDatabase("QuickNet");
            MongoCollection<Document> collection = database.getCollection(collectionName);
            return collection;
        } catch (Exception e) {
            throw(e);
        }
    }
}
