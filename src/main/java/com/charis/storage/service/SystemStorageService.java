package com.charis.storage.service;

import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.util.FileSystemUtils;
import org.springframework.web.multipart.MultipartFile;

import com.charis.repository.ImagesRep;
import com.charis.storage.StorageProperties;
import com.charis.storage.StorageService;
import com.charis.storage.exception.StorageException;
import com.charis.storage.exception.StorageFileException;

@Service
public class SystemStorageService implements StorageService {

	private final Path rootLocation;
	
	@Autowired
	private ImagesRep rep;

	@Autowired
	public SystemStorageService(StorageProperties props) {
		if (props.getLocation().trim().length() == 0) {
			throw new StorageException("Location not exist");
		}

		this.rootLocation = Paths.get(props.getLocation());
		init();
	}

	@Override
	public void init() {
		try {
			if(Files.exists(rootLocation)) {
				return;
			}
			
			Files.createDirectories(this.rootLocation);
			
		} catch(IOException e) {
			throw new StorageException(e.getMessage(), e.getCause());
		}
	}

	@Override
	public Path insert(MultipartFile file) {
		try {

			// Obtendo a pasta final para colocar o arquivo
			// Normalize reduz redundacias de dados e dados não necessários
			// toAbsolutePath pega o endereço absoluto(inteiro) onde o arquivo vai ser
			// inserido
			Path dirFile = this.rootLocation.resolve(Paths.get(file.getOriginalFilename())).normalize()
					.toAbsolutePath();

			if (!dirFile.getParent().equals(this.rootLocation.toAbsolutePath())) {
				throw new StorageException("Cannot store file outside currente directory.");
			}

			// Transferindo o arquivo para o arquivo de destino
			try (InputStream inputStream = file.getInputStream()) {
				Files.copy(inputStream, dirFile, StandardCopyOption.REPLACE_EXISTING);
			}
			
			
			return dirFile;

		} catch (IOException e) {
			throw new StorageException(e.getMessage(), e.getCause());
		}
	}

	@Override
	public Stream<Path> loadAll() {
		
		try {
			return Files.walk(this.rootLocation, 1)
					.filter(
					path -> !path.equals(this.rootLocation))
					.map(this.rootLocation::relativize);
			
		} catch(IOException e) {
			throw new StorageException(e.getMessage(), e.getCause());
		}
	}

	@Override
	public Path load(String fileName) {
		return this.rootLocation
				.resolve(fileName)
				.normalize()
				.toAbsolutePath();
	}

	@Override
	public Resource loadResource(String fileName) {
		try {
			
			Path file = load(fileName);
			
			Resource res = new UrlResource(file.toUri());
			
			if(res.exists() || res.isReadable()) 
				return res;
			else 
				throw new StorageFileException("Could not read file: " + fileName);
					
		} catch(MalformedURLException e) {
			throw new StorageException(e.getMessage(), e.getCause());
		}
	}

	@Override
	public void deleteAll() {
		try {
			FileSystemUtils.deleteRecursively(this.rootLocation);
		} catch (IOException e) {
			throw new StorageException(e.getMessage(), e.getCause());
		}
	}
	
	public Path rootPath() {
		return this.rootLocation;
	}

}
