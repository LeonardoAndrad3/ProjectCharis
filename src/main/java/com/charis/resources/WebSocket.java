package com.charis.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import com.charis.entities.Message;
import com.charis.entities.dto.MessageDTO;
import com.charis.services.PosterService;

@Controller
public class WebSocket {
	
	@Autowired
	private PosterService service;
	
	@MessageMapping("/message")
	@SendTo("/chat")
	 public Message message(MessageDTO msg){
		
		Message newM = service.insertMsg(msg);
		
		return newM;
	 }
	
	
}
	

