package com.charis.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.charis.entities.User;

public interface UserRep extends MongoRepository<User, String> {

}
