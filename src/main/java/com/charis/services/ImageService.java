package com.charis.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.charis.entities.Image;
import com.charis.repository.ImagesRep;

@Service
public class ImageService implements BaseCrud<Image>{

	@Autowired
	private ImagesRep rep;
	
	@Override
	public Image insert(Image t) {
		rep.save(t);
		return t;
	}

	@Override
	public List<Image> findAll() {
		return rep.findAll();
	}

	@Override
	public Image findById(String id) {
		Optional<Image> opt = rep.findById(id);
		return opt.orElseThrow(() -> new RuntimeException("E"));
	}

	@Override
	public void update(Image t, String id) {
				
	}

	@Override
	public void deleteById(String id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteAll() {
		// TODO Auto-generated method stub
		
	}

	
	
}
