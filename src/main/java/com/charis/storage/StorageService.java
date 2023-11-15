package com.charis.storage;

import java.io.Serializable;
import java.nio.file.Path;
import java.util.stream.Stream;

import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

public interface StorageService extends Serializable{

	void init();
	
	Path insert(MultipartFile file);
	
	Stream<Path> loadAll();
	
	Path load(String fileName);
	
	Resource loadResource(String fileName);
	
	void deleteAll();
	
}
