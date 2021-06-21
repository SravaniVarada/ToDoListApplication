package com.todoapplication.rest.webservices.basicAuth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController //tells app that this is controller
@CrossOrigin(origins = "http://localhost:4200") //tells springboot that req from 4200 should be accepted
public class BasicAuthenticationController {
		
	@GetMapping(path = "/basicAuth")
	public AuthenticationBean basicAuthentication() {
		return new AuthenticationBean("You are authenticated");
	}

}
