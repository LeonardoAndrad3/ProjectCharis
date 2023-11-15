package com.charis.resources;

import java.io.IOException;
import java.net.URI;
import java.sql.Blob;
import java.sql.SQLException;
import java.util.List;

import javax.sql.rowset.serial.SerialBlob;
import javax.sql.rowset.serial.SerialException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.charis.entities.Image;
import com.charis.services.ImageService;

@RestController
@RequestMapping("/images")
public class ImageResource {
	
	@Autowired
	private ImageService service;
	
	
	@GetMapping
	public ResponseEntity<List<Image>> findAll(){
		

			List<Image> bytes = service.findAll();
					
			return ResponseEntity.ok().body(bytes);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<byte[]> findById(@PathVariable String id){
		
		Image image = service.findById(id);
		
		return ResponseEntity.ok().contentType(MediaType.IMAGE_PNG).body(image.getImage());
	}
	
	@PostMapping
	public ResponseEntity<Void> insert(@RequestParam MultipartFile file) throws IOException, SerialException, SQLException{
		
		byte[] bytes = file.getBytes();
		
		Image image = new Image(bytes);
		
		service.insert(image);
		
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/").buildAndExpand(image.getId()).toUri();
		
		return ResponseEntity.created(uri).build();

	}
	
	
	
	
	

}
