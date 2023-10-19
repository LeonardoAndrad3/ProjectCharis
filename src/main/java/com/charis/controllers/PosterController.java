package com.charis.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.charis.entities.Poster;
import com.charis.repository.PosterRep;

@RestController
@RequestMapping(value = "/poster")
public class PosterController {
	
	@Autowired
	private PosterRep repo;
	
	public PosterController(PosterRep repo) {
		this.repo = repo;
	}

	@GetMapping
	public List<Poster> all() {
		return repo.findAll();
	}	
		
	@PostMapping
	public void add(@RequestBody Poster poster) {
		repo.save(poster);
	}
}
