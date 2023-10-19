package com.charis.config;

import java.util.Arrays;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

import com.charis.entities.Message;
import com.charis.entities.Poster;
import com.charis.entities.User;
import com.charis.repository.MessageRep;
import com.charis.repository.PosterRep;
import com.charis.repository.UserRep;

@Configuration
public class Instantiation implements CommandLineRunner {
	
	@Autowired
	private PosterRep posterRep;
	
	@Autowired
	private MessageRep msgRep;
	
	@Autowired
	private UserRep userRep;

	@Override
	public void run(String... args) throws Exception {
		
		posterRep.deleteAll();
		msgRep.deleteAll();
		userRep.deleteAll();
		
		User u1 = new User(null,"Ivana","479.770.378-40", new Date(), "C:/");
		User u2 = new User(null,"Leonardo","479.770.378-41", new Date(), "C:/leonardo");
		
		userRep.saveAll(Arrays.asList(u1, u2));
	
		Poster p1 = new Poster(null,u1,"leonardo", new Date(), "C:/profissional");
		
		posterRep.save(p1);
		
		Message m1 = new Message(null, u2, "Lindo", new Date());
		Message m2 = new Message(null, u2, "Uau!", new Date());
		
		msgRep.saveAll(Arrays.asList(m1,m2));
		
		p1.getMessages().addAll(Arrays.asList(m1,m2));
		
		posterRep.save(p1);
		
	}
}
