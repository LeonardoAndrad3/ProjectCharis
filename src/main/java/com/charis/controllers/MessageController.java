package com.charis.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.charis.entities.Message;
import com.charis.entities.Poster;
import com.charis.repository.MessageRep;
import com.charis.repository.PosterRep;

@RestController
@RequestMapping(value = "/poster/message")
public class MessageController {
	
	@Autowired
	private MessageRep repo;
	
	public MessageController(MessageRep repo) {
		this.repo = repo;
	}

	@GetMapping
	public List<Message> all() {
		return repo.findAll();
	}	
		
	@PostMapping
	public void add(@RequestBody Message msg) {
		repo.save(msg);
	}
}
