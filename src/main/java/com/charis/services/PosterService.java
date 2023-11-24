package com.charis.services;

import java.nio.file.Path;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.charis.entities.Message;
import com.charis.entities.Poster;
import com.charis.entities.User;
import com.charis.entities.dto.ImageDTO;
import com.charis.entities.dto.MessageDTO;
import com.charis.repository.MessageRep;
import com.charis.repository.PosterRep;
import com.charis.repository.UserRep;
import com.charis.services.exception.ObjectNotFoundException;
import com.charis.storage.service.SystemStorageService;

@Service
public class PosterService implements BaseCrud<Poster>{
	
	@Autowired
	private PosterRep rep;
	
	@Autowired
	private MessageRep repM;
	
	@Autowired
	private UserService serviceUser;
	
	@Autowired
	private SystemStorageService storageService;
	
	
	public PosterService(PosterRep repo) {
		this.rep = repo;
	}

	@Override
	public List<Poster> findAll() {
		return rep.findAll();
	}	
	
	@Override
	public Poster findById(String id) {
		Optional<Poster> opt = rep.findById(id);
		return opt.orElseThrow(() -> new ObjectNotFoundException("Id not found:" + id));
	}
		
	@Override
	public void update(Poster poster, String id) {
		Poster p = findById(id);
		p.update(poster);
		rep.save(poster);
	}
	
	@Override
	public Poster insert(Poster poster) {
		rep.save(poster);
		return poster;
	}
	
	@Override
	public void deleteById(String id) {
		Poster poster = findById(id);
		rep.delete(poster);
	}	
	
	@Override
	public void deleteAll() {
		rep.deleteAll();
	}
	
	
	public Message findMsgById(String id) {
		Optional<Message> opt = repM.findById(id);
		return opt.orElseThrow(() -> new ObjectNotFoundException("Id not found:" + id));
	}

	
	public void uploadFoto(MultipartFile file, String id) {
		
		Path newPhoto = storageService.insert(file).normalize();
		Poster p = findById(id);
		
		p.setPhoto(new ImageDTO(
				file.getOriginalFilename(), 
				newPhoto.toString()));
		
		rep.save(p);
		
		System.out.println(p.getPhoto());
	}
	
	public Resource getFoto(String id) {
		
		Poster p = findById(id);
	
		if(p.getPhoto() != null)
			return storageService.loadResource(p.getPhoto().getPath());
		else
			return storageService.loadResource("");	
	}
	

	public Message insertMsg(MessageDTO msg) {
		
		User user = serviceUser.findById(msg.getIdAutor());
		Poster poster = findById(msg.getIdPoster());
		msg.setIdPoster(poster.getId());
		
		Message newMsg = repM.save(msg.newMessage(user));
		
		System.out.println(newMsg);
		
		if(msg.getIdPoster() == poster.getId()) {
			poster.getMessages().add(newMsg);
			rep.save(poster);
			return newMsg;
		} else
			throw new ObjectNotFoundException("Message not compatible id poster");

	}



	
}
