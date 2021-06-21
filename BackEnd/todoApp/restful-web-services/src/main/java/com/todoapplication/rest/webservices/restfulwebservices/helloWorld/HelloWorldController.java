package com.todoapplication.rest.webservices.restfulwebservices.helloWorld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController //tells app that this is controller
@CrossOrigin(origins = "http://localhost:4200") //tells springboot that req from 4200 should be accepted
public class HelloWorldController {
	
	//@RequestMapping(method = RequestMethod.GET, path = "/helloworld")
	@GetMapping(path = "/helloworld")
	public String helloWorld() {
		return "Hello World";
	}
	
	@GetMapping(path = "/helloworldBean")
	public HelloWorldBean helloWorldBean() {
		return new HelloWorldBean("Hello World Bean");
	}

	//helloworld/{pathvariable}
	@GetMapping(path = "/helloworld/path-variable/{name}")
	public HelloWorldBean helloWorldName(@PathVariable String name) {
		
		 //throw new RuntimeException("Something went wrong");
		return new HelloWorldBean(String.format("Hello World %s",name));
	}
}
