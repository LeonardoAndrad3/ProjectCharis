package com.charis.resources;

import java.nio.file.Path;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.charis.storage.service.SystemStorageService;

@RestController
@RequestMapping("/photos")
public class FileUploadController {

	
	@Autowired
	private SystemStorageService service;
	
	
	
	@GetMapping
	public ResponseEntity<List<Resource>> findAll(){

		List<Resource> res = 
				service.loadAll()
				.filter(img -> img != null)
				.map(img -> 
					service.rootPath()
					.resolve(img.normalize()).toAbsolutePath())
				.map(img -> service.loadResource(img.toString()))
				.toList();
		
		service.loadAll()
		.filter(img -> img != null)
		.forEach(img -> System.out.println(service.loadResource(img.toString())));
		
			
		
		return ResponseEntity.ok().body(res);
	}
	
	
	
	
	
	
	
	
}
