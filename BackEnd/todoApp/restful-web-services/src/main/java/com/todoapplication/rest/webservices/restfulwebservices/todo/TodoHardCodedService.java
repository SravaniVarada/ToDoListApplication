package com.todoapplication.rest.webservices.restfulwebservices.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoHardCodedService {

	private static List<Todo> todos = new ArrayList();
	private static long counter = 0;

	static {
		todos.add(new Todo(++counter, "Sravs", "Learn to paint", "true", new Date()));
		todos.add(new Todo(++counter, "Sravs", "Sing a song", "false", new Date()));
		todos.add(new Todo(++counter, "Sravs", "Develope a webapp", "true", new Date()));
		todos.add(new Todo(++counter, "Sravs", "Cook a lot", "false", new Date()));
		todos.add(new Todo(++counter, "Sravs", "Have good sleep", "true", new Date()));
		todos.add(new Todo(++counter, "Sravs", "Be kind", "true", new Date()));

	}

	public List<Todo> findAll(String username) {
		return todos;
	}

	public Todo deleteById(long id) {
		Todo todo = findById(id);
		if (todo == null)
			return null;
		if (todos.remove(todo)) {
			return todo;
		}
		return null;
	}

	public Todo findById(long id) {

		for (Todo todo : todos) {
			if (todo.getId() == id)
				return todo;
		}
		return null;
	}

	public Todo save(Todo todo) {
		
		if(findById(todo.getId()) == null)
		todo.setId(++counter);

		if (todo.getId() == -1 ||todo.getId() == 0) {
			todo.setId(++counter);
			todos.add(todo);
		} else {
			if(findById(todo.getId()) != null)
			deleteById(todo.getId());
			
			todos.add(todo);
		}
		return todo;

	}
}
