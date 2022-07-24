package com.sparc.quicknet.repository;
import static com.mongodb.client.model.Filters.eq;
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
            MongoCollection<Document> collection = database.getCollection("Companies");
            Bson projectionFields = Projections.fields(
                    Projections.include("title"),
                    Projections.excludeId());
            Document doc = collection.find(eq("name", "QuickNet"))
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
}
