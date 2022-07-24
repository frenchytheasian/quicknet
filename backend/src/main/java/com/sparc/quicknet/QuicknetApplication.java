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
	}

}
