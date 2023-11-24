package com.charis.entities.dto;

import java.io.Serializable;
import java.util.Date;

import org.springframework.data.mongodb.core.mapping.Document;

import com.charis.entities.Message;
import com.charis.entities.User;

@Document
public class MessageDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private String idAutor;
	private String message;
	private Date date = new Date();
	private String idPoster;
	
	public MessageDTO(String autor, String message, String idPoster) {
		this.idAutor = autor;
		this.message = message;
		this.idPoster = idPoster;
	}

	public MessageDTO() {
	}

	public String getIdAutor() {
		return idAutor;
	}

	public void setIdAutor(String idAutor) {
		this.idAutor = idAutor;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getIdPoster() {
		return idPoster;
	}

	public void setIdPoster(String idPoster) {
		this.idPoster = idPoster;
	}

	public Message newMessage(User autor) {
		return new Message(autor, this.message, this.date, this.idPoster);
	}

	@Override
	public String toString() {
		return "MessageDTO [idAutor=" + idAutor + ", message=" + message + ", date=" + date + ", idPoster=" + idPoster
				+ "]";
	}

	
	
	
	
	
}
