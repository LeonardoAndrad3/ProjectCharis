package com.charis.resources;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.charis.entities.Message;
import com.charis.entities.Poster;
import com.charis.entities.dto.MessageDTO;
import com.charis.services.PosterService;

@RestController
@RequestMapping(value = "/poster")
public class PosterResource {
	
	
	@Autowired
	private PosterService service;

	
	public PosterResource(PosterService repo) {
		this.service = repo;
	}
	
	@GetMapping
	public ResponseEntity<List<Poster>> all() {
		return ResponseEntity.ok().body(service.findAll());
	}	
		
	@GetMapping("/{id}")
	public ResponseEntity<Poster> findById(@PathVariable String id) {
		return ResponseEntity.ok().body(service.findById(id));
	}
	
	@GetMapping("/{id}/message")
	public ResponseEntity<List<Message>> findMessage(@PathVariable String id){
		return ResponseEntity.ok().body(service.findById(id).getMessages());
	}
	
	@PostMapping
	public ResponseEntity<Void> add(@RequestBody Poster poster) {
		poster = service.insert(poster);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(poster.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}
	
	@PostMapping(value = {"/{id}"}, consumes = {"multipart/form-data"})
	public ResponseEntity<Void> add(@RequestParam MultipartFile file, @RequestParam String id) {
		service.uploadFoto(file, id);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(file.getOriginalFilename()).toUri();
		return ResponseEntity.created(uri).build();
	}
	
	@GetMapping("/{id}/photo")
	public ResponseEntity<Resource> getPhoto(@RequestParam String id){
		Resource img = service.getFoto(id);
		return ResponseEntity.ok().body(img);	
	}
	
	@PostMapping("/{id}/message")
	public ResponseEntity<Message> addMessage(@RequestBody MessageDTO msg) {
		Message message = service.insertMsg(msg);
//		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}/message").buildAndExpand(msg.getId()).toUri();
		return ResponseEntity.ok().body(message);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Void> update(@PathVariable String id, @RequestBody Poster poster){
		service.update(poster, id);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(poster.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> remove(@PathVariable String id){
		service.deleteById(id);
		return ResponseEntity.noContent().build();
	}
	

}
