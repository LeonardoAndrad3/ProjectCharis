package com.charis.services;

import java.util.List;

public interface BaseCrud<T> {

	public T insert(T t);
	
	public List<T> findAll();
	
	public T findById(String id);
	
	public void update(T t, String id);
	
	public void deleteById(String id);
	
	public void deleteAll();	
}
