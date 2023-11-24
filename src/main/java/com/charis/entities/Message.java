package com.charis.entities;

import java.io.Serializable;
import java.util.Date;
import java.util.Objects;

import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import jakarta.persistence.Id;

@Document
public class Message implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id
	private String id;
	@DocumentReference
	private User autor;
	private String message;
	private Date date;
	private String idPoster;
	
	public Message(String id, User autor, String message, Date date, String idPoster) {
		this.id = id;
		this.autor = autor;
		this.message = message;
		this.date = date;
		this.idPoster = idPoster;
	}
	
	public Message(User autor, String message, Date date, String idPoster) {
		this.id = null;
		this.autor = autor;
		this.message = message;
		this.date = date;
		this.idPoster = idPoster;
	}

	public Message() {
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getId() {
		return id;
	}

	public User getAutor() {
		return autor;
	}

	public Date getDate() {
		return date;
	}
	
	public void update(Message msg) {
		setMessage(msg.message);
	}
	
	public String getIdPoster() {
		return idPoster;
	}

	public void setIdPoster(String idPoster) {
		this.idPoster = idPoster;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Message other = (Message) obj;
		return Objects.equals(id, other.id);
	}

	@Override
	public String toString() {
		return "Message [id=" + id + ", autor=" + autor + ", message=" + message + ", date=" + date + ", idPoster="
				+ idPoster + "]";
	}
	
	
	
}
