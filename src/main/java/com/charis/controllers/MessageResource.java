package com.charis.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.charis.entities.Message;
import com.charis.services.MessageService;

@RestController
@RequestMapping(value = "/message")
public class MessageResource {
	
	@Autowired
	private MessageService service;
	
	@GetMapping("/{id}")
	public ResponseEntity<Message> findById(@PathVariable String id){
		return ResponseEntity.ok().body(service.findById(id));
	}
	
	@GetMapping
	public ResponseEntity<List<Message>> findAll(){
		return ResponseEntity.ok().body(service.findAll());
	}
	

}
