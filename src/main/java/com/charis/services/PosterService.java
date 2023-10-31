package com.charis.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.charis.entities.Poster;
import com.charis.repository.PosterRep;
import com.charis.services.exception.ObjectNotFoundException;

@Service
public class PosterService {

	
	@Autowired
	private PosterRep rep;

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
		
	public Poster save(@RequestBody Poster poster) {
		rep.save(poster);
		return poster;
	}
	
	public Poster update(@RequestBody Poster poster, String id) {
		Poster p = findById(id);
		update(p, poster);
		rep.save(poster);
		return poster;
	}
	
	private void update(Poster main, Poster changer) {
		main.update(changer);
	}
	
	public Poster delete(String id) {
		Poster poster = findById(id);
		rep.delete(poster);
		return poster;
	}	
}
