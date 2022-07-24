package com.sparc.quicknet;

import com.sparc.quicknet.repository.MongoFunctions;
import com.sparc.quicknet.service.QuicknetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories
public class QuicknetApplication {

	public static void main(String[] args) {
		SpringApplication.run(QuicknetApplication.class, args);
//		System.out.println((MongoFunctions.eventsForUser("62dc756de4320b94f56971d9")));
////		System.out.println(MongoFunctions.returnCollection("events"));
//		MongoFunctions.eventsForUser("62dc756de4320b94f56971d9");
	}

}
