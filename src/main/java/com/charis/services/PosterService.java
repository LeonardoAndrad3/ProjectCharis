package com.charis.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.charis.entities.Message;
import com.charis.entities.Poster;
import com.charis.repository.MessageRep;
import com.charis.repository.PosterRep;
import com.charis.services.exception.ObjectNotFoundException;

@Service
public class PosterService {
	
	@Autowired
	private PosterRep rep;
	
	@Autowired
	private MessageRep repM;
	
	
	public PosterService(PosterRep repo) {
		this.rep = repo;
	}

	public List<Poster> findAll() {
		return rep.findAll();
	}	
	
	public Poster findById(String id) {
		Optional<Poster> opt = rep.findById(id);
		return opt.orElseThrow(() -> new ObjectNotFoundException("Id not found:" + id));
	}
	
	public Message findMsgById(String id) {
		Optional<Message> opt = repM.findById(id);
		return opt.orElseThrow(() -> new ObjectNotFoundException("Id not found:" + id));
	}
		
	public Poster insert(@RequestBody Poster poster) {
		rep.save(poster);
		return poster;
	}
	
	public Poster update(@RequestBody Poster poster, String id) {
		Poster p = findById(id);
		p.update(poster);
		rep.save(poster);
		return poster;
	}
	
	public Poster delete(String id) {
		Poster poster = findById(id);
		rep.delete(poster);
		return poster;
	}	
	
	public Message insertMsg(@RequestBody Message msg, String id) {
		System.out.println(msg);
		Poster poster = findById(id);
		msg.setIdPoster(poster.getId());
		Message newMsg = repM.save(msg);
		
		if(msg.getIdPoster() == poster.getId()) {
			poster.getMessages().add(newMsg);
			rep.save(poster);
			return newMsg;
		} else
			throw new ObjectNotFoundException("Message not compatible id poster");

	}
}
