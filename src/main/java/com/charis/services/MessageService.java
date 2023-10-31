package com.charis.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.charis.entities.Message;
import com.charis.entities.Poster;
import com.charis.repository.MessageRep;
import com.charis.services.exception.ObjectNotFoundException;

@Service
public class MessageService {

	
	@Autowired
	private MessageRep rep;

	public MessageService(MessageRep repo) {
		this.rep = repo;
	}

	public List<Message> findAll() {
		return rep.findAll();
	}	
	
	public Message findById(String id) {
		Optional<Message> opt = rep.findById(id);
		return opt.orElseThrow(() -> new ObjectNotFoundException("Id not found:" + id));
	}
		
	public Message save(@RequestBody Message msg) {
		rep.save(msg);
		return msg;
	}
	
	public Message update(@RequestBody Message msg, String id) {
		Message p = findById(id);
		update(p, msg);
		rep.save(msg);
		return msg;
	}
	
	private void update(Message main, Message changer) {
		main.update(changer);
	}
	
	public Message delete(String id) {
		Message msg = findById(id);
		rep.delete(msg);
		return msg;
	}	
}
