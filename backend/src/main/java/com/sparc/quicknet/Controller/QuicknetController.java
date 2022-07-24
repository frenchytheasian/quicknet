package com.sparc.quicknet.Controller;

import com.sparc.quicknet.service.QuicknetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class QuicknetController implements BaseController{

    private final QuicknetService quickService;

    @Autowired
    public QuicknetController (QuicknetService quickService) { this.quickService = quickService; }

    @GetMapping("/retrieveHelloWorld")
    public ResponseEntity<String> retrieveHelloWorld () {
        ResponseEntity<String> response = (ResponseEntity<String>) respond("Hello Michael");

        return response;
    }

    @GetMapping("/retrieveCollection/{collection}")
    public ResponseEntity<String> retrieveEvents (@PathVariable("collection") String collection) {
        ResponseEntity<String> response = (ResponseEntity<String>) respond(QuicknetService.quicknetService(collection));

        return response;
    }
}
