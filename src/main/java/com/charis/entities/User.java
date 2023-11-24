package com.charis.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.data.mongodb.core.mapping.Document;

import com.charis.entities.enuns.Status;

import jakarta.persistence.Id;

@Document
public class User implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Id
	private String id;
	private String name;
	private String CPF;
	private Date date;
	private Image photo;
	private Long telephone;
	private String describle;
	private List<String> works = new ArrayList<>();
	private Status status;
	
	public User() {
	}

	public User(String id, String name, String cpf, Date date, Image photo,Long telephone) {
		this.id = id;
		this.name = name;
		CPF = cpf;
		this.date = date;
		this.photo = photo;
		this.status = Status.OFFLINE;
		this.telephone = telephone;
	}

	public User(String id, String name, String cpf, Date date, Image photo, String describle) {
		this.id = id;
		this.name = name;
		CPF = cpf;
		this.date = date;
		this.photo = photo;
		this.describle = describle;
		this.status = Status.OFFLINE;
	}
	
	
	public Long getTelephone() {
		return telephone;
	}

	public void setTelephone(Long telephone) {
		this.telephone = telephone;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public Image getPhoto() {
		return photo;
	}

	public void setPhoto(Image photo) {
		this.photo = photo;
	}

	public String getDescrible() {
		return describle;
	}

	public void setDescrible(String describle) {
		this.describle = describle;
	}

	public String getCPF() {
		return CPF;
	}
	
	public void setCPF(String newCpf) {
		CPF = newCpf;
	}

	public List<String> getWorks() {
		return works;
	}

	public String getId() {
		return id;
	}
	
	//Configuration status in platform
	public Status getStatus() {
		return status;
	}

	public void setStatus(Status status) {
		this.status = status;
	}
	
	
	public void updade(User user) {
		this.name = user.name;
		CPF = user.CPF;
		this.date = user.date;
		this.photo = user.photo;
		this.describle = user.describle;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", CPF=" + CPF + ", date=" + date + ", photo=" + photo
				+ ", telephone=" + telephone + ", describle=" + describle + ", works=" + works + ", status=" + status
				+ "]";
	}

	
	
	
	
	
	
	
	
	

}
