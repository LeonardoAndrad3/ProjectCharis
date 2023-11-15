package com.charis.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.charis.entities.User;
import com.charis.repository.UserRep;
import com.charis.services.exception.ObjectNotFoundException;

@Service
public class UserService implements BaseCrud<User>{
	
	
	@Autowired
	private UserRep rep;
	
	
	public User insert(User user) {
		return rep.save(user);
	}
	
	public List<User> findAll() {
		return rep.findAll();
	}
	
	public User findById(String id) {
		Optional<User> opt = rep.findById(id);
		return opt.orElseThrow(()-> new ObjectNotFoundException("Id: "+ id + " not found" ));
	}
	
	public void update(User user, String id) {
		User userUp = findById(id);
		userUp.updade(user);
		rep.save(userUp);
	}
	
	public void deleteById(String id) {
		User user = findById(id);
		rep.deleteById(id);
	}
	
	public void deleteAll(){
		rep.deleteAll();
	}

}
