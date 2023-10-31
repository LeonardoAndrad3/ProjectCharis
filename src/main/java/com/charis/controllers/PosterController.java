package com.charis.controllers;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.charis.entities.Poster;
import com.charis.services.PosterService;

@RestController
@RequestMapping(value = "/poster")
public class PosterController {
	
	
	@Autowired
	private PosterService service;
	
	public PosterController(PosterService repo) {
		this.service = repo;
	}
	
	@CrossOrigin(origins = "http://localhost:5000")
	@GetMapping
	public ResponseEntity<List<Poster>> all() {
		return ResponseEntity.ok().body(service.findAll());
	}	
		
	@GetMapping("/{id}")
	public ResponseEntity<Poster> findById(@PathVariable String id) {
		return ResponseEntity.ok().body(service.findById(id));
	}
	
	@PostMapping
	public ResponseEntity<Void> add(@RequestBody Poster poster) {
		poster = service.save(poster);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(poster.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Poster> update(@PathVariable String id, @RequestBody Poster poster){
		poster = service.update(poster, id);
		return ResponseEntity.ok().body(poster);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> remove(@PathVariable String id){
		service.delete(id);
		return ResponseEntity.noContent().build();
	}
	

}
