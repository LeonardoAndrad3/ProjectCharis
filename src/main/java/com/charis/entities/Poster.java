package com.charis.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Objects;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import jakarta.persistence.Id;

@Document
public class Poster implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Id
	private String id;

	@DocumentReference
	private User autor;
	private String description;
	private Date date;
	private String photo;

	@DocumentReference
	private List<Message> messages = new ArrayList<>();
	
	public Poster() {
	}

	public Poster(String id, User autor, String description, Date date, String photo) {
		this.id = id;
		this.autor = autor;
		this.description = description;
		this.date = date;
		this.photo = photo;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getPhoto() {
		return photo;
	}

	public void setPhoto(String photo) {
		this.photo = photo;
	}

	public List<Message> getMessages() {
		return messages;
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
	
	public void update(Poster poster) {
		this.description = poster.description;
		this.photo = poster.photo;
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
		Poster other = (Poster) obj;
		return Objects.equals(id, other.id);
	}


}
