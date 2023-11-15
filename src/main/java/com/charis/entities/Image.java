package com.charis.entities;

import java.io.Serializable;
import java.util.Date;

public class Image implements Serializable{

	private static final long serialVersionUID = 1L;
	
	private String id;
	private byte[] image;
	private Date date = new Date();
	
	public Image(byte[] image) {
		this.image = image;
	}

	public String getId() {
		return id;
	}

	public byte[] getImage() {
		return image;
	}

	public void setImage(byte[] image) {
		this.image = image;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}
	
	
	
	

	
	
}
